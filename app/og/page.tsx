import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

// generateMetadataとPageコンポーネントの引数の型を正確に定義
// Next.jsの型定義に準拠
export async function generateMetadata({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}): Promise<Metadata> {
  // usernameをstring型として取得
  const username = typeof searchParams.username === 'string' 
    ? searchParams.username 
    : 'github'

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

// Pageコンポーネントも同様の型定義を使用
export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  // usernameをstring型として取得
  const username = typeof searchParams.username === 'string' 
    ? searchParams.username 
    : 'github'

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