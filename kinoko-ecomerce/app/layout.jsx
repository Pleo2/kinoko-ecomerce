import "./globals.css";
import { Inter } from "next/font/google";
import localFont from 'next/font/local'
import Header from "./sections/header";
import Footer from "./sections/footer";
import { CartProvider } from "./sections/cart-provider";

const inter = Inter({ subsets: ["latin"] });

const SnPro = localFont({
	src: [
		{
      path: '../public/fonts/SNPro-Regular.woff2',
      weight: '400',
		style: 'normal',
    },
    {
      path: '../public/fonts/SNPro-Medium.woff2',
      weight: '500',
      style: 'normal',
		},
		 {
      path: '../public/fonts/SNPro-Semibold.woff2',
      weight: '600',
      style: 'normal',
		},
		  {
      path: '../public/fonts/SNPro-Bold.woff2',
      weight: '700',
      style: 'normal',
		},
		   {
      path: '../public/fonts/SNPro-Black.woff2',
      weight: '900',
      style: 'normal',
		},
	]
})


export const metadata = {
	title: "KinokoCakes.ve",
	description: "Pasteleria venezolana ubicada en valencia estado carabobo",
};

export default function RootLayout({ children }) {
	// ${inter.className}
	return (
		<html lang="en">
			<body className={`${SnPro.className}`}>
				<CartProvider>
					<Header />
					<main className="container mx-auto px-4 py-8">{children}</main>
					<Footer />
				</CartProvider>
			</body>
		</html>
	);
}
