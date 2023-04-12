import axios from "axios";

export async function getAllClinics() {
  const res = await fetch("/api/clinics", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response = await res.json();
  console.log("🚀 ~ file: clinics.ts:10 ~ getAllClinics ~ response:", response);
  return response;
}

export async function createNewClinic(newClinic: any) {
  const res = await fetch("/api/clinics", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newClinic),
  });

  const response = await res.json();
  console.log(
    "🚀 ~ file: clinics.ts:10 ~ createNewClinic ~ response:",
    response
  );
}

export async function updateClinic(newClinic: any) {
  const res = await fetch("/api/clinics", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newClinic),
  });

  const response = await res.json();
  console.log("🚀 ~ file: clinics.ts:43 ~ updateClinic ~ response:", response);
}

export async function deleteClinic(newClinic: any) {
  const res = axios.delete("/api/clinics", newClinic);
  console.log("🚀 ~ file: clinics.ts:48 ~ deleteClinic ~ res:", res);
}
