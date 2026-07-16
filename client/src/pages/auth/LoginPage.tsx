import AuthLayout from "../../components/layout/AuthLayout";
import { LoginForm } from "../../features/auth";

export default function LoginPage() {
  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to continue managing tournaments."
    >
      <LoginForm />
    </AuthLayout>
  );
}
