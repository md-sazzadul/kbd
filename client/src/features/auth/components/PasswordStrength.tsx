interface Props {
  password: string;
}

export default function PasswordStrength({ password }: Props) {
  let score = 0;

  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  const labels = ["Very Weak", "Weak", "Medium", "Strong", "Very Strong"];

  return (
    <div className="space-y-2">
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-linear-to-r from-red-500 via-yellow-500 to-green-500 transition-all duration-300"
          style={{
            width: `${score * 25}%`,
          }}
        />
      </div>

      <p className="text-xs text-gray-400">{labels[score]}</p>
    </div>
  );
}
