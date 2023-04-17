import React, { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import Layout from "@/components/layout/Layout";
import { getClinic } from "@/services/clinics";
import { ClinicData, DoctorData } from "@/declaration";
import Image from "next/image";
import clinicImage from "./../../public/assets/images/clinic.jpg";
import noData from "./../../public/assets/images/noData.svg";

import { TbPhone, TbMapPin, TbMail } from "react-icons/tb";
import Table from "@/components/table/Table";

const index = () => {
  const [clinic, setClinic] = useState<ClinicData>();
  const [doctors, setDoctors] = useState<DoctorData[] | undefined>();
  const router = useRouter();

  useEffect(() => {
    const id = window.localStorage.getItem("id");
    getClinicHandler(id!);
  }, []);

  async function getClinicHandler(id: string) {
    const res = await getClinic({ CodCli: id });
    const { clinic, doctors } = res;
    setClinic(clinic[0]);
    setDoctors(doctors);
  }

  return (
    <Layout>
      <section className="">
        <div className="flex items-center gap-10">
          <div className="w-[16rem] h-[16rem] border border-blue-light rounded-3xl overflow-hidden">
            <Image src={clinicImage} alt="" />
          </div>
          <div>
            <p className="text-ph font-medium mb-2">{clinic?.NomeCli}</p>
            <div className=" flex flex-col gap-2 text-qh">
              <div className="flex items-center gap-4">
                <TbMail className="text-sh text-blue-primary" />
                <p>{clinic?.Email}</p>
              </div>
              <div className="flex items-center gap-4">
                <TbMapPin className="text-sh text-blue-primary" />
                <p>{clinic?.Endereco}</p>
              </div>
              <div className="flex items-center gap-4">
                <TbPhone className="text-sh text-blue-primary" />
                <p>{clinic?.Telefone}</p>
              </div>
            </div>
          </div>
        </div>

        {doctors?.length === 0 ? (
          <div className="flex flex-col gap-12 justify-center mt-24 items-center">
            <h1 className="text-sh text-center font-medium text-black-40">
              Não existem médicos cadastrados nessa clínica...
            </h1>
            <Image src={noData} alt="" className="w-[55rem]" />
          </div>
        ) : (
          <>
            <h1 className="text-ph my-8 font-medium">Médicos da Clínica</h1>
            <Table list={doctors} type="clinic" />
          </>
        )}
      </section>
    </Layout>
  );
};

export default index;
