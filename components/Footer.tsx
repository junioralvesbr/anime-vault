import Image from "next/image";

export function Footer() {
  return (
    <section className="flex flex-col items-center justify-around gap-4 p-10 bg-zinc-900 sm:flex-row">
      <p className="text-xl">
        @2023 Junior Alves
      </p>

      <Image
        src="/logo.svg"
        alt="Logo da pagina"
        width={50}
        height={50}
      />

      <div className="flex gap-4">
        <Image
          src="tiktok.svg"
          alt="tiktok"
          width={26}
          height={26}
        />
        <Image
          src="instagram.svg"
          alt="instagram"
          width={26}
          height={26}
        />
        <Image
          src="twitter.svg"
          alt="twitter"
          width={26}
          height={26}
        />
      </div>
    </section>
  )
}