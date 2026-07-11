import { z } from "zod";
import { IUser, User } from "../models/user.model";
import { signToken } from "../utils/jwt";
import { comparePassword, hashPassword } from "../utils/password";

const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.enum(["admin", "participant"]).optional(),
});

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type RegisterInput = z.infer<typeof registerSchema>;
type LoginInput = z.infer<typeof loginSchema>;

const buildTokenResponse = (user: IUser) => {
  const token = signToken({
    userId: user._id.toString(),
    role: user.role,
  });

  return {
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
    token,
  };
};

export const registerUser = async (input: RegisterInput) => {
  const data = registerSchema.parse(input);

  const existingUser = await User.findOne({ email: data.email });
  if (existingUser) {
    throw new Error("Email already exists");
  }

  const hashedPassword = await hashPassword(data.password);

  const user = await User.create({
    name: data.name,
    email: data.email,
    password: hashedPassword,
    role: data.role || "participant",
  });

  return buildTokenResponse(user);
};

export const loginUser = async (input: LoginInput) => {
  const data = loginSchema.parse(input);

  const user = await User.findOne({ email: data.email }).select("+password");
  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isMatch = await comparePassword(data.password, user.password);
  if (!isMatch) {
    throw new Error("Invalid email or password");
  }

  return buildTokenResponse(user);
};
