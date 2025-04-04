import { redirect } from "react-router";

export async function authLoader() {
  const response = await fetch("/auth-status", { credentials: "include" });

  if (!response.ok) {
    return redirect("/login");
  }

  return response.json();
}
