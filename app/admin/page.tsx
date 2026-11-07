import { cookies } from "next/headers";
import { ADMIN_COOKIE, isValidAdminSession } from "@/lib/admin-auth";
import AdminLogin from "./login-form";
import "./admin.css";

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; setup?: string }>;
}) {
  const cookieStore = await cookies();
  const authenticated = isValidAdminSession(cookieStore.get(ADMIN_COOKIE)?.value);
  const params = await searchParams;

  if (!authenticated) {
    return <AdminLogin error={params.error === "1"} setup={params.setup === "1"} configured={Boolean(process.env.ADMIN_PASSWORD && process.env.ADMIN_SESSION_SECRET)} />;
  }

  return (
    <main className="admin-shell">
      <aside className="admin-sidebar">
        <a className="admin-brand" href="/">KAGE<span>FLIX</span><small>PAINEL</small></a>
        <nav className="admin-nav">
          <a className="chosen" href="#inicio">Visão geral</a>
          <a href="#catalogo">Catálogo</a>
          <a href="#episodios">Episódios</a>
          <a href="#configuracoes">Configurações</a>
        </nav>
        <form action="/api/admin/logout" method="post" className="logout-form">
          <button type="submit">Sair do painel</button>
        </form>
      </aside>

      <section className="admin-main">
        <header className="admin-topbar"><div><span>ADMINISTRAÇÃO</span><h1>Visão geral</h1></div><a href="/" className="view-site">Ver site ↗</a></header>
        <section className="admin-stats" id="inicio">
          <article><span>Animes</span><strong>0</strong></article>
          <article><span>Episódios</span><strong>0</strong></article>
          <article><span>Publicados</span><strong>0</strong></article>
        </section>
        <section className="admin-section" id="catalogo">
          <div className="admin-section-heading"><div><h2>Catálogo</h2><p>Gerencie os títulos disponíveis na plataforma.</p></div></div>
          <div className="admin-empty"><span>影</span><strong>Nenhum anime cadastrado</strong><p>O catálogo está vazio.</p></div>
        </section>
        <section className="admin-section" id="episodios">
          <div className="admin-section-heading"><div><h2>Episódios</h2><p>Organize os episódios dos animes.</p></div></div>
          <div className="admin-empty compact"><strong>Nenhum episódio cadastrado</strong></div>
        </section>
        <section className="admin-section" id="configuracoes">
          <div className="admin-section-heading"><div><h2>Configurações</h2><p>Preferências administrativas do Kage Flix.</p></div></div>
          <div className="admin-setting"><span>Idioma da plataforma</span><strong>Português (Brasil)</strong></div>
          <div className="admin-setting"><span>Tema</span><strong>Preto e vermelho</strong></div>
        </section>
      </section>
    </main>
  );
}
