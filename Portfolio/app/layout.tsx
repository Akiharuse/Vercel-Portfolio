import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Edhel John L. Zamora — Portfolio",
  description: "Edhel John L. Zamora is a fourth-year Information Systems student at Samar State University, exploring thoughtful digital experiences through design and technology.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
