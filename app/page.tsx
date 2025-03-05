export default function Home() {
  return (
    <main>
      <h1>GitHub Profile OGP Generator</h1>
      <p>例：</p>
      <ul>
        <li><a href="/api/og">デフォルト（パラメータなし）</a></li>
        <li><a href="/api/og?username=vercel">Vercelのプロフィール</a></li>
        <li><a href="/api/og?username=github">GitHubのプロフィール</a></li>
      </ul>
    </main>
  );
} 