import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

// 型定義
type Props = {
  searchParams: { username?: string }
}

// メタデータ生成関数
export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const username = searchParams.username || 'github'

  return {
    title: `${username}のOGP画像`,
    description: `${username}のGitHubプロフィールを使用したOGP画像`,
    openGraph: {
      title: `${username}のOGP画像`,
      description: `${username}のGitHubプロフィールを使用したOGP画像`,
      images: [{
        url: `/api/og?username=${username}`,
        width: 1200,
        height: 630,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${username}のOGP画像`,
      description: `${username}のGitHubプロフィールを使用したOGP画像`,
      images: [`/api/og?username=${username}`],
    },
  }
}

// ページコンポーネント
export default function Page({ searchParams }: Props) {
  const username = searchParams.username || 'github'

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">{username}のOGP画像</h1>
      <div style={{ position: 'relative', width: '100%', height: '630px' }}>
        <Image 
          src={`/api/og?username=${username}`}
          alt={`${username}のOGP画像`}
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
      <div className="mt-4">
        <Link href="/" className="text-blue-500 hover:underline">
          トップページに戻る
        </Link>
      </div>
    </div>
  )
} 