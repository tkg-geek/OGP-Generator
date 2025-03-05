import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');

  // 絵文字表示の場合
  if (type === 'emoji') {
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 100,
            color: 'black',
            background: 'white',
            width: '100%',
            height: '100%',
            padding: '50px 200px',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          👋, 🌎
        </div>
      ),
      {
        width: 1200,
        height: 630,
        emoji: 'twemoji',  // 絵文字のスタイル指定
      }
    );
  }

  // 既存のGitHubプロフィール表示の処理
  const username = searchParams.get('username');
  if (!username) {
    return new ImageResponse(
      <div style={{ fontSize: 40, padding: 20 }}>
        URLに「?username=あなたのGitHubユーザー名」を追加してください
      </div>,
      {
        width: 1200,
        height: 630,
      }
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          fontSize: 60,
          color: 'black',
          background: '#f6f6f6',
          width: '100%',
          height: '100%',
          paddingTop: 50,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          width="256"
          height="256"
          src={`https://github.com/${username}.png`}
          style={{
            borderRadius: 128,  // 円形に切り取り
          }}
        />
        <p>github.com/{username}</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
