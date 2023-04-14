import React, { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import Layout from "@/components/layout/Layout";
import { getClinic } from "@/services/clinics";
import { ClinicData, DoctorData } from "@/declaration";
import Image from "next/image";
import doctorImage from "./../../public/assets/images/doctor.jpg";

import { TbPhone, TbStethoscope, TbMail } from "react-icons/tb";
import Table from "@/components/table/Table";
import { getDoctor } from "@/services/doctors";
import { FaHandHoldingMedical } from "react-icons/fa";

const index = () => {
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

  return (
    <Layout>
      <section className="">
        <div className="flex items-center gap-10">
          <div className="min-h-[15rem] min-w-[15rem] bg-white flex items-center justify-center rounded-full overflow-hidden border border-blue-light">
            {/* <Image src={doctorImage} alt="" /> */}
            <FaHandHoldingMedical className="text-[6rem] text-blue-light" />
          </div>
          <div>
            <p className="text-ph font-medium mb-2">{doctor?.NomeMed}</p>
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

        {pacients?.length === 0 ? (
          <div>
            <h1 className="text-ph mt-12 font-medium text-black-40">
              Nenhuma consulta marcada
            </h1>
          </div>
        ) : (
          <>
            <h1 className="text-ph my-8 font-medium">Consultas marcadas</h1>
            <Table list={pacients} type="doctor" />
          </>
        )}
      </section>
    </Layout>
  );
};

export default index;