import { Metadata } from 'next'
import Image from 'next/image'

// URLパラメータの型定義
type Props = {
  params: {
    username: string
  }
}

// メタデータを動的に生成
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const username = params.username

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
export default function Page({ params }: Props) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">{params.username}のOGP画像</h1>
      <div style={{ position: 'relative', width: '100%', height: '630px' }}>
        <Image 
          src={`/api/og?username=${params.username}`}
          alt={`${params.username}のOGP画像`}
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
    </div>
  )
} 