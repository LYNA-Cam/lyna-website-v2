import { cn } from "@/lib/utils";
import OptimizedImage from "@/components/ui/OptimizedImage";
import Link from "next/link";
import React from "react";

type InformationPageProps = {
  children: React.ReactNode;
  className?: string;
};

export const InformationPage = ({
  children,
  className,
}: InformationPageProps) => (
  <section className={cn("relative text-black p-[100px]", className)}>
    <Link href={"/"} className="top-[56px] right-[56px] absolute">
      <OptimizedImage src={"/x.svg"} alt="" width={32} height={32} />
    </Link>
    {children}
  </section>
);
