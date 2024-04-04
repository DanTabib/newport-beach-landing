import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";

const playfair_display = Playfair_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Newport Beach",
	description: "LUXURY at your leisure",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={playfair_display.className}>{children}</body>
		</html>
	);
}
