import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import { Toaster } from '@/components/ui/sonner';
import LoadingAnimation from '@/components/common/LoadingAnimation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Jhon Doe | M.Sc. Chemistry Student',
	description: 'Personal website of Jhon Doe, an M.Sc. Chemistry student from West Bengal, India, showcasing academic achievements, research projects, and professional aspirations.',
	keywords: 'Jhon Doe, Chemistry, Researcher, West Bengal, India, M.Sc. Chemistry, Chemical Research, Student Portfolio',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<link rel="shortcut icon" href="./flask.png" type="image/x-icon" />
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<LoadingAnimation />
					<Navbar />
					<main className="min-h-screen">
						{children}
					</main>
					<Footer />
					<ThemeToggle />
					<Toaster position="bottom-right" />
				</ThemeProvider>
			</body>
		</html>
	);
}