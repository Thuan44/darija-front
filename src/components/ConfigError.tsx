import "./ConfigError.css";

export function ConfigError() {
  return (
    <main className="config-error" role="alert">
      <h1>Configuration manquante</h1>
      <p>
        La variable d&apos;environnement <code>VITE_API_URL</code> n&apos;est
        pas définie. L&apos;application ne peut pas joindre l&apos;API sans
        elle.
      </p>
      <ol className="config-error-steps">
        <li>
          Copiez le fichier d&apos;exemple :
          <br />
          <code>cp .env.example .env</code>
        </li>
        <li>
          Vérifiez que <code>VITE_API_URL</code> pointe vers votre API (par
          défaut <code>http://localhost:8000</code>).
        </li>
        <li>Relancez le serveur de développement (<code>npm run dev</code>).</li>
      </ol>
    </main>
  );
}
