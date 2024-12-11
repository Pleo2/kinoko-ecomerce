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
		image: "/placeholder.svg",
	},
	{
		id: 2,
		name: "Strawberry Delight",
		price: 32.99,
		image: "/placeholder.svg",
	},
	{
		id: 3,
		name: "Vanilla Bliss",
		price: 30.99,
		image: "/placeholder.svg",
	},
];

export default function Home() {
	return (
		<div>
			<div className="bg-[#cdbecf] py-16 px-4 mb-8 rounded-lg shadow-md">
				<h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
					Welcome to Sweet Delights Bakery
				</h1>
				<p className="text-center text-gray-700 mb-8">
					Discover our delicious cakes for every occasion
				</p>
				<div className="text-center">
					<Link href="/cakes">
						<Button className="bg-white text-gray-800 hover:bg-gray-100">
							View All Cakes
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
								<Button className="bg-[#cdbecf] text-gray-800 hover:bg-[#bfadc1]">
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

