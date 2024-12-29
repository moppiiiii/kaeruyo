import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kaeruyo!",
  description: "実家で過ごす予定を家族と共有しましょう",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
