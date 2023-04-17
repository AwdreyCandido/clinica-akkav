import React, { useState } from "react";
import { ClinicData, DoctorData } from "@/declaration";
import { createNewClinic } from "@/services/clinics";
import { createCode } from "@/services/utils";
import { HiArrowLeft, HiOutlineInformationCircle } from "react-icons/hi2";
import { createNewDoctor, updateDoctor } from "@/services/doctors";
import PrimaryButton from "../buttons/primary-button/PrimaryButton";

// CodCli: 9999998,
// NomeCli: "Clínica Sede1",
// Endereco: "Av. 17 de Agosto",
// Telefone: "(81) 2658-7561",
// Email: "clinicased2@email.com",

const EditDoctor: React.FC<{
  closeModal: () => void;
  doctor: DoctorData | any;
}> = (props) => {
  const [doctor, setDoctor] = useState<DoctorData>(props.doctor);

  function getValue(
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) {
    event.preventDefault();
    console.log(event.currentTarget.name, event.currentTarget.value);
    const form = {
      ...doctor,
      [event.currentTarget.name]: event.currentTarget.value,
    };
    setDoctor(form);
  }

  function getGender(event: React.ChangeEvent<HTMLSelectElement>) {
    event.preventDefault();
    const form = {
      ...doctor,
      ["Genero"]: event.currentTarget.value,
    };
    setDoctor(form);
  }

  async function onSubmit(event: React.FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    await updateDoctor(doctor);
    props.closeModal();
  }

  return (
    <form className="flex flex-col gap-4 p-8 rounded-3xl max-w-[45rem] bg-white border border-blue-light">
      <h1 className="text-sh flex items-center w-[32rem] gap-8 font-medium">
        <HiArrowLeft className="cursor-pointer" onClick={props.closeModal} />
        Editar informações
      </h1>

      <div>
        <h3 className="text-qh mb-2">Nome</h3>
        <input
          name="NomeMed"
          defaultValue={props.doctor.NomeMed}
          placeholder="Informe o nome do Dr./Dra."
          onChange={getValue}
          className="bg-body w-full text-qh h-[3.3rem] placeholder:text-base text-base px-4 rounded-lg"
        />
      </div>
      <div>
        <h3 className="text-qh mb-2">Genero</h3>
        <select
          name="Gênero"
          defaultValue={props.doctor.Genero}
          onChange={getGender}
          className="bg-body w-full text-qh h-[3.3rem] placeholder:text-base text-base px-4 rounded-lg"
        >
          <option value="M">M</option>
          <option value="F">F</option>
        </select>
      </div>
      {/* <div>
        <h3 className="text-qh mb-2">Clínica</h3>
        <select
          name="Clinica"
          value={props.doctor.NomeEspec}
          onChange={getClinic}
          placeholder="Selecione uma clínica..."
          className="bg-body w-full text-qh h-[3.3rem] placeholder:text-base text-base px-4 rounded-lg"
        >
          {clinics.map((clinic) => {
            return <option value={clinic.CodCli}>{clinic.NomeCli}</option>;
          })}
        </select>
      </div> */}
      <div>
        <h3 className="text-qh mb-2">Telefone</h3>
        <input
          name="Telefone"
          defaultValue={props.doctor.Telefone}
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
          defaultValue={props.doctor.Email}
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
        <PrimaryButton type="primary" onClick={onSubmit} title="Confirmar" />
      </div>
    </form>
  );
};

export default EditDoctor;
