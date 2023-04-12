import React, { useState } from "react";
import Backdrop from "../utils/Backdrop";
import { ClinicData } from "@/declaration";
import { createNewClinic } from "@/services/clinics";
import { createCode } from "@/services/utils";

// CodCli: 9999998,
// NomeCli: "Clínica Sede1",
// Endereco: "Av. 17 de Agosto",
// Telefone: "(81) 2658-7561",
// Email: "clinicased2@email.com",

const CreateClinic = () => {
  const [formData, setFormData] = useState({});

  function getValue(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    console.log(event.currentTarget.name, event.currentTarget.value);

    const form = {
      ...formData,
      [event.currentTarget.name]: event.currentTarget.value,
    };

    setFormData(form);
  }

  function onSubmit(event: React.FormEvent<HTMLButtonElement>) {
    event.preventDefault();

    const clinic = Object.assign({ CodCli: createCode() }, { ...formData });
    console.log("🚀 ~ file: CreateClinic.tsx:32 ~ onSubmit ~ clinic:", clinic)

    createNewClinic(clinic);
  }

  return (
    // <Backdrop>
    <div className="flex bg-blue-primary justify-center items-center text-black-80 w-full bg-transparent">
      <section
        className={`absolute z-[130] top-0 mt-[12rem] overflow-auto duration-300 w-fit`}
      >
        <form className="flex flex-col gap-4 p-8 rounded-2xl max-w-[40rem] bg-white border border-blue-light">
          <h1 className="text-ph font-medium">Cadastrar Clínica</h1>
          <div>
            <h3 className="text-qh mb-2">Nome</h3>
            <input
              name="NomeCli"
              onChange={getValue}
              className="bg-body w-full text-qh h-[3.6rem] px-4 rounded-xl"
            />
          </div>
          <div>
            <h3 className="text-qh mb-2">Endereco</h3>
            <input
              name="Endereco"
              onChange={getValue}
              className="bg-body w-full text-qh h-[3.6rem] px-4 rounded-xl"
            />
          </div>
          <div>
            <h3 className="text-qh mb-2">Telefone</h3>
            <input
              name="Telefone"
              onChange={getValue}
              type="tel"
              maxLength={15}
              className="bg-body w-full text-qh h-[3.6rem] px-4 rounded-xl"
            />
          </div>
          <div>
            <h3 className="text-qh mb-2">Email</h3>
            <input
              name="Email"
              onChange={getValue}
              className="bg-body w-full text-qh h-[3.6rem] px-4 rounded-xl"
            />
          </div>
          <div className="mt-8 flex gap-8 justify-end">
            <button className="text-base bg-red-primary text-white py-4 px-8 rounded-xl">
              Cancelar
            </button>
            <button
              onClick={onSubmit}
              className="text-base bg-blue-primary text-white py-4 px-8 rounded-xl"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </section>
    </div>
    // </Backdrop>
  );
};

export default CreateClinic;
