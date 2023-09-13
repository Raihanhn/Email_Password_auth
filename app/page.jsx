import LoginForm from "@/components/LoginForm";
import { getServerSession } from "next-auth";
import { Redirect, redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/dashboard");
  return (
    <main>
      <LoginForm />
    </main>
  );
}
