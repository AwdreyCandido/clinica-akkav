import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
<<<<<<< HEAD
import { TbHome, TbUsers, TbBuildingHospital, TbStethoscope } from "react-icons/tb";
=======
import {
  TbHome,
  TbUsers,
  TbBuildingHospital,
  TbStethoscope,
} from "react-icons/tb";
>>>>>>> 826505943138af257584150498a54562b6b742af
import { FaHospitalUser } from "react-icons/fa";

const Navigation: React.FC<{ active?: string }> = () => {
  const router = useRouter();

  const activeStyle = "bg-blue-light rounded-2xl text-white";

  return (
    <ul className="flex flex-col max-h-screen gap-8 px-4 text-th bg-white">
      <li className=" cursor-pointer w-[4rem] my-8 h-[4rem] flex justify-center items-center rounded-2xl">
        7
      </li>
      <Link
<<<<<<< HEAD
        className={`${
          router.pathname.includes("clinic") && activeStyle
        }`}
=======
        className={`${router.pathname.includes("clinic") && activeStyle}`}
>>>>>>> 826505943138af257584150498a54562b6b742af
        href="/clinics/"
      >
        <li className="border border-blue-light cursor-pointer w-[4rem] h-[4rem] flex justify-center items-center rounded-2xl">
          <TbBuildingHospital />
        </li>
      </Link>
      <Link
<<<<<<< HEAD
        className={`${
          router.pathname.includes("doctor") && activeStyle
        }`}
=======
        className={`${router.pathname.includes("doctor") && activeStyle}`}
>>>>>>> 826505943138af257584150498a54562b6b742af
        href="/doctors/"
      >
        <li className="border border-blue-light cursor-pointer w-[4rem] h-[4rem] flex justify-center items-center rounded-2xl">
          <TbStethoscope />
        </li>
      </Link>
    </ul>
  );
};

export default Navigation;
