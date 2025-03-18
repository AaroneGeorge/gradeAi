import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "evaluAIte",
	description: "Exam Answer Paper Valuation and Marksheet Generation using AI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<ClerkProvider>
			<html lang="en">
				<head>
					<title>evaluAIte</title>
					<link rel="icon" href="/valuate.png" type="image/png" sizes="any" />
				</head>
				<body className={inter.className}>{children}</body>
			</html>
		</ClerkProvider>
	);
}
