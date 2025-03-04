export default function Home() {
  return (
    <main>
      <h1>OGP Generator</h1>
      <p>OGP画像の例：</p>
      <ul>
        <li><a href="/api/og">デフォルト</a></li>
        <li><a href="/api/og?title=URLがタイトル">URLがタイトルになる</a></li>
      </ul>
    </main>
  );
} 