import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Link href="/">
        <Image 
          src="/logo.svg" 
          alt="Logo" 
          width={100} 
          height={100} 
        />
      </Link>
    </div>
  )
}
