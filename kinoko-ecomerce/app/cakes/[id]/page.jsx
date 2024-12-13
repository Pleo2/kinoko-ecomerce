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

import { cakes } from "@/app/mocks-cakes";

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
				cake.rellenos.find((f) => f.name === selectedFilling)?.price || 0;
			const basePrice =
				cake.SaborDelPonque.find((b) => b.name === selectedBase)?.price || 0;
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
								{cake.rellenos.map((filling) => (
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
								{cake.SaborDelPonque.map((base) => (
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
