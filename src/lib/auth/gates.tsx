import type { ReactNode } from "react";
import { Navigate } from "@tanstack/react-router";

export const SIGN_IN_PATH = "/login";

export function SignedIn({ children }: { children: ReactNode }) {
  return null;
}

export function SignedOut({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export function RedirectToSignIn({ to = SIGN_IN_PATH }: { to?: string }) {
  return <Navigate to={to} />;
}

export function UserButton() {
  return null;
}
