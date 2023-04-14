import { DoctorData, PacientData } from "@/declaration";
import React, { useState } from "react";
import IconButton from "../buttons/icon-button/IconButton";
import { TbTrash } from "react-icons/tb";
import CentralModal from "../modals/CentralModal";
import { deleteDoctorFromClinic } from "@/services/clinics";

const Table: React.FC<{ list: any; type: string }> = ({ list, type }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [codDoctor, setCodDoctor] = useState("");
  // const [codClinic, setCodClinic] = useState();

  async function deleteDoctorFromClinicHandler() {
    const codClinic = window.localStorage.getItem("id");
    const res = await deleteDoctorFromClinic(codClinic, codDoctor);
    if (res.message === "success") {
      setShowAlert(false);
    }
  }

  function setshowAlertHandler(this: string) {
    setCodDoctor(this);
    setShowAlert(!showAlert);
  }

  return (
    <section className="flex flex-col gap-4 border border-black-20 rounded-3xl overflow-hidden">
      <table>
        <tbody>
          {type === "clinic" ? (
            <tr className="">
              <th className="py-4 text-start font-normal text-black-40 text-qh pl-12">
                Nome
              </th>
              <th className="text-start font-normal text-black-40 text-qh">
                E-mail
              </th>
              <th className="text-start font-normal text-black-40 text-qh">
                Telefone
              </th>
              <th className="hidden lg:table-cell text-start font-normal text-black-40 text-qh">
                Gênero
              </th>
              <th className="text-start font-normal text-black-40 text-qh pr-12">
                Especialidade
              </th>
            </tr>
          ) : (
            <tr className="">
              <th className="py-4 text-start font-normal text-black-40 text-qh pl-12">
                Nome
              </th>
              <th className="py-4 text-start font-normal text-black-40 text-qh">
                CPF
              </th>
              <th className="text-start font-normal text-black-40 text-qh">
                E-mail
              </th>
              <th className="text-start font-normal text-black-40 text-qh">
                Telefone
              </th>
              <th className="hidden lg:table-cell text-start font-normal text-black-40 text-qh">
                Gênero
              </th>
              <th className="text-start font-normal text-black-40 text-qh pr-12">
                Data da consulta
              </th>
            </tr>
          )}

          {type === "clinic"
            ? list?.map((item: DoctorData) => {
                console.log(item);
                return (
                  <tr className="gap-8 bg-white p-4 [&:not(:last-child)]:border-b border-b-blue-light rounded-lg text-qh">
                    <td className="pl-12 py-4">{item.NomeMed}</td>
                    <td className="py-4">{item.Email}</td>
                    <td className="py-4">{item.Telefone}</td>
                    <td className="py-4 hidden lg:table-cell">{item.Genero}</td>
                    <td className="py-4">{item.NomeEspec}</td>
                    <td className="py-4">
                      <IconButton
                        icon={<TbTrash />}
                        onClick={setshowAlertHandler.bind(item.CodMed)}
                        type="delete"
                      />
                    </td>
                  </tr>
                );
              })
            : list?.map((item: PacientData) => {
                console.log(item);
                return (
                  <tr className="gap-8 bg-white p-4 [&:not(:last-child)]:border-b border-b-blue-light rounded-lg text-qh">
                    <td className="pl-12 py-4">{item.NomePac}</td>
                    <td className=" pr-12 py-4">{item.CpfPaciente}</td>
                    <td className="py-4">{item.Email}</td>
                    <td className="py-4">{item.Telefone}</td>
                    <td className="py-4 hidden lg:table-cell">{item.Genero}</td>
                    <td className="py-4">
                      {new Date(item.Data_Hora).toLocaleDateString()}
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
      {showAlert && (
        <CentralModal
          children={
            <DeleteAlert
              onClose={setshowAlertHandler}
              onConfirm={deleteDoctorFromClinicHandler}
            />
          }
          isOpen={showAlert}
          closeModal={setshowAlertHandler}
        />
      )}
    </section>
  );
};

export default Table;

const DeleteAlert: React.FC<{
  onClose: () => void;
  onConfirm: () => void;
  isOpen?: boolean;
}> = ({ onClose, onConfirm }) => {
  return (
    <div className="p-8 text-qh text-center rounded-3xl bg-white border border-blue-light">
      <h2>Tem certeza que deseja excluir esse médico?</h2>
      <p className="text-base">Essa ação não poderá ser desfeita...</p>
      <div className="mt-8 flex gap-8 justify-end">
        <button
          onClick={onClose}
          className="text-base bg-red-primary text-white py-5 px-8 rounded-3xl"
        >
          Cancelar
        </button>
        <button
          onClick={onConfirm}
          className=" flex-grow-[2] text-base w-full bg-blue-primary text-white py-5 px-8 rounded-3xl"
        >
          Confirmar
        </button>
      </div>
    </div>
  );
};
