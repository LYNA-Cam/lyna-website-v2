import { cn } from "@/lib/utils";
import Link from "next/link";

type InformationLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export const InformationLink = ({
  href,
  children,
  className,
}: InformationLinkProps) => (
  <Link href={href} className={cn("hover:underline", className)}>
    <strong>{children}</strong>
  </Link>
);
