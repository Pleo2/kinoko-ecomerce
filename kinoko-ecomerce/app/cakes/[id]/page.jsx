"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useCart } from "../../sections/cart-provider";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const cakes = [
	{
		id: 1,
		name: "Chocolate Dream",
		basePrice: 35.99,
		image: "/placeholder.svg?height=400&width=400",
		description: "Rich chocolate cake with creamy chocolate frosting.",
		fillings: [
			{ name: "Chocolate Ganache", price: 0 },
			{ name: "Raspberry", price: 2 },
			{ name: "Dulce de Leche", price: 3 },
			{ name: "Vanilla Cream", price: 1 },
		],
		bases: [
			{ name: "Chocolate", price: 0 },
			{ name: "Vanilla", price: 0 },
			{ name: "Marble", price: 2 },
		],
	},
	{
		id: 2,
		name: "Strawberry Delight",
		basePrice: 32.99,
		image: "/placeholder.svg?height=400&width=400",
		description:
			"Light vanilla cake with fresh strawberries and strawberry frosting.",
		fillings: [
			{ name: "Strawberry Cream", price: 0 },
			{ name: "Lemon Curd", price: 2 },
			{ name: "Vanilla Cream", price: 1 },
			{ name: "Chocolate", price: 2 },
		],
		bases: [
			{ name: "Vanilla", price: 0 },
			{ name: "Strawberry", price: 2 },
			{ name: "Lemon", price: 2 },
		],
	},
	{
		id: 3,
		name: "Vanilla Bliss",
		basePrice: 30.99,
		image: "/placeholder.svg?height=400&width=400",
		description:
			"Classic vanilla cake with smooth vanilla buttercream frosting.",
		fillings: [
			{ name: "Vanilla Buttercream", price: 0 },
			{ name: "Chocolate", price: 2 },
			{ name: "Dulce de Leche", price: 3 },
			{ name: "Lemon", price: 2 },
		],
		bases: [
			{ name: "Vanilla", price: 0 },
			{ name: "Almond", price: 2 },
			{ name: "Lemon", price: 2 },
		],
	},
	{
		id: 4,
		name: "Red Velvet Romance",
		basePrice: 37.99,
		image: "/placeholder.svg?height=400&width=400",
		description: "Velvety red cake with cream cheese frosting.",
		fillings: [
			{ name: "Cream Cheese", price: 0 },
			{ name: "Chocolate", price: 2 },
			{ name: "Raspberry", price: 2 },
			{ name: "Vanilla Cream", price: 1 },
		],
		bases: [
			{ name: "Red Velvet", price: 0 },
			{ name: "Chocolate", price: 0 },
			{ name: "Vanilla", price: 0 },
		],
	},
	{
		id: 5,
		name: "Lemon Zest Delight",
		basePrice: 33.99,
		image: "/placeholder.svg?height=400&width=400",
		description: "Tangy lemon cake with lemon zest frosting.",
		fillings: [
			{ name: "Lemon Curd", price: 0 },
			{ name: "Raspberry", price: 2 },
			{ name: "Vanilla Cream", price: 1 },
			{ name: "Blueberry", price: 2 },
		],
		bases: [
			{ name: "Lemon", price: 0 },
			{ name: "Vanilla", price: 0 },
			{ name: "Almond", price: 2 },
		],
	},
	{
		id: 6,
		name: "Caramel Cream Dream",
		basePrice: 36.99,
		image: "/placeholder.svg?height=400&width=400",
		description: "Moist caramel cake with caramel cream frosting.",
		fillings: [
			{ name: "Caramel Cream", price: 0 },
			{ name: "Chocolate", price: 2 },
			{ name: "Dulce de Leche", price: 3 },
			{ name: "Vanilla Cream", price: 1 },
		],
		bases: [
			{ name: "Caramel", price: 0 },
			{ name: "Vanilla", price: 0 },
			{ name: "Chocolate", price: 0 },
		],
	},
];

export default function CakeDetailPage() {
	const { id } = useParams();
	const cake = cakes.find((c) => c.id === Number.parseInt(id));
	const [quantity, setQuantity] = useState(1);
	const [selectedFilling, setSelectedFilling] = useState("");
	const [selectedBase, setSelectedBase] = useState("");
	const [totalPrice, setTotalPrice] = useState(0);
	const { addToCart } = useCart();

	useEffect(() => {
		if (cake) {
			const fillingPrice =
				cake.fillings.find((f) => f.name === selectedFilling)?.price || 0;
			const basePrice =
				cake.bases.find((b) => b.name === selectedBase)?.price || 0;
			setTotalPrice((cake.basePrice + fillingPrice + basePrice) * quantity);
		}
	}, [cake, selectedFilling, selectedBase, quantity]);

	if (!cake) {
		return <div>Cake not found</div>;
	}

	const handleAddToCart = () => {
		addToCart({
			id: cake.id,
			name: cake.name,
			price: totalPrice / quantity,
			quantity,
			filling: selectedFilling,
			base: selectedBase,
		});
	};

	return (
		<div className="flex flex-col md:flex-row gap-8">
			<div className="md:w-1/2">
				<img
					src={cake.image}
					alt={cake.name}
					className="w-full rounded-lg shadow-md"
				/>
			</div>
			<div className="md:w-1/2">
				<h1 className="text-3xl font-bold mb-4">{cake.name}</h1>
				<p className="text-xl font-bold mb-4">${totalPrice.toFixed(2)}</p>
				<p className="text-gray-600 mb-4">{cake.description}</p>

				<div className="space-y-4 mb-4">
					<div>
						<Label htmlFor="filling">Filling Flavor</Label>
						<Select value={selectedFilling} onValueChange={setSelectedFilling}>
							<SelectTrigger id="filling">
								<SelectValue placeholder="Select filling" />
							</SelectTrigger>
							<SelectContent>
								{cake.fillings.map((filling) => (
									<SelectItem key={filling.name} value={filling.name}>
										{filling.name}{" "}
										{filling.price > 0 && `(+$${filling.price.toFixed(2)})`}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>

					<div>
						<Label htmlFor="base">Cake Base</Label>
						<Select value={selectedBase} onValueChange={setSelectedBase}>
							<SelectTrigger id="base">
								<SelectValue placeholder="Select cake base" />
							</SelectTrigger>
							<SelectContent>
								{cake.bases.map((base) => (
									<SelectItem key={base.name} value={base.name}>
										{base.name}{" "}
										{base.price > 0 && `(+$${base.price.toFixed(2)})`}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>
				</div>

				<div className="flex items-center gap-4 mb-4">
					<Label htmlFor="quantity" className="font-bold">
						Quantity:
					</Label>
					<input
						type="number"
						id="quantity"
						min="1"
						value={quantity}
						onChange={(e) => setQuantity(Number.parseInt(e.target.value))}
						className="border rounded px-2 py-1 w-16"
					/>
				</div>
				<Button
					onClick={handleAddToCart}
					className="bg-purple text-gray-800 hover:bg-[#bfadc1]"
				>
					Add to Cart
				</Button>
			</div>
		</div>
	);
}
