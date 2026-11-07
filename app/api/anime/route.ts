import { NextRequest, NextResponse } from "next/server";

type JikanAnime = {
  mal_id: number;
  title: string;
  title_english?: string | null;
  images?: { webp?: { large_image_url?: string; image_url?: string } };
  synopsis?: string | null;
  episodes?: number | null;
  score?: number | null;
  url?: string;
  streaming?: Array<{ name: string; url: string }>;
};

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q")?.trim();
  const endpoint = query
    ? `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(query)}&limit=18&sfw=true&order_by=popularity&sort=asc`
    : "https://api.jikan.moe/v4/top/anime?limit=18&filter=airing";

  try {
    const response = await fetch(endpoint, {
      headers: { Accept: "application/json" },
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: response.status === 429 ? "Muitas consultas. Aguarde alguns segundos e tente novamente." : "Não foi possível carregar o catálogo agora." },
        { status: response.status === 429 ? 429 : 502 },
      );
    }

    const payload = (await response.json()) as { data?: JikanAnime[] };
    const anime = (payload.data ?? []).map((item) => ({
      id: item.mal_id,
      title: item.title,
      titleEnglish: item.title_english ?? null,
      image: item.images?.webp?.large_image_url ?? item.images?.webp?.image_url ?? null,
      synopsis: item.synopsis ?? "Sinopse não disponível.",
      episodes: item.episodes ?? null,
      score: item.score ?? null,
      informationUrl: item.url ?? null,
      streaming: (item.streaming ?? []).map((source) => ({
        name: source.name,
        url: source.url,
      })),
    }));

    return NextResponse.json({ anime });
  } catch {
    return NextResponse.json(
      { error: "Falha de conexão ao consultar o catálogo. Tente novamente." },
      { status: 503 },
    );
  }
}
