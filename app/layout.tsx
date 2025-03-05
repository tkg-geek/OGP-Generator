import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GitHub Profile OGP',
  description: 'Generate OGP image with GitHub Profile',
  openGraph: {
    title: 'GitHub Profile OGP',
    description: 'Generate OGP image with GitHub Profile',
    images: [{
      url: '/api/og?username=github',  // ← ここにパラメータを追加
      width: 1200,
      height: 630,
    }],
  },
  // Twitterカードの設定も追加可能
  twitter: {
    card: 'summary_large_image',
    title: 'GitHub Profile OGP',
    description: 'Generate OGP image with GitHub Profile',
    images: ['/api/og?username=github'],  // ← ここにパラメータを追加
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