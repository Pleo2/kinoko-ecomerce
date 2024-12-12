import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const featuredCakes = [
	{
		id: 1,
		name: "Chocolate Dream",
		price: 35.99,
		image: "/images/20240513_182430.webp",
	},
	{
		id: 2,
		name: "Strawberry Delight",
		price: 32.99,
		image: "/images/20240516_091853.webp",
	},
	{
		id: 3,
		name: "Vanilla Bliss",
		price: 30.99,
		image: "/images/20240523_153232.webp",
	},
	{
		id: 4,
		name: "Vanilla Bliss",
		price: 30.99,
		image: "/images/1000307419.webp",
	},
	{
		id: 5,
		name: "Vanilla Bliss",
		price: 30.99,
		image: "/images/1000904494.webp",
	},
	{
		id: 6,
		name: "Vanilla Bliss",
		price: 30.99,
		image: "/images/IMG_0972.webp",
	},
	{
		id: 7,
		name: "Vanilla Bliss",
		price: 30.99,
		image: "/images/IMG_1213.webp",
	},
	{
		id: 8,
		name: "Vanilla Bliss",
		price: 30.99,
		image: "/images/IMG_1218_jpg-2.webp",
	},
	{
		id: 9,
		name: "Vanilla Bliss",
		price: 30.99,
		image: "/images/IMG_1293.webp",
	},
];

export default function Home() {
	return (
		<div>
			<div className=" border-2 border-purple py-16 px-4 mb-8 rounded-lg shadow-md">
				<h1 className="text-6xl font-black text-center text-black mb-4">
					Bienvenido a Kinoko
				</h1>
				<p className="text-center text-accent-foreground mb-8">
					Una pasteleria 100% venezolana ubicada en valencia
				</p>
				<div className="text-center">
					<Link href="/cakes">
						<Button className="bg-purple text-gray-800 hover:bg-gray-100">
							Comprar torticas
						</Button>
					</Link>
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{featuredCakes.map((cake) => (
					<Card key={cake.id} className="border-[#cdbecf] border-2">
						<CardHeader>
							<CardTitle>{cake.name}</CardTitle>
						</CardHeader>
						<CardContent>
							<img
								src={cake.image}
								alt={cake.name}
								className="w-full h-48 object-cover rounded-md"
							/>
							<p className="mt-2 text-xl font-bold">${cake.price.toFixed(2)}</p>
						</CardContent>
						<CardFooter>
							<Link href={`/cakes/${cake.id}`}>
								<Button className="bg-purple text-gray-800 hover:bg-buttonColor">
									View Details
								</Button>
							</Link>
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	);
}

