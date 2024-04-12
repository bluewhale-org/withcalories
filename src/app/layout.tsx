import "~/styles/globals.css";

import { Inter } from "next/font/google";
import Link from "next/link";
import {TbBrandGithub, TbSalad} from "react-icons/tb";
import {CITY_SLUG_TO_INFO, CITY_SLUGS} from "~/data/cities";
import {Card, CardTitle} from "~/components/ui/card";
import {Button} from "~/components/ui/button";
import {FaCity} from "react-icons/fa";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "WithCalories",
  description: "Find restaurants with calories on the menu using the WithCalories restaurant directory!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
      <div className="flex flex-col p-8">
        <div className="container grid gap-6">
            <header>
              <Link href="/" className="hover:text-foreground text-sky-500 hover:text-sky-700 flex gap-1 items-center text-lg font-medium">
                <TbSalad className="text-pink-500" />  WithCalories
              </Link>
            </header>
            <main className="grid gap-6">{children}</main>
            <footer className="bg-muted p-4 rounded-lg md:flex md:justify-between md:items-center">
                <p className="text-neutral-500 text-xs font-normal mb-4 md:mb-0">&copy; 2024 <Link href="https://www.bluewhale.dev" className="hover:underline">Blue Whale Software, LLC</Link>.</p>
                <div className="flex gap-3">
                    <Link href="https://getwaitlist.com/waitlist/15706">
                        <Button variant="outline" size="sm" className="font-normal gap-1"><FaCity className="text-neutral-500" /> Suggest a City</Button>
                    </Link>
                    <Link href="https://github.com/bluewhale-org/withcalories" target="_blank">
                        <Button variant="outline" size="sm" className="font-normal gap-1"><TbBrandGithub /> Contribute on GitHub</Button>
                    </Link>
                </div>
            </footer>
        </div>
      </div>
      </body>
    </html>
  );
}
