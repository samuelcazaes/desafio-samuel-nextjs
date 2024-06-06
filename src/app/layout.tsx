import Header from "@/components/header";
import "./globals.css";
import { font_body } from "@/functions/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${font_body.variable} 
      container`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
