import React, { useContext, useState } from "react";
import { ClinicData } from "@/declaration";
import { createNewClinic, updateClinic } from "@/services/clinics";
import { createCode } from "@/services/utils";
import { HiArrowLeft } from "react-icons/hi2";
import { ClinicContext } from "@/context/ClinicContext";

const EditClinic: React.FC<{
  closeModal: () => void;
  clinic: ClinicData | any;
}> = (props) => {
  const [formData, setFormData] = useState(props.clinic);

  const { updateClinicList } = useContext(ClinicContext);

  function getValue(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    console.log(event.currentTarget.name, event.currentTarget.value);

    const form = {
      ...formData,
      [event.currentTarget.name]: event.currentTarget.value,
    };

    setFormData(form);
  }

  async function onSubmit(event: React.FormEvent<HTMLButtonElement>) {
    event.preventDefault();

    const clinic: any = Object.assign(
      { CodCli: createCode() },
      { ...formData }
    );

    await updateClinic(clinic);
    updateClinicList(clinic);
    window.location.reload();
    props.closeModal();
  }

  return (
    <form className="flex flex-col gap-4 p-8 rounded-3xl bg-white w-fit border border-blue-light">
      <h1 className="text-ph flex items-center gap-8 w-fit font-medium">
        <HiArrowLeft className="cursor-pointer" onClick={props.closeModal} />
        Editar Clínica
      </h1>

      <div>
        <h3 className="text-qh mb-2">Nome</h3>
        <input
          name="NomeCli"
          defaultValue={props.clinic.NomeCli}
          placeholder="Ex: Clínica AKKAV"
          onChange={getValue}
          className="bg-body w-full text-qh h-[3.3rem] placeholder:text-base text-base px-4 rounded-lg"
        />
      </div>
      <div>
        <h3 className="text-qh mb-2">Endereço</h3>
        <input
          name="Endereco"
          defaultValue={props.clinic.Endereco}
          placeholder="Ex: Av. Gatinho fofinho, nº2"
          onChange={getValue}
          className="bg-body w-full text-qh h-[3.3rem] placeholder:text-base text-base px-4 rounded-lg"
        />
      </div>
      <div>
        <h3 className="text-qh mb-2">Telefone</h3>
        <input
          name="Telefone"
          defaultValue={props.clinic.Telefone}
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
          defaultValue={props.clinic.Email}
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
          Confirmar
        </button>
      </div>
    </form>
  );
};

export default EditClinic;
