import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Agamjot Singh • Portfolio',
  description: 'Full-stack developer and AI enthusiast pursuing B.Tech at NMIMS Chandigarh. Specializing in React, Next.js, Flask, and Machine Learning solutions.',
  keywords: 'Agamjot Singh, Full Stack Developer, React, Next.js, Flask, Machine Learning, AI, Web Development',
  authors: [{ name: 'Agamjot Singh' }],
  openGraph: {
    title: 'Agamjot Singh • Portfolio',
    description: 'Full-stack developer and AI enthusiast',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
