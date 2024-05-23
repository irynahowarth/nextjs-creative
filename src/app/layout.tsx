import { PrismicPreview } from "@prismicio/next";
import {Urbanist} from 'next/font/google'
import { repositoryName } from "@/prismicio";
import './globals.css'
import Header from "@/components/Header";

const urbanist = Urbanist({subsets:['latin']})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-slate-900 text-slate-100">
      <body className={urbanist.className}>
        <Header/>
        {children}
      </body>
        <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
