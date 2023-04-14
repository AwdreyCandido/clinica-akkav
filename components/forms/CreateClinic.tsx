import React, { useState } from "react";
import { ClinicData } from "@/declaration";
import { createNewClinic } from "@/services/clinics";
import { createCode } from "@/services/utils";
import { HiArrowLeft } from "react-icons/hi2";

// CodCli: 9999998,
// NomeCli: "Clínica Sede1",
// Endereco: "Av. 17 de Agosto",
// Telefone: "(81) 2658-7561",
// Email: "clinicased2@email.com",

const CreateClinic: React.FC<{
  closeModal: () => void;
}> = (props) => {
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
    console.log("🚀 ~ file: CreateClinic.tsx:32 ~ onSubmit ~ clinic:", clinic);

    createNewClinic(clinic);
    props.closeModal()
  }

  return (
    // <Backdrop>

        <form className="flex flex-col gap-4 p-8 rounded-3xl bg-white w-fit border border-blue-light">
          <h1 className="text-ph flex items-center gap-8 w-fit font-medium">
            <HiArrowLeft
              className="cursor-pointer"
              onClick={props.closeModal}
            />
            Cadastrar Clínica
          </h1>

          <div>
            <h3 className="text-qh mb-2">Nome</h3>
            <input
              name="NomeCli"
              placeholder="Ex: Clínica AKKAV"
              onChange={getValue}
              className="bg-body w-full text-qh h-[3.3rem] placeholder:text-base text-base px-4 rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-qh mb-2">Endereço</h3>
            <input
              name="Endereco"
              placeholder="Ex: Av. Gatinho fofinho, nº2"
              onChange={getValue}
              className="bg-body w-full text-qh h-[3.3rem] placeholder:text-base text-base px-4 rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-qh mb-2">Telefone</h3>
            <input
              name="Telefone"
              placeholder="Ex: (99) 99999-9999"
              onChange={getValue}
              type="tel"
              maxLength={15}
              className="bg-body w-full text-qh h-[3.3rem] placeholder:text-base text-base px-4 rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-qh mb-2">E-mail</h3>
            <input
              name="Email"
              placeholder="Ex: clinica@akkav.com.br"
              onChange={getValue}
              className="bg-body w-full text-qh h-[3.3rem] placeholder:text-base text-base px-4 rounded-lg"
            />
          </div>
          <div className="mt-8 flex gap-8 justify-end">
            <button
              onClick={props.closeModal}
              className="text-base bg-red-primary text-white py-6 px-8 rounded-3xl"
            >
              Cancelar
            </button>
            <button
              onClick={onSubmit}
              className="text-base w-full bg-blue-primary text-white py-6 px-8 rounded-3xl"
            >
              Cadastrar
            </button>
          </div>
        </form>
    // </Backdrop>
  );
};

export default CreateClinic;
