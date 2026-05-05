import './globals.css';
import { Header } from './components/layout/header';
import { Footer } from './components/layout/footer';
import AtSymbolFontFix from './components/AtSymbolFontFix';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <AtSymbolFontFix />
      </body>
    </html>
  );
}
