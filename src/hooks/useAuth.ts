import { useState } from "react";
import axios from "axios";
import { login } from "../api/auth.api";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loginUser = async (email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);

      const res = await login({
        email,
        password,
      });

      localStorage.setItem("token", res.token);
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
