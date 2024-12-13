import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { cakes } from "./mocks-cakes";
import WelcomeSection from "@/components/homeSections/welcomeSection";
import MemeCakesSection from "@/components/homeSections/memeCakesSection";
import VintageCakesSection from "@/components/homeSections/vintageCakesSection";
import ManoAlzadaSection from "@/components/homeSections/manoAlzadaSection";

export default function Home() {
	return (
		<div>
			<WelcomeSection/>
			<MemeCakesSection/>
			<VintageCakesSection/>
			<ManoAlzadaSection/>
			<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
				{cakes.map((cake) => (
					<Card key={cake.id} className="border-[#cdbecf] border-2">
						<CardHeader>
							<CardTitle>{cake.name}</CardTitle>
						</CardHeader>
						<CardContent>
							<img
								src={cake.image}
								alt={cake.name}
								className="object-center object-fill rounded-md"
							/>
							<p className="bg-buttonColor w-max px-2 py-1 rounded-full text-xs text-background mt-2">{cake.description}</p>
							<p className="mt-2 text-4xl font-bold text-foreground">$ {cake.basePrice.toFixed(2)}</p>
						</CardContent>
						<CardFooter>
							<Link href={`/cakes/${cake.id}`}>
								<Button className="bg-purple text-gray-800 hover:bg-buttonColor">
									Comprar Tortita
								</Button>
							</Link>
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	);
}

