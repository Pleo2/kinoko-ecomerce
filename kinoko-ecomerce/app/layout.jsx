import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./sections/header";
import Footer from "./sections/footer";
import { CartProvider } from "./sections/cart-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Sweet Delights Bakery",
	description: "Delicious cakes for every occasion",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<CartProvider>
					<Header />
					<main className="container mx-auto px-4 py-8">{children}</main>
					<Footer />
				</CartProvider>
			</body>
		</html>
	);
}
