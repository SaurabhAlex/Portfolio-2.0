import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saurabh Gupta | Flutter Developer & AI Enthusiast",
  description:
    "Flutter Developer & AI Enthusiast. Crafting high-performance cross-platform experiences with Flutter, Firebase, and FastAPI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800&family=Inter:wght@400;500;700&family=JetBrains+Mono:wght@500&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="bg-void font-body-md text-on-surface selection:bg-primary/30">
        {children}
      </body>
    </html>
  );
}

