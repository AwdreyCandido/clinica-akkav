export async function getAllClinics() {
  const res = await fetch("/api/clinics", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response = await res.json();
  console.log(
    "🚀 ~ file: clinics.ts:10 ~ loadAllClinics ~ response:",
    response
  );
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
