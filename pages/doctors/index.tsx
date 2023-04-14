import Layout from "@/components/layout/Layout";
import { getAllDoctors } from "@/services/doctors";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import doctorImage from "./../../public/assets/images/doctor.jpg";
import Image from "next/image";
import { FaHandHoldingMedical } from "react-icons/fa";
import CentralModal from "@/components/modals/CentralModal";
import { DoctorData } from "@/declaration";
import CreateDoctor from "@/components/forms/CreateDoctor";


const index = () => {
  const [doctors, setDoctors] = useState([]);
  const [showForm, setShowForm] = useState(false);

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

          <button
            onClick={showFormHandler}
            className="text-base bg-blue-primary text-white py-5 px-8 rounded-3xl "
          >
            Cadastrar novo Médico
          </button>
        </div>
        {/* <section className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-12"> */}
        <section className="grid place-content-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12">
          {doctors.map((doctor: any) => {
            return (
              <Link
                href={`/doctor/${doctor.CodMed}`}
                onClick={selectedIdHandler.bind(doctor.CodMed)}
              >
                <div className="bg-white flex flex-col w-[22rem] items-center border border-blue-light gap-8 text-qh rounded-3xl p-8 cursor-pointer shadow-md hover:shadow-none duration-300">
                  <div className="min-h-[15rem] min-w-[15rem] flex items-center justify-center rounded-full overflow-hidden border border-blue-light">
                    {/* <Image src={doctorImage} alt="" /> */}
                    <FaHandHoldingMedical className="text-[6rem] text-blue-light" />
                  </div>
                  <div>
                    <p>
                      {doctor.Genero == "M" ? "Dr." : "Dra."} {doctor.NomeMed}
                    </p>
                    <p>{doctor.Telefone}</p>
                    <p>{doctor.Email}</p>
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
