'use client'

import { useEffect, useState } from "react";
import fetchAnime from "@/lib/fetchAnime";
import Image from "next/image";
import { useInView } from "react-intersection-observer"
import { AnimeCard, AnimeProp } from "./AnimeCard";

let page = 2

export function LoadingMore() {
  const [data, setData] = useState<AnimeProp[]>([])

  const [ref, inView] = useInView({
    threshold: 0
  })

  useEffect(() => {
    if (inView) {

      fetchAnime(page).then(res => {
        setData([...data, ...res])
        page++
      })

    }

  }, [inView])

  return (
    <div>
      <div className="grid grid-cols-4 gap-14 mt-10">
        {data.map(anime => (
          <AnimeCard anime={anime} />
        ))}
      </div>

      <div ref={ref} className="flex justify-center mt-10">
        <Image
          src="/spinner.svg"
          alt="Icone de spinner"
          width={80}
          height={80}
        />
      </div>
    </div>
  )
}