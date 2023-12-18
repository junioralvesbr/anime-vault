
const MAX_LIMIT = 8

export default async function fetchAnime(page: number) {
  const response = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=${MAX_LIMIT}&order=popularity`)

  const data = await response.json()

  return data
}