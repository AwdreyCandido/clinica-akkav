import axios from "axios";

export async function getDoctor(id: any) {
  try {
    const res = await axios.post("/api/doctors/get-doctor", id);
    return res.data;
  } catch (error: any) {
    return error.response;
  }
}

export async function getAllDoctors() {
  try {
    const res = await axios.get("/api/doctors/get-all-doctors");
    return res.data;
  } catch (error: any) {
    return error.response;
  }
}

export async function createNewDoctor(newDoctor: any) {
  try {
    const res = await axios.post("/api/doctors/create-doctor", newDoctor);
    return res;
  } catch (error: any) {
    return error.response;
  }
}

export async function updateDoctor(newDoctor: any) {
  try {
    const res = await axios.put("/api/doctors/update-doctor", newDoctor);
    return res.data;
  } catch (error: any) {
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
    return error.response;
  }
}
