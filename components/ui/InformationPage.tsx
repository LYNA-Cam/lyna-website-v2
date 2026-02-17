import { cn } from "@/lib/utils";
import Image from "next/image";
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
      <Image src={"/x.svg"} alt="" width={32} height={32} />
    </Link>
    {children}
  </section>
);
