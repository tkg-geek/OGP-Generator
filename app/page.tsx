export default function Home() {
  return (
    <main>
      <h1>OGP Generator</h1>
      <p>例：</p>
      <ul>
        <li><a href="/api/og">デフォルト</a></li>
        <li><a href="/api/og?username=github">GitHubプロフィール</a></li>
        <li><a href="/api/og?type=emoji">絵文字バージョン</a></li>
      </ul>
    </main>
  );
} 