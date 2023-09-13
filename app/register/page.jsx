import RegisterForm from "@/components/RegisterForm";
import { getServerSession } from "next-auth";
import { Redirect, redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import React from "react";

export default async function Register() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");

  return (
    <div>
      {" "}
      <RegisterForm />{" "}
    </div>
  );
}
