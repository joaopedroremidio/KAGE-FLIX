"use client";

export default function AdminLogin({ error, setup, configured }: { error: boolean; setup: boolean; configured: boolean }) {
  return (
    <main className="admin-login-page">
      <form className="admin-login-card" action="/api/admin/login" method="post">
        <a className="admin-brand" href="/">KAGE<span>FLIX</span><small>PAINEL</small></a>
        <h1>Acesso administrativo</h1>
        <p>Entre para administrar a plataforma.</p>
        {!configured || setup ? <div className="login-message">Configure ADMIN_PASSWORD e ADMIN_SESSION_SECRET nas variáveis de ambiente da Vercel para ativar o acesso.</div> : null}
        {error ? <div className="login-error">Senha incorreta. Tente novamente.</div> : null}
        <label htmlFor="password">Senha</label>
        <input id="password" name="password" type="password" autoComplete="current-password" required disabled={!configured} />
        <button type="submit" disabled={!configured}>Entrar</button>
        <a className="back-site" href="/">Voltar ao site</a>
      </form>
    </main>
  );
}
