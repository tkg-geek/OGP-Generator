'use client'; // クライアントサイドでの実行を有効化

import { useState } from 'react';

export default function Home() {
  const baseUrl = 'https://ogp-generator-five.vercel.app';
  const [username, setUsername] = useState(''); // ユーザー名の状態管理
  
  // シェアURLとテキストの作成（ユーザー名を含める）
  const shareUrl = encodeURIComponent(`${baseUrl}/api/og?username=${username}`);
  const shareText = encodeURIComponent(`${username}のGitHubプロフィールOGP画像を生成しました！`);
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`;

  return (
    <main>
      <h1>OGP Generator</h1>
      
      {/* GitHubユーザー名入力フォーム */}
      <div style={{
        marginBottom: '20px',
        padding: '20px',
        background: '#f5f5f5',
        borderRadius: '5px'
      }}>
        <p>GitHubユーザー名を入力：</p>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="例: github"
            style={{
              padding: '8px',
              fontSize: '16px',
              borderRadius: '4px',
              border: '1px solid #ddd',
              width: '200px',
              marginRight: '10px'
            }}
          />
        </div>

        {/* プレビュー */}
        {username && (
          <div style={{ marginTop: '20px' }}>
            <p>プレビュー：</p>
            <img 
              src={`/api/og?username=${username}`}
              alt="OGP Preview"
              style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '5px',
                marginBottom: '10px'
              }}
            />
          </div>
        )}

        {/* シェアボタン */}
        {username && (
          <a
            href={twitterShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '10px 20px',
              background: '#1DA1F2',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '5px',
              fontSize: '14px'
            }}
          >
            X（Twitter）でシェア
          </a>
        )}
      </div>

      <p>例：</p>
      <ul>
        <li><a href="/api/og">デフォルト</a></li>
        <li><a href="/api/og?username=github">GitHubプロフィール</a></li>
        <li><a href="/api/og?type=emoji">絵文字バージョン</a></li>
        <li><a href="/api/og?type=svg">SVGバージョン</a></li>
      </ul>
    </main>
  );
} 