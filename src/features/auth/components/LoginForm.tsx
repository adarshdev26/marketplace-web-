"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema, LoginSchema } from "../validations/login.schema";

import { useLogin } from "../hooks/use-login";
import { toast } from "sonner";
import { useAuth } from "@/src/providers/auth-provider";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const loginMutation = useLogin();
  const auth = useAuth();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginSchema) => {
    try {
      const response = await loginMutation.mutateAsync(data);
      console.log(response);
      auth.login(response);

      toast.success("Logged successfully");
      router.push("/");
    } catch (error) {
      console.error(error);
      toast.error("Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className="w-full rounded-lg border p-3"
        />

        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
          className="w-full rounded-lg border p-3"
        />

        {errors.password && (
          <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={loginMutation.isPending}
        className="w-full rounded-lg bg-black py-3 text-white cursor-pointer"
      >
        {loginMutation.isPending ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}
