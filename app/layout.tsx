import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

// Payment pending ho to isse true rakhein, payment milte hi false kar dein
const PAYMENT_PENDING = true;

export const metadata: Metadata = {
  title: 'WIPO Group - Smart Property Investment Platform',
  description: 'Invest smarter with WIPO Group. Access verified property deals, investment committees, and smart growth opportunities.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  if (PAYMENT_PENDING) {
    return (
      <html lang="en" className="dark bg-background">
        <body className="font-sans antialiased bg-background text-foreground">
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: '#000',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            fontFamily: 'sans-serif',
            zIndex: 999999,
            padding: '20px',
          }}>
            <div style={{
              fontSize: '14px',
              letterSpacing: '2px',
              color: '#ff5555',
              marginBottom: '20px',
              textTransform: 'uppercase',
            }}>
              Service Unavailable
            </div>
            <div style={{ fontSize: '22px', maxWidth: '600px', lineHeight: '1.6' }}>
              This website has been temporarily suspended due to a pending payment issue.
              <br /><br />
              The site will be restored as soon as the outstanding payment is cleared.
            </div>
          </div>
        </body>
      </html>
    );
  }

  return (
    <html lang="en" className="dark bg-background">
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}