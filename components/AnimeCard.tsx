import Image from "next/image";

export type AnimeProp = {
  id: string,
  name: string,
  image: {
    original: string
  },
  kind: string,
  episodes: number,
  score: number
}

type Prop = {
  anime: AnimeProp,
  index?: number,
}

export function AnimeCard({ anime }: Prop) {
  return (
    <article className="flex flex-col gap-2 max-w-[280px]">
      <div className="relative w-full h-[37vh] overflow-hidden rounded-xl">
        <Image
          src={`https://shikimori.one/${anime.image.original}`}
          alt="anime original"
          fill
          className="object-fill"
        />
      </div>
      <div className="flex justify-between items-center">
        <h3 className="font-bold line-clamp-1 capitalize tracking-wider text-xl">{anime.name}</h3>
        <span className="block px-2 py-1 bg-gray-900">{anime.kind}</span>
      </div>

      <div className="flex gap-4">
        <div className="flex gap-2">
          <Image
            src="/episodes.svg"
            alt='iconde de numero de episodios'
            width={20}
            height={20}
          />
          <span className="tracking-wider">
            {anime.episodes}
          </span>
        </div>

        <div className="flex gap-3">
          <Image
            src="/star.svg"
            alt='Icone de estrela do score'
            width={20}
            height={20}
          />
          <span className="text-[#FFAD49] font-bold tracking-wider">
            {anime.score}
          </span>
        </div>
      </div>
    </article>
  )
}