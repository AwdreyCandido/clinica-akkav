import Image from "next/image";
import { Inter } from "next/font/google";
import { connectDB } from "@/services/db";
import { useEffect, useState } from "react";
import { createNewClinic, getAllClinics } from "@/services/clinics";

import clinicImage from "./../public/assets/images/clinic.jpg";

const inter = Inter({ subsets: ["latin"] });

const index = () => {
  const [clinics, setClinics] = useState([]);

  useEffect(() => {
    getAllClinicsHandler();
  }, []);

  async function createNewClinicHandler() {
    createNewClinic({
      cod: 9999998,
      name: "Clínica Sede1",
      address: "Av. 17 de Agosto",
      phone: "(81) 2658-7561",
      email: "clinicased2@email.com",
    });
  }

  async function getAllClinicsHandler() {
    const res = await getAllClinics();
    setClinics(res);
  }

  return (
    <main className="h-screen">
      {/* <button onClick={getAllClinicsHandler}>GET</button> */}
      <button onClick={createNewClinicHandler}>CREATE</button>
      <section className="flex gap-12">
        {" "}
        {clinics.map((clinic: any) => {
          return (
            <div className="bg-white flex items-center border border-blue-light gap-8 text-qh w-fit rounded-2xl py-4 px-8 cursor-pointer shadow-md hover:shadow-none duration-300">
              <div className="h-[10rem] w-[10rem] rounded-full overflow-hidden border border-blue-light">
                <Image src={clinicImage} alt="" />
              </div>
              <div>
                <p>{clinic.NomeCli}</p>
                <p>{clinic.Endereco}</p>
                <p>{clinic.Telefone}</p>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default index;
