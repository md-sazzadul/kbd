import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Lock, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { login as loginRequest } from "../../api/auth.api";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import AuthLayout from "../../components/layout/AuthLayout";
import { useAuth } from "../../hooks/useAuth";
import { loginSchema, type LoginFormData } from "../../validations/auth.schema";

export default function LoginPage() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),

    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  async function onSubmit(data: LoginFormData) {
    try {
      const response = await loginRequest({
        email: data.email,
        password: data.password,
      });

      login(response.data.data.user, response.data.data.token);

      toast.success("Welcome back!");

      navigate("/dashboard");
    } catch (error: any) {
      toast.error(error.response?.data?.message ?? "Login failed.");
    }
  }

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to continue managing tournaments."
    >
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
      >
        <Input
          label="Email"
          type="email"
          icon={Mail}
          placeholder="you@example.com"
          error={errors.email?.message}
          {...register("email")}
        />

        <Input
          label="Password"
          type="password"
          icon={Lock}
          placeholder="Enter password"
          error={errors.password?.message}
          {...register("password")}
        />

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm text-gray-400">
            <input type="checkbox" {...register("remember")} />
            Remember me
          </label>

          <button
            type="button"
            className="text-sm text-blue-400 hover:text-blue-300"
          >
            Forgot password?
          </button>
        </div>

        <Button type="submit" loading={isSubmitting} className="w-full">
          {isSubmitting ? "Signing In..." : "Sign In"}
        </Button>

        <p className="text-center text-sm text-gray-400">
          Don't have an account?
          <Link
            to="/register"
            className="ml-2 font-medium text-blue-400 hover:text-cyan-300"
          >
            Register
          </Link>
        </p>
      </motion.form>
    </AuthLayout>
  );
}
