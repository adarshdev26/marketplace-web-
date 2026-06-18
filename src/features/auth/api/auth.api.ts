import { api } from "@/src/lib/axios";

import {
  LoginBody,
  RegisterBody,
  AuthResponse,
} from "../types/auth.types";

export async function login(
  data: LoginBody
) {
  const response =
    await api.post<AuthResponse>(
      "/auth/login",
      data
    );

  return response.data;
}

export async function register(
  data: RegisterBody
) {
  const response =
    await api.post<AuthResponse>(
      "/auth/signup",
      data
    );

  return response.data;
}