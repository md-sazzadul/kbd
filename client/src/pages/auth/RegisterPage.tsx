import AuthLayout from "../../components/layout/AuthLayout";
import { RegisterForm } from "../../features/auth";

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join KBD and start managing tournaments."
    >
      <RegisterForm />
    </AuthLayout>
  );
}
