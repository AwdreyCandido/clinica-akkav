import Layout from "@/components/layout/Layout";
import { getAllDoctors } from "@/services/doctors";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import doctorImage from "./../../public/assets/images/doctor.jpg";
import Image from "next/image";
import { FaHandHoldingMedical } from "react-icons/fa";
import CentralModal from "@/components/modals/CentralModal";
import { DoctorData } from "@/declaration";
import CreateDoctor from "@/components/forms/CreateDoctor";
import PrimaryButton from "@/components/buttons/primary-button/PrimaryButton";
import { ClinicContext } from "@/context/ClinicContext";

const index = () => {
  const [showForm, setShowForm] = useState(false);

  const { setDoctors, doctorsList } = useContext(ClinicContext);

  useEffect(() => {
    getAllDoctorsHandler();
  }, []);

  async function getAllDoctorsHandler() {
    const res = await getAllDoctors();
    setDoctors(res);
  }

  function showFormHandler() {
    setShowForm(!showForm);
  }

  function selectedIdHandler(this: string) {
    window.localStorage.setItem("id", this);
  }

  return (
    <Layout>
      <section className="w-full">
        <div className="w-full flex justify-between items-center mb-12">
          <h1 className="text-ph font-medium">Médicos</h1>

          <div>
            <PrimaryButton
              onClick={showFormHandler}
              title="Cadastrar novo Médico"
              type="primary"
            />
          </div>
        </div>
        {/* <section className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-12"> */}
        <section className="grid place-content-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
          {doctorsList?.map((doctor: any) => {
            return (
              <Link
                href={`/doctor/${doctor.CodMed}`}
                onClick={selectedIdHandler.bind(doctor.CodMed)}
              >
                <div className="bg-white overflow-hidden flex w-full items-center border border-blue-light gap-4 text-qh rounded-3xl p-6 cursor-pointer shadow-md hover:shadow-none duration-300">
                  <div className="min-h-[10rem] min-w-[10rem] rounded-full flex justify-center items-center overflow-hidden border border-blue-light">
                    {/* <Image src={doctorImage} alt="" /> */}
                    <FaHandHoldingMedical className="text-[6rem] text-blue-light" />
                  </div>
                  <div className="w-max flex flex-col gap-2">
                    <p className=" -translate-x-2">
                      {doctor.Genero == "M" ? "Dr." : "Dra."}{" "}
                      {doctor.NomeMed.split(" ").slice(0, 2).join(" ")}
                    </p>
                    <p>{doctor.Telefone}</p>
                    <p className=" -translate-x-2">{doctor.Email}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </section>
        {showForm && (
          <CentralModal
            children={<CreateDoctor closeModal={showFormHandler} />}
            closeModal={showFormHandler}
            isOpen={showForm}
          />
        )}
      </section>
    </Layout>
  );
};

export default index;
