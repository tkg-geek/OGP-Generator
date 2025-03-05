import { Metadata } from 'next'
import Image from 'next/image'

// 型定義を修正
interface Props {
  params: {
    username: string
  }
}

// generateMetadataの型を修正
export async function generateMetadata(
  props: Props
): Promise<Metadata> {
  const username = props.params.username

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

// ページコンポーネントを修正
export default function Page({ params }: Props) {
  const username = params.username;

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
    </div>
  )
} 