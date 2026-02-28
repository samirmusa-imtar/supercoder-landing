import { LucideIcon } from "lucide-react";

interface IconBadgeProps {
  icon: LucideIcon;
  className?: string;
  size?: number;
}

export function IconBadge({ icon: Icon, className = "", size = 40 }: IconBadgeProps) {
  return (
    <span
      className={`flex items-center justify-center text-purple-deep ${className}`}
      aria-hidden
    >
      <Icon size={size} strokeWidth={1.5} />
    </span>
  );
}
