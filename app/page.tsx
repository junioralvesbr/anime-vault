import { AnimeCard } from "@/components/AnimeCard";
import { Hero } from "@/components/Hero";
import { Loading } from "@/components/Loading";
import Image from "next/image";

const getAllAnime = async () => {
  const response = await fetch("https://shikimori.one/api/animes?page=1&limit=8&order=popularity")

  const data = await response.json()

  return data
}

export default async function Home() {
  const allanime = await getAllAnime()

  return (
    <>
      <header>
        <Hero />
      </header>
      <main>
        <section className="container p-16 mx-auto">
          <h2 className="text-3xl font-bold">
            Explore Anime
          </h2>

          <div className="grid grid-cols-4 gap-14 mt-10">
            {allanime.map((anime, index: number) => (
              <AnimeCard anime={anime} key={index} />
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Loading />
          </div>
        </section>
      </main>
    </>
  )
}
