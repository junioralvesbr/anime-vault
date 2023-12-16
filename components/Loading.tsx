import Image from "next/image";

export function Loading() {
  return (
    <Image
      src="/spinner.svg"
      alt="Icone de spinner"
      width={80}
      height={80}
    />
  )
}