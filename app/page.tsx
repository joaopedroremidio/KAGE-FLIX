"use client";

import "./simple.css";

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="/" aria-label="Kage Flix início">KAGE<span>FLIX</span></a>
        <nav className="nav" aria-label="Navegação principal">
          <a className="active" href="#inicio">Início</a>
          <a href="#catalogo">Catálogo</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-content">
            <span className="eyebrow">KAGE FLIX</span>
            <h1>Seu próximo anime<br /><span>começa aqui.</span></h1>
            <a className="primary-btn" href="#catalogo">Explorar catálogo</a>
          </div>
        </section>

        <section className="catalog" id="catalogo">
          <h2>Catálogo</h2>
          <div className="empty-state">
            <span className="empty-icon" aria-hidden="true">影</span>
            <p>Nenhum anime disponível no momento.</p>
          </div>
        </section>
      </main>

      <footer className="footer">© 2026 Kage Flix</footer>
    </>
  );
}
