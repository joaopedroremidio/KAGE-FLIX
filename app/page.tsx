"use client";

import { useMemo, useState } from "react";

type Anime = { title: string; genre: string; year: string; rating: string; mark: string; tag?: string; poster: string };

const animeList: Anime[] = [
  { title: "Solo Leveling", genre: "Ação", year: "2024", rating: "9.2", mark: "影", tag: "EM ALTA", poster: "linear-gradient(145deg,#17223b,#395c91 48%,#10121d)" },
  { title: "Demon Slayer", genre: "Aventura", year: "2019", rating: "9.0", mark: "滅", tag: "POPULAR", poster: "linear-gradient(145deg,#531b2a,#b94d52 48%,#17121b)" },
  { title: "Jujutsu Kaisen", genre: "Ação", year: "2020", rating: "8.9", mark: "呪", poster: "linear-gradient(145deg,#1b1836,#634b8e 50%,#101018)" },
  { title: "Attack on Titan", genre: "Drama", year: "2013", rating: "9.5", mark: "進", poster: "linear-gradient(145deg,#263b36,#8c704e 50%,#171512)" },
  { title: "Chainsaw Man", genre: "Ação", year: "2022", rating: "8.7", mark: "血", poster: "linear-gradient(145deg,#541b20,#c84c35 48%,#171012)" },
  { title: "Frieren", genre: "Fantasia", year: "2023", rating: "9.4", mark: "葬", poster: "linear-gradient(145deg,#1a3850,#80a9a5 50%,#10181d)" },
  { title: "Blue Lock", genre: "Esporte", year: "2022", rating: "8.5", mark: "青", poster: "linear-gradient(145deg,#122a51,#367fc0 50%,#0d1320)" },
  { title: "Death Note", genre: "Suspense", year: "2006", rating: "9.3", mark: "死", poster: "linear-gradient(145deg,#17151b,#6b2538 50%,#09090d)" },
  { title: "One Piece", genre: "Aventura", year: "1999", rating: "9.1", mark: "海", poster: "linear-gradient(145deg,#123e56,#4b8f9c 50%,#10151a)" },
  { title: "Spy x Family", genre: "Comédia", year: "2022", rating: "8.6", mark: "家", poster: "linear-gradient(145deg,#263d36,#b6a16c 50%,#151712)" },
];

const genres = ["Todos", "Ação", "Aventura", "Fantasia", "Drama", "Suspense", "Esporte", "Comédia"];

export default function Home() {
  const [activeGenre, setActiveGenre] = useState("Todos");
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => animeList.filter((anime) =>
    (activeGenre === "Todos" || anime.genre === activeGenre) &&
    anime.title.toLowerCase().includes(query.toLowerCase())
  ), [activeGenre, query]);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#" aria-label="Kage Flix início">KAGE<span>FLIX</span></a>
        <nav className="nav" aria-label="Navegação principal">
          <a className="active" href="#">Início</a><a href="#catalogo">Explorar</a><a href="#catalogo">Animes</a><a href="#premium">Premium</a>
        </nav>
        <div className="header-actions">
          <input className="search-pill" aria-label="Buscar anime" placeholder="⌕  Buscar anime..." value={query} onChange={(e) => { setQuery(e.target.value); document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" }); }} />
          <div className="avatar" aria-label="Perfil">K</div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-art" aria-hidden="true" />
          <div className="hero-content">
            <div className="eyebrow">SEU PRÓXIMO UNIVERSO COMEÇA AQUI</div>
            <h1>VIVA CADA<br /><span>HISTÓRIA.</span></h1>
            <p>Explore mundos, descubra personagens inesquecíveis e encontre seu próximo anime favorito em um só lugar.</p>
            <div className="hero-buttons"><a className="primary-btn" href="#catalogo">⌕ &nbsp; Explorar catálogo</a><a className="secondary-btn" href="#premium">Conhecer Premium</a></div>
          </div>
        </section>

        <section className="content" id="catalogo">
          <div className="section-head"><div><h2>Explore os animes</h2><p>Uma seleção para começar sua próxima jornada.</p></div><span className="see-all">{filtered.length} títulos</span></div>
          <div className="filters" aria-label="Filtrar por gênero">
            {genres.map((genre) => <button key={genre} className={`filter ${activeGenre === genre ? "selected" : ""}`} onClick={() => setActiveGenre(genre)}>{genre}</button>)}
          </div>
          <div className="anime-grid">
            {filtered.length ? filtered.map((anime) => (
              <article className="anime-card" key={anime.title}>
                <div className="poster" style={{ "--poster": anime.poster } as React.CSSProperties} data-mark={anime.mark}>
                  {anime.tag && <span className="poster-tag">{anime.tag}</span>}
                  <span className="poster-title">{anime.title.toUpperCase()}</span>
                </div>
                <div className="anime-meta"><span>{anime.genre} · {anime.year}</span><span>★ {anime.rating}</span></div>
                <div className="anime-name">{anime.title}</div>
              </article>
            )) : <div className="empty">Nenhum anime encontrado. Tente outro nome ou gênero.</div>}
          </div>

          <section className="premium" id="premium">
            <div><h3>Uma experiência sem interrupções.</h3><p>Conheça o <strong>Kage Premium</strong> e aproveite a plataforma sem anúncios.</p></div>
            <button className="primary-btn" onClick={() => alert("O Kage Premium estará disponível em uma próxima atualização.")}>Conhecer Premium</button>
          </section>
        </section>
      </main>

      <footer className="footer"><span>© 2026 Kage Flix. Todos os direitos reservados.</span><span>Catálogo demonstrativo · Disponibilidade de conteúdo sujeita a licenciamento.</span></footer>
    </>
  );
}
