'use client'; // クライアントサイドでの実行を有効化

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [username, setUsername] = useState<string>('');

  // シェアボタンの処理を修正
  const handleShare = () => {
    const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL 
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : 'http://localhost:3000';

    // シェアURLを修正（/usernameではなく、/og?username=xxxの形式に）
    const shareUrl = username 
      ? `${baseUrl}/og?username=${username}`  // 例: https://ogp-generator-five.vercel.app/og?username=tkg-geek
      : baseUrl;

    const shareText = username 
      ? `${username}さんのGitHubプロフィールOGP画像を生成しました！`
      : 'GitHubプロフィールからOGP画像を生成できるサービス';

    const xShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;

    window.open(xShareUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">OGP Generator</h1>
      
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

        {/* プレビューとシェアボタン */}
        {username && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">プレビュー</h2>
            <img
              src={`/api/og?username=${username}`}
              alt={`${username}のOGP画像`}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            
            <a
              onClick={handleShare}
              style={{
                display: 'inline-block',
                padding: '10px 20px',
                background: '#1DA1F2',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '5px',
                fontSize: '14px',
                marginTop: '10px'
              }}
            >
              X（Twitter）でシェア
            </a>
          </div>
        )}
      </div>

      {/* リンクをaタグからLinkコンポーネントに変更 */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">その他の例：</h2>
        <ul className="space-y-2">
          <li><Link href="/api/og" className="text-blue-500 hover:underline">デフォルト</Link></li>
          <li><Link href="/api/og?type=emoji" className="text-blue-500 hover:underline">絵文字バージョン</Link></li>
          <li><Link href="/api/og?type=svg" className="text-blue-500 hover:underline">SVGバージョン</Link></li>
        </ul>
      </div>
    </main>
  );
} 