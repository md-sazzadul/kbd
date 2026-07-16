import { Loader2 } from "lucide-react";

interface SpinnerProps {
  size?: number;
}

export default function Spinner({ size = 36 }: SpinnerProps) {
  return (
    <Loader2
      className="animate-spin text-blue-500"
      style={{
        width: size,
        height: size,
      }}
    />
  );
}
