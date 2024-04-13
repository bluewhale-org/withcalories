import "~/styles/globals.css";

import { Inter } from "next/font/google";
import Link from "next/link";
import { TbBrandGithub } from "react-icons/tb";
import { Button } from "~/components/ui/button";
import { FaCity } from "react-icons/fa";

import "leaflet/dist/leaflet.css";
import { Header } from "~/components/header";
import PlausibleProvider from "next-plausible";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "WithCalories",
  description:
    "Find restaurants with calories on the menu using the WithCalories restaurant directory!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider domain="withcalories.com" />
      </head>
      <body className={`font-sans ${inter.variable}`}>
        <div className="flex flex-col p-8 px-4 md:px-8">
          <div className="grid gap-6 md:container">
            <Header />
            <main className="grid gap-6">{children}</main>
            <footer className="rounded-lg bg-muted p-4 md:flex md:items-center md:justify-between">
              <p className="mb-4 text-xs font-normal text-neutral-500 md:mb-0">
                &copy; 2024{" "}
                <Link
                  href="https://www.bluewhale.dev"
                  className="hover:underline"
                >
                  Blue Whale Software, LLC
                </Link>
                .
              </p>
              <div className="flex gap-3">
                <Link href="https://getwaitlist.com/waitlist/15706">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-1 font-normal"
                  >
                    <FaCity className="text-neutral-500" /> Suggest a City
                  </Button>
                </Link>
                <Link
                  href="https://github.com/bluewhale-org/withcalories"
                  target="_blank"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-1 font-normal"
                  >
                    <TbBrandGithub /> Contribute on GitHub
                  </Button>
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
