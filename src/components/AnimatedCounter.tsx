import { useCountAnimation } from "@/hooks/useCountAnimation";

interface Props {
  target: number;
  suffix?: string;
  isVisible: boolean;
  className?: string;
}

export default function AnimatedCounter({ target, suffix = "+", isVisible, className }: Props) {
  const count = useCountAnimation(target, isVisible);
  return <span className={className}>{count}{suffix}</span>;
}
