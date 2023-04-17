import axios, { AxiosError, AxiosPromise } from "axios";

export async function getDoctor(id: any) {
  try {
    const res = await axios.post("/api/doctors/get-doctor", id);
    return res.data;
  } catch (error: any) {
    console.log("🚀 ~ file: doctors.ts:9 ~ getDoctor ~ error:", error);
    return error.response;
  }
}

export async function getAllDoctors() {
  try {
    const res = await axios.get("/api/doctors/get-all-doctors");
    return res.data;
  } catch (error: any) {
    console.log("🚀 ~ file: doctors.ts:20 ~ getAllDoctors ~ error:", error);
    return error.response;
  }
}

export async function createNewDoctor(newDoctor: any) {
  try {
    const res = await axios.post("/api/doctors/create-doctor", newDoctor);
    return res;
  } catch (error: any) {
    console.log("🚀 ~ file: doctors.ts:30 ~ createNewDoctor ~ error:", error);
    return error.response;
  }
}

export async function updateDoctor(newDoctor: any) {
  try {
    const res = await axios.put("/api/doctors/update-doctor", newDoctor);
    return res.data;
  } catch (error: any) {
    console.log("🚀 ~ file: doctors.ts:41 ~ updateDoctor ~ error:", error);
    return error.response;
  }
}

export async function deleteDoctor(CodMed: any) {
  try {
    const res = await axios.delete("/api/doctors/delete-doctor", {
      params: { CodMed },
    });
    return res.data;
  } catch (error: any) {
    console.log("🚀 ~ file: doctors.ts:54 ~ deleteDoctor ~ error:", error);
    return error.response;
  }
}
