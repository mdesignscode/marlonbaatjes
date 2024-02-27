import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./styles/main.css";
import "./styles/globals.css";
import { cn } from "@/utils/cn";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marlon Baatjes Portfolio",
  description: "Web developer portfolio for Marlon Baatjes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          openSans.className,
          "h-screen overflow-y-hidden text-light bg-dark"
        )}
      >{children}
      </body>
    </html>
  );
}
