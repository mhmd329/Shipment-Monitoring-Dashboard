import { useState } from "react";
import axios from "axios";
import { login } from "../api/auth.api";
export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loginUser = async ({
    email,
    password,
    tenantId,
  }: {
    email: string;
    password: string;
    tenantId: string;
  }) => {
    try {
      setLoading(true);
      setError(null);

      const res = await login({
        email,
        password,
        tenantId,
      });

      localStorage.setItem("token", res.token);
      return res;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Login failed");
      } else {
        setError("Unexpected error occurred");
      }
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { loginUser, loading, error };
};
