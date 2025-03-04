import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My App',
  description: 'My App Description',
  openGraph: {
    title: 'My App',
    description: 'My App Description',
    images: [{
      url: '/api/og',  // 生成したOGP画像のパス
      width: 1200,
      height: 630,
      alt: 'OG Image',
    }],
  },
  // Twitterカードの設定も追加可能
  twitter: {
    card: 'summary_large_image',
    title: 'My App',
    description: 'My App Description',
    images: ['/api/og'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
} 