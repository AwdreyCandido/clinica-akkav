import { DoctorData, PacientData } from "@/declaration";
import React, { useState } from "react";
import IconButton from "../buttons/icon-button/IconButton";
import { TbTrash } from "react-icons/tb";
import CentralModal from "../modals/CentralModal";
import { deleteDoctorFromClinic } from "@/services/clinics";
import DeleteAlert from "../modals/DeleteAlert";

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
    <section className="flex flex-col gap-4 border border-black-20 rounded-3xl overflow-hidden bg-[#f0f0f0]">
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
                  <tr
                    key={item.CodCli}
                    className="gap-8 bg-white p-4 [&:not(:last-child)]:border-b border-b-blue-light rounded-lg text-qh"
                  >
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
                  <tr
                    key={item.CpfPaciente}
                    className="gap-8 bg-white p-4 [&:not(:last-child)]:border-b border-b-blue-light rounded-lg text-qh"
                  >
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
