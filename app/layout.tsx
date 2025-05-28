import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import { Toaster } from '@/components/ui/sonner';
import LoadingAnimation from '@/components/common/LoadingAnimation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'KIST Embodied AGI Research Team',
	description: 'Advancing artificial general intelligence through embodied learning and human-robot interaction research.',
	keywords: ['KIST', 'Embodied AGI', 'Research', 'Artificial Intelligence', 'Human-Robot Interaction', 'Machine Learning'],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<link rel="shortcut icon" href="./oracle.png" type="image/x-icon" />
			<body className={inter.className}>
				<Navbar />
				<main className="min-h-screen">
					{children}
				</main>
				<Footer />
				<ThemeToggle />
				<Toaster position="bottom-right" />
			</body>
		</html>
	);
}