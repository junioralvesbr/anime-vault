import { Hero } from "@/components/Hero";
import { AnimeCard, AnimeProp } from "@/components/AnimeCard";
import { LoadingMore } from "@/components/LoadingMore";
import fetchAnime from "@/lib/fetchAnime";

export default async function Home() {
  const allAnime = await fetchAnime(1)

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
            {allAnime.map((anime: AnimeProp, index: number) => (
              <AnimeCard anime={anime} index={index} key={index} />
            ))}
          </div>

          <LoadingMore />

        </section>
      </main>
    </>
  )
}
