import { Metadata } from 'next'
import Image from 'next/image'

// 1. searchParamsを含めた正しい型定義
type Props = {
  params: { username: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

// 2. ページコンポーネントをasync関数に変更
export default async function Page({ params }: Props) {
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

// 3. generateMetadataもProps型を使用
export async function generateMetadata(
  { params, searchParams }: Props
): Promise<Metadata> {
  return {
    title: `${params.username}のOGP画像`,
    description: `${params.username}のGitHubプロフィールを使用したOGP画像`,
    openGraph: {
      title: `${params.username}のOGP画像`,
      description: `${params.username}のGitHubプロフィールを使用したOGP画像`,
      images: [{
        url: `/api/og?username=${params.username}`,
        width: 1200,
        height: 630,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${params.username}のOGP画像`,
      description: `${params.username}のGitHubプロフィールを使用したOGP画像`,
      images: [`/api/og?username=${params.username}`],
    },
  }
} 