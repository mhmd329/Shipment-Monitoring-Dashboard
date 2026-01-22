import api from "./axios";

interface LoginPayload {
  email: string;
  password: string;
  tenantId: string;
}

export const login = async (payload: LoginPayload) => {
  const { data } = await api.post("/api/v1/auth/login", payload);
  return data;
};
