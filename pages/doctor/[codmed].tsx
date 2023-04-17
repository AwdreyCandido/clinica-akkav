import React, { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import Layout from "@/components/layout/Layout";
import { getClinic } from "@/services/clinics";
import { ClinicData, DoctorData } from "@/declaration";
import Image from "next/image";

import { TbPhone, TbStethoscope, TbMail } from "react-icons/tb";
import Table from "@/components/table/Table";
import { deleteDoctor, getDoctor } from "@/services/doctors";
import { FaHandHoldingMedical } from "react-icons/fa";
import PrimaryButton from "@/components/buttons/primary-button/PrimaryButton";
import CentralModal from "@/components/modals/CentralModal";
import EditDoctor from "@/components/forms/EditDoctor";
import DeleteAlert from "@/components/modals/DeleteAlert";
import noData from "./../../public/assets/images/noData.svg";

const index = () => {
  const [showForm, setShowForm] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [doctor, setDoctor] = useState<DoctorData>();
  const [pacients, setPacients] = useState<any[]>();

  const router = useRouter();

  useEffect(() => {
    const id = window.localStorage.getItem("id");
    getDoctorHandler(id!);
  }, []);

  async function getDoctorHandler(id: string) {
    const res = await getDoctor({ CodMed: id });
    const { doctor, pacients } = res;
    setDoctor(doctor[0]);
    setPacients(pacients);
  }

  async function deleteDoctorHandler() {
    const codMed = window.localStorage.getItem("id");
    await deleteDoctor(codMed);

    router.back();
  }

  function showFormHandler() {
    setShowForm(!showForm);
  }

  function showConfirmHandler() {
    setShowConfirm(!showConfirm);
  }

  return (
    <Layout>
      <section className="">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-10">
            <div className="min-h-[15rem] min-w-[15rem] bg-white flex items-center justify-center rounded-full overflow-hidden border border-blue-light">
              {/* <Image src={doctorImage} alt="" /> */}
              <FaHandHoldingMedical className="text-[6rem] text-blue-light" />
            </div>
            <div>
              <p className="text-ph font-medium mb-2 w-max">
                {doctor?.NomeMed}
              </p>
              <div className=" flex flex-col gap-2 text-qh">
                <div className="flex items-center gap-4">
                  <TbMail className="text-sh text-blue-primary" />
                  <p>{doctor?.Email}</p>
                </div>
                <div className="flex items-center gap-4">
                  <TbPhone className="text-sh text-blue-primary" />
                  <p>{doctor?.Telefone}</p>
                </div>
                <div className="flex items-center gap-4">
                  <TbStethoscope className="text-sh text-blue-primary" />
                  <p>{doctor?.NomeEspec}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end w-full gap-12">
            <div>
              <PrimaryButton
                onClick={showConfirmHandler}
                title="Excluir Doutor"
              />
            </div>
            <div>
              <PrimaryButton
                type="primary"
                onClick={showFormHandler}
                title="Editar Doutor"
              />
            </div>
          </div>
        </div>

        {pacients?.length === 0 ? (
          <div className="flex flex-col gap-12 justify-center mt-24 items-center">
            <h1 className="text-sh text-center font-medium text-black-40">
              Nenhuma consulta marcada com esse médico...
            </h1>
            <Image src={noData} alt="" className="w-[55rem]" />
          </div>
        ) : (
          <>
            <h1 className="text-ph my-8 font-medium">Consultas marcadas</h1>
            <Table list={pacients} type="doctor" />
          </>
        )}
      </section>
      <>
        {showForm && (
          <CentralModal
            children={
              <EditDoctor doctor={doctor} closeModal={showFormHandler} />
            }
            isOpen={showForm}
            closeModal={showFormHandler}
          />
        )}
      </>
      <>
        {showConfirm && (
          <CentralModal
            children={
              <DeleteAlert
                onClose={showConfirmHandler}
                onConfirm={deleteDoctorHandler}
              />
            }
            isOpen={showConfirm}
            closeModal={showConfirmHandler}
          />
        )}
      </>
    </Layout>
  );
};

export default index;
