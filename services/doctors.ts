import axios from "axios";

export async function getDoctor(id: any) {
  try {
    const res = await axios.post("/api/doctors/get-doctor", id);
    console.log("🚀 ~ file: doctors.ts:7 ~ getDoctor ~ res:", res);
    return res.data;
  } catch (error: any) {
    console.log("🚀 ~ file: doctors.ts:9 ~ getDoctor ~ error:", error);
    return error.response;
  }
}

export async function getAllDoctors() {
  const res = await axios.get("/api/doctors/get-all-doctors");
  console.log("🚀 ~ file: doctors.ts:16 ~ getAllDoctors ~ res:", res);
  return res.data;
}

export async function createNewDoctor(newDoctor: any) {
  const res = await axios.post("/api/doctors/create-doctor", newDoctor);
  console.log("🚀 ~ file: doctors.ts:29 ~ createNewDoctor ~ res:", res);
  return res;
}
