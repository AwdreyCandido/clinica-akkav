import Image from "next/image";
import { useEffect, useState } from "react";
import { deleteClinic, getAllClinics } from "@/services/clinics";

import clinicImage from "./../../public/assets/images/clinic.jpg";
import CreateClinic from "@/components/forms/CreateClinic";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import CentralModal from "@/components/modals/CentralModal";
import PrimaryButton from "@/components/buttons/primary-button/PrimaryButton";

const index = () => {
  const [clinics, setClinics] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    getAllClinicsHandler();
  }, []);

  async function getAllClinicsHandler() {
    const clinics = await getAllClinics();
    setClinics(clinics);
  }

  function showFormHandler() {
    setShowForm(!showForm);
  }

  function deleteHandler() {
    deleteClinic("C000001");
  }

  function selectedIdHandler(this: string) {
    window.localStorage.setItem("id", this);
  }

  return (
    <Layout>
      <section className="w-full">
        <div className="w-full flex justify-between items-center mb-12">
          <h1 className="text-ph font-medium">Clínicas</h1>

          <div>
            <PrimaryButton
              onClick={showFormHandler}
              title="Cadastrar nova Clínica"
              type="primary" 
            />
          </div>
        </div>
        <section className="flex flex-col justify-center md:grid place-content-center  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-12">
          {clinics.map((clinic: any) => {
            return (
              <Link
                href={`/clinic/${clinic.CodCli}`}
                onClick={selectedIdHandler.bind(clinic.CodCli)}
              >
                <div  className="bg-white flex w-full items-center border border-blue-light gap-8 text-qh rounded-3xl py-6 px-8 cursor-pointer shadow-md hover:shadow-none duration-300">
                  <div className="h-[10rem] w-[10rem] rounded-full overflow-hidden border border-blue-light">
                    <Image src={clinicImage} alt="" />
                  </div>
                  <div className="w-max flex flex-col gap-2">
                    <p className=" -translate-x-2">{clinic.NomeCli}</p>
                    <p>{clinic.Endereco}</p>
                    <p className=" -translate-x-2">{clinic.Telefone}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </section>
        {showForm && (
          <CentralModal
            children={<CreateClinic closeModal={showFormHandler} />}
            closeModal={showFormHandler}
            isOpen={showForm}
          />
        )}
      </section>
    </Layout>
  );
};

export default index;
