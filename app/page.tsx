"use client";

import { FormEvent, useEffect, useState } from "react";
import "./simple.css";

type Anime = {
  id: number;
  title: string;
  titleEnglish: string | null;
  image: string | null;
  synopsis: string;
  episodes: number | null;
  score: number | null;
  informationUrl: string | null;
  streaming: Array<{ name: string; url: string }>;
};

export default function Home() {
  const [anime, setAnime] = useState<Anime[]>([]);
  const [query, setQuery] = useState("");
  const [activeQuery, setActiveQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadCatalog(search = "") {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(`/api/anime${search ? `?q=${encodeURIComponent(search)}` : ""}`);
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error || "Não foi possível carregar o catálogo.");
      setAnime(payload.anime ?? []);
    } catch (err) {
      setAnime([]);
      setError(err instanceof Error ? err.message : "Erro inesperado ao carregar o catálogo.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void loadCatalog();
  }, []);

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = query.trim();
    setActiveQuery(value);
    void loadCatalog(value);
  }

  function clearSearch() {
    setQuery("");
    setActiveQuery("");
    void loadCatalog();
  }

  return (
    <>
      <header className="site-header">
        <a className="brand" href="/" aria-label="Kage Flix início">KAGE<span>FLIX</span></a>
        <nav className="nav" aria-label="Navegação principal">
          <a className="active" href="#inicio">Início</a>
          <a href="#catalogo">Catálogo</a>
        </nav>
        <a className="admin-link" href="/admin">Painel</a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-content">
            <span className="eyebrow">KAGE FLIX</span>
            <h1>Seu próximo anime<br /><span>começa aqui.</span></h1>
            <p>Descubra novos títulos e encontre onde assistir.</p>
            <a className="primary-btn" href="#catalogo">Explorar catálogo</a>
          </div>
          <div className="hero-mark" aria-hidden="true">影</div>
        </section>

        <section className="catalog" id="catalogo">
          <div className="catalog-heading">
            <div>
              <span className="eyebrow">EXPLORE</span>
              <h2>{activeQuery ? `Resultados para “${activeQuery}”` : "Animes em destaque"}</h2>
            </div>
            {activeQuery ? <button className="clear-btn" onClick={clearSearch}>Limpar busca</button> : null}
          </div>

          <form className="search-form" onSubmit={handleSearch}>
            <input
              aria-label="Buscar anime"
              placeholder="Buscar anime pelo nome..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <button type="submit" disabled={loading || !query.trim()}>Buscar</button>
          </form>

          {loading ? (
            <div className="catalog-message">Carregando catálogo...</div>
          ) : error ? (
            <div className="catalog-message error-state"><p>{error}</p><button onClick={() => loadCatalog(activeQuery)}>Tentar novamente</button></div>
          ) : anime.length === 0 ? (
            <div className="catalog-message">Nenhum anime encontrado. Tente outro título.</div>
          ) : (
            <div className="anime-grid">
              {anime.map((item) => (
                <article className="anime-card" key={item.id}>
                  <div className="poster">
                    {item.image ? <img src={item.image} alt={`Capa de ${item.title}`} loading="lazy" /> : <span className="poster-fallback">影</span>}
                    {item.score ? <span className="score">★ {item.score.toFixed(1)}</span> : null}
                  </div>
                  <div className="anime-info">
                    <h3 title={item.title}>{item.title}</h3>
                    <p>{item.episodes ? `${item.episodes} episódios` : "Episódios não informados"}</p>
                    <div className="anime-actions">
                      {item.streaming.length > 0 ? (
                        <a className="watch-btn" href={item.streaming[0].url} target="_blank" rel="noopener noreferrer">Assistir em {item.streaming[0].name}</a>
                      ) : item.informationUrl ? (
                        <a className="watch-btn secondary-watch" href={item.informationUrl} target="_blank" rel="noopener noreferrer">Ver informações</a>
                      ) : <span className="unavailable">Link não disponível</span>}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
          <p className="catalog-note">Informações do catálogo fornecidas pelo Jikan / MyAnimeList. A disponibilidade para assistir depende das plataformas externas.</p>
        </section>
      </main>

      <footer className="footer"><span>© 2026 Kage Flix</span><span>Descubra. Explore. Assista.</span></footer>
    </>
  );
}
