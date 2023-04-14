import React, { useState } from "react";
import { ClinicData } from "@/declaration";
import { createNewClinic } from "@/services/clinics";
import { createCode } from "@/services/utils";
import { HiArrowLeft, HiOutlineInformationCircle } from "react-icons/hi2";
import { createNewDoctor } from "@/services/doctors";

// CodCli: 9999998,
// NomeCli: "Clínica Sede1",
// Endereco: "Av. 17 de Agosto",
// Telefone: "(81) 2658-7561",
// Email: "clinicased2@email.com",

const CreateDoctor: React.FC<{
  closeModal: () => void;
}> = (props) => {
  const [formData, setFormData] = useState({});

  function getValue(
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) {
    event.preventDefault();
    console.log(event.currentTarget.name, event.currentTarget.value);

    const form = {
      ...formData,
      [event.currentTarget.name]: event.currentTarget.value,
    };

    setFormData(form);
  }
  function getGender(event: React.ChangeEvent<HTMLSelectElement>) {
    event.preventDefault();

    const form = {
      ...formData,
      ["Genero"]: event.currentTarget.value,
    };

    setFormData(form);
  }

  function getClinic(event: React.ChangeEvent<HTMLSelectElement>) {
    event.preventDefault();

    const form = {
      ...formData,
      ["CodCli"]: event.currentTarget.value,
    };

    setFormData(form);
  }

  async function onSubmit(event: React.FormEvent<HTMLButtonElement>) {
    event.preventDefault();

    const doctor = Object.assign(
      { CodMed: createCode() },
      { CodEspec: "ESP000" },
      { ...formData }
    );
    console.log("🚀 ~ file: CreateDoctor.tsx:38 ~ onSubmit ~ doctor:", doctor);

    await createNewDoctor(doctor);
    props.closeModal();
  }

  const clinics = [
    {
      CodCli: "C000001",
      NomeCli: "Clínica Sede1",
      Endereco: "Av. 17 de Agosto",
      Telefone: "(81) 2658-7561",
      Email: "clinicasede@email.com",
    },
    {
      CodCli: "C000002",
      NomeCli: "Clínica Acolher",
      Endereco: "Rua das Flores",
      Telefone: "(81) 9999-9999",
      Email: "clinicaacolher@email.com",
    },
    {
      CodCli: "C000003",
      NomeCli: "Clínica Vida Saudável",
      Endereco: "Rua das Palmeiras",
      Telefone: "(81) 8888-8888",
      Email: "clinicavida@email.com",
    },
    {
      CodCli: "C000004",
      NomeCli: "Clínica Esperança",
      Endereco: "Rua dos Sonho",
      Telefone: "(81) 7777-7777",
      Email: "clinicaesperanca@email.com",
    },
    {
      CodCli: "C000005",
      NomeCli: "Clínica Saúde Total",
      Endereco: "Rua das Pedras",
      Telefone: "(81) 6666-6666",
      Email: "clinicasaudetotal@email.com",
    },
    {
      CodCli: "C000006",
      NomeCli: "Clínica Bem Estar",
      Endereco: "Rua das Águas",
      Telefone: "(81) 5555-5555",
      Email: "clinicabemestar@email.com",
    },
  ];

  return (
    // <Backdrop>

    <form className="flex flex-col gap-4 p-8 rounded-3xl max-w-[40rem] bg-white border border-blue-light">
      <h1 className="text-ph flex items-center gap-8 font-medium">
        <HiArrowLeft className="cursor-pointer" onClick={props.closeModal} />
        Novo Médico
      </h1>

      <div>
        <h3 className="text-qh mb-2">Nome</h3>
        <input
          name="NomeMed"
          placeholder="Informe o nome do Dr./Dra."
          onChange={getValue}
          className="bg-body w-full text-qh h-[3.3rem] placeholder:text-base text-base px-4 rounded-lg"
        />
      </div>
      <div>
        <h3 className="text-qh mb-2">Genero</h3>
        <select
          name="Gênero"
          onChange={getGender}
          className="bg-body w-full text-qh h-[3.3rem] placeholder:text-base text-base px-4 rounded-lg"
        >
          <option disabled selected>
            Selecione um gênero...
          </option>
          <option value="M">M</option>
          <option value="F">F</option>
        </select>
      </div>
      <div>
        <h3 className="text-qh mb-2">Clínica</h3>
        <select
          name="Clinica"
          onChange={getClinic}
          placeholder="Selecione uma clínica..."
          className="bg-body w-full text-qh h-[3.3rem] placeholder:text-base text-base px-4 rounded-lg"
        >
          <option value="" disabled selected>
            Selecione uma clínica...
          </option>
          {/* RODAR LOOP COM TODAS AS CLINICAS CADASTRADAS */}
          {clinics.map((clinic) => {
            return <option value={clinic.CodCli}>{clinic.NomeCli}</option>;
          })}
        </select>
        <div className="flex gap-1">
          <HiOutlineInformationCircle className="text-sh" />
          <p className="items-center leading-tight text-[1.2rem] mt-2">
            Se nenhuma clínica for selecionada o médico será alocado para a
            Clínica Sede
          </p>
        </div>
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
          placeholder="Ex: capitao@patria.com.br"
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
  );
};

export default CreateDoctor;
