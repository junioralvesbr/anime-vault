import Image from "next/image";

export function Hero() {
  return (
    <div className="h-[80vh] flex justify-center items-center bg-hero bg-zinc-900 bg-cover bg-top">
      <div className="flex flex-col gap-6 items-center justify-center px-4 sm:flex-row">
        <div className="flex flex-col gap-10 flex-1">
          <Image
            src="/logo.svg"
            alt="Logo do Site"
            width={90}
            height={90}
            className="object-contain"
          />

          <h1 className="title text-5xl font-bold leading-[120%] sm:text-6xl">
            Explorer The
            <span className="red-gradient"> Diverse Realms </span>
            of Anime Magic
          </h1>
        </div>

        <div className="relative w-full h-[50vh] sm:flex-1">
          <Image
            src="/anime.png"
            alt="Imagem do anime da pagina"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  )
}