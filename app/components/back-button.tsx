"use client";
import { useRouter } from "next/navigation";
import backIcon from "../../public/Back_Arrow.svg";
import Image from "next/image";
export default function BackButton({ className }: { className?: string }) {
  const router = useRouter();

  return (
    <div className={className} onClick={() => router.back()}>
      <Image alt="back button" src={backIcon} priority width={30} height={30} />
    </div>
  );
}
