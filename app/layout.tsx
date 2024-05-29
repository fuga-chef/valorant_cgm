import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SupabaseListener from "@/app/components/supabaseListener";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Valorant 募集",
  description: "valorant rectuiting BBS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div>
          <SupabaseListener />
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
