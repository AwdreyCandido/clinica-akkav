import React from "react";
import Router, { useRouter } from "next/router";

const index = () => {
  const router = useRouter();

  const { codcli } = router.query;

  return <div>Página {codcli}</div>;
};

export default index;
