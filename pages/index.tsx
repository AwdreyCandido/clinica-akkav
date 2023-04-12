import Image from "next/image";
import { Inter } from "next/font/google";
import { connectDB } from "@/services/db";
import { useEffect, useState } from "react";
import {
  createNewClinic,
  deleteClinic,
  getAllClinics,
  updateClinic,
} from "@/services/clinics";

import { TbHome } from "react-icons/tb";
import clinicImage from "./../public/assets/images/clinic.jpg";
import CreateClinic from "@/components/forms/CreateClinic";
import { useRouter } from "next/router";
import Link from "next/link";

const index = () => {
  const [clinics, setClinics] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const router = useRouter();

  useEffect(() => {
    getAllClinicsHandler();
  }, []);

  async function updateClinicHandler() {
    updateClinic({
      CodCli: "C000001",
      NomeCli: "Clínica Sede1",
      Endereco: "Av. 22 de Agosto",
      Telefone: "(81) 8888-7561",
      Email: "clinicased2@email.com",
    });
  }

  async function getAllClinicsHandler() {
    const res = await getAllClinics();
    setClinics(res);
  }

  async function deleteClinicHandler() {
    deleteClinic({
      CodCli: "C000001",
    });
  }

  function showFormHandler() {
    setShowForm(!showForm);
  }

  return (
    <main className="relative h-screen flex bg-body overflow">
      <ul className="flex flex-col max-h-screen gap-8 px-4 text-th bg-white">
        <li className="bg-blue-light cursor-pointer w-[4rem] my-8 h-[4rem] flex justify-center items-center rounded-2xl">
          7
        </li>
        <li className="bg-blue-light cursor-pointer w-[4rem] h-[4rem] flex justify-center items-center rounded-2xl">
          <TbHome />
        </li>
        <li className="bg-blue-light cursor-pointer w-[4rem] h-[4rem] flex justify-center items-center rounded-2xl">
          B
        </li>
        <li className="bg-blue-light cursor-pointer w-[4rem] h-[4rem] flex justify-center items-center rounded-2xl">
          C
        </li>
        <li className="bg-blue-light cursor-pointer w-[4rem] h-[4rem] flex justify-center items-center rounded-2xl">
          D
        </li>
      </ul>
      <section className="py-8 px-12">
        <div className="w-full flex justify-between mb-12">
          <h1 className="text-ph font-medium">Minhas Clínicas</h1>
          <button
            onClick={deleteClinicHandler}
            className="text-base bg-blue-primary text-white py-4 px-8 rounded-xl"
          >
            Delete
          </button>
          <button
            onClick={updateClinicHandler}
            className="text-base bg-blue-primary text-white py-4 px-8 rounded-xl"
          >
            Update
          </button>
          <button
            onClick={showFormHandler}
            className="text-base bg-blue-primary text-white py-4 px-8 rounded-xl"
          >
            Cadastrar nova clínica
          </button>
        </div>
        <section className="grid grid-cols-4 justify-between gap-12">
          {clinics.map((clinic: any) => {
            return (
              <Link href={`/clinic/${clinic.CodCli}`}>
                <div className="bg-white flex w-full items-center border border-blue-light gap-8 text-qh rounded-2xl py-4 px-8 cursor-pointer shadow-md hover:shadow-none duration-300">
                  <div className="h-[10rem] w-[10rem] rounded-full overflow-hidden border border-blue-light">
                    <Image src={clinicImage} alt="" />
                  </div>
                  <div>
                    <p>{clinic.NomeCli}</p>
                    <p>{clinic.Endereco}</p>
                    <p>{clinic.Telefone}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </section>
        {showForm && <CreateClinic />}
      </section>
    </main>
  );
};

export default index;
