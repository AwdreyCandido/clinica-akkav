import axios from "axios";

export async function getClinic(id: any) {
  const res = await axios.post("/api/clinics/get-clinic", id);
  console.log("🚀 ~ file: clinics.ts:5 ~ getClinic ~ res:", res);

  return res.data;
}

export async function getAllClinics() {
  const res = await axios.get("/api/clinics/get-all-clinics");
  console.log("🚀 ~ file: clinics.ts:5 ~ getAllClinics ~ res:", res);

  return res.data;
}

export async function createNewClinic(newClinic: any) {
  const res = await axios.post("/api/clinics/create-clinic", newClinic);
  console.log("🚀 ~ file: clinics.ts:12 ~ createNewClinic ~ res:", res);

  return res.data;
}

export async function updateClinic(newClinic: any) {
  const res = await axios.put("/api/clinics/update-clinic", newClinic);
  console.log("🚀 ~ file: clinics.ts:19 ~ updateClinic ~ res:", res);

  return res.data;
}

export async function deleteClinic(id: any) {
  const res = await axios.delete("/api/clinics/delete-clinic", {
    params: { id: id },
  });
  console.log("🚀 ~ file: clinics.ts:48 ~ deleteClinic ~ res:", res);

  return res.data;
}

export async function deleteDoctorFromClinic(CodCli: any, CodMed: any) {
  const res = await axios.delete("/api/clinics/delete-doctor", {
    params: { CodCli, CodMed },
  });
  console.log(" ~ file: clinics.ts:48 ~ deleteClinic ~ res:", res);

  return res.data;
}