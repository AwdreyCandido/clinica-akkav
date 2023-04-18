import { ClinicData, DoctorData } from "@/declaration";
import { createContext, useEffect, useState } from "react";

type ClinicContextType = {
  clinicsList: any[] | undefined;
  doctorsList: any[] | undefined;
  setClinics: (list: any[]) => void;
  setDoctors: (list: any[]) => void;

  createClinic: (clinic: ClinicData) => void;
  updateClinicList: (updatedClinic: ClinicData) => void;
  deleteClinic: (selectedClinic: ClinicData) => void;

  createDoctor: (doctor: DoctorData) => void;
  updateDoctorList: (updatedDoctor: DoctorData) => void;
  deleteDoctor: (selectedDoctor: DoctorData) => void;
};

export const ClinicContext = createContext({} as ClinicContextType);

const ClinicDataProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [clinicsList, setClinicsList] = useState<any[]>([]);
  const [doctorsList, setDoctorsList] = useState<any[]>([]);

  const setClinics = (list: any[]) => {
    setClinicsList(list);
  };

  const createClinic = (clinic: ClinicData) => {
    clinicsList?.push(clinic);
  };

  const updateClinicList = (updatedClinic: ClinicData) => {
    const newArr = clinicsList?.map((clinic: ClinicData) => {
      if (clinic.CodCli === updatedClinic.CodCli) {
        return updatedClinic;
      } else {
        return clinic;
      }
    });

    setClinicsList(newArr);
  };

  function deleteClinic(selectedClinic: ClinicData) {
    const newArr = clinicsList?.filter((clinic: ClinicData) => {
      clinic.CodCli !== selectedClinic.CodCli;
    });

    setClinicsList(newArr);
  }

  const setDoctors = (list: any[]) => {
    console.log("🚀 ~ file: ClinicContext.tsx:56 ~ setDoctors ~ list:", list);
    setDoctorsList(list);
  };

  const createDoctor = (doctor: DoctorData) => {
    doctorsList?.push(doctor);
  };

  const updateDoctorList = (updatedDoctor: DoctorData) => {
    console.log("🚀 ~ file: ClinicContext.tsx:26 ~ doctorsList:", doctorsList);

    const newArr = doctorsList?.map((doctor: DoctorData) => {
      if (doctor.CodMed === updatedDoctor.CodMed) {
        return updatedDoctor;
      } else {
        return doctor;
      }
    });
    console.log("🚀 ~ file: ClinicContext.tsx:72 ~ newArr ~ newArr:", newArr);

    setDoctorsList(newArr);
  };

  const deleteDoctor = (selectedClinic: DoctorData) => {
    const newArr = doctorsList?.filter((doctor: DoctorData) => {
      doctor.CodMed !== selectedClinic.CodMed;
    });

    setDoctorsList(newArr);
  };

  return (
    <ClinicContext.Provider
      value={{
        setClinics,
        setDoctors,
        createClinic,
        updateClinicList,
        deleteClinic,
        createDoctor,
        updateDoctorList,
        deleteDoctor,
        clinicsList,
        doctorsList,
      }}
    >
      {children}
    </ClinicContext.Provider>
  );
};

export default ClinicDataProvider;
