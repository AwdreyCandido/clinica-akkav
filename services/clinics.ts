import axios from "axios";

export async function getClinic(id: any) {
  try {
    const res = await axios.post("/api/clinics/get-clinic", id);
    return res.data;
  } catch (error: any) {
    console.log("🚀 ~ file: clinics.ts:10 ~ getClinic ~ error:", error);
    return error.response;
  }
}

export async function getAllClinics() {
  try {
    const res = await axios.get("/api/clinics/get-all-clinics");
    return res.data;
  } catch (error: any) {
    console.log("🚀 ~ file: clinics.ts:17 ~ getAllClinics ~ error:", error);
    return error.response;
  }
}

export async function createNewClinic(newClinic: any) {
  try {
    const res = await axios.post("/api/clinics/create-clinic", newClinic);
    return res.data;
  } catch (error: any) {
    console.log("🚀 ~ file: clinics.ts:22 ~ createNewClinic ~ error:", error);
    return error.response;
  }
}

export async function updateClinic(newClinic: any) {
  console.log("🚀 ~ file: clinics.ts:34 ~ updateClinic ~ newClinic:", newClinic)
  try {
    const res = await axios.put("/api/clinics/update-clinic", newClinic);
    return res.data;
  } catch (error: any) {
    console.log("🚀 ~ file: clinics.ts:30 ~ updateClinic ~ error:", error);
    return error.response;
  }
}

export async function deleteClinic(id: any) {
  try {
    const res = await axios.delete("/api/clinics/delete-clinic", {
      params: { id: id },
    });
    return res.data;
  } catch (error: any) {
    console.log("🚀 ~ file: clinics.ts:38 ~ deleteClinic ~ error:", error);
    return error.response;
  }
}

export async function deleteDoctorFromClinic(CodCli: any, CodMed: any) {
  try {
    const res = await axios.delete("/api/clinics/delete-doctor", {
      params: { CodCli, CodMed },
    });
    return res.data;
  } catch (error: any) {
    console.log(
      "🚀 ~ file: clinics.ts:47 ~ deleteDoctorFromClinic ~ error:",
      error
    );
    return error.response;
  }
}
