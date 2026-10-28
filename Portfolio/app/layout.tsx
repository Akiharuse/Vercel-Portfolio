import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Haruyuki — Independent Designer & Developer",
  description: "Thoughtful digital experiences shaped with design and technology. Independent designer and developer based in Taipei.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
