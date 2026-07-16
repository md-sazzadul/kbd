import { Link, useNavigate } from "react-router-dom";

import { Lock, Mail, User } from "lucide-react";

import { motion } from "framer-motion";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import toast from "react-hot-toast";

import Button from "../../../components/common/Button";
import Input from "../../../components/common/Input";

import PasswordStrength from "./PasswordStrength";

import { registerSchema, type RegisterFormData } from "../schemas/auth.schema";

import { register as registerRequest } from "../api/auth.api";

import axios from "axios";
import { useAuth } from "../../../hooks/useAuth";

export default function RegisterForm() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),

    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "participant",
    },
  });

  const password = watch("password");

  async function onSubmit(data: RegisterFormData) {
    try {
      const response = await registerRequest({
        name: data.name,
        email: data.email,
        password: data.password,
        role: "participant",
      });

      login(response.data.user, response.data.token);

      toast.success("Account created successfully!");

      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message ?? "Registration failed.");

        return;
      }

      toast.error("Something went wrong.");
    }
  }

  return (
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
        label="Full Name"
        icon={User}
        placeholder="John Doe"
        error={errors.name?.message}
        {...register("name")}
      />

      <Input
        label="Email"
        type="email"
        icon={Mail}
        placeholder="john@example.com"
        error={errors.email?.message}
        {...register("email")}
      />

      <div className="space-y-2">
        <Input
          label="Password"
          type="password"
          icon={Lock}
          placeholder="Create a password"
          error={errors.password?.message}
          {...register("password")}
        />

        <PasswordStrength password={password} />
      </div>

      <Input
        label="Confirm Password"
        type="password"
        icon={Lock}
        placeholder="Confirm your password"
        error={errors.confirmPassword?.message}
        {...register("confirmPassword")}
      />

      <Button type="submit" loading={isSubmitting} className="w-full">
        {isSubmitting ? "Creating Account..." : "Create Account"}
      </Button>

      <p className="text-center text-sm text-gray-400">
        Already have an account?
        <Link
          to="/login"
          className="ml-2 font-medium text-blue-400 transition hover:text-cyan-300"
        >
          Login
        </Link>
      </p>
    </motion.form>
  );
}
