"use client";

import { useCart } from "../sections/cart-provider";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function CartPage() {
	const { cartItems, removeFromCart, clearCart } = useCart();

	const total = cartItems.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0,
	);

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-8">Your Cart</h1>
			{cartItems.length === 0 ? (
				<p className="text-gray-600">Your cart is empty.</p>
			) : (
				<>
					{cartItems.map((item) => (
						<Card
							key={`${item.id}-${item.filling}-${item.base}`}
							className="mb-4"
						>
							<CardHeader>
								<CardTitle>{item.name}</CardTitle>
							</CardHeader>
							<CardContent>
								<p>
									<span className="font-semibold">Quantity:</span>{" "}
									{item.quantity}
								</p>
								<p>
									<span className="font-semibold">Price:</span> $
									{item.price.toFixed(2)}
								</p>
								<p>
									<span className="font-semibold">Subtotal:</span> $
									{(item.price * item.quantity).toFixed(2)}
								</p>
								<p>
									<span className="font-semibold">Filling:</span> {item.filling}
								</p>
								<p>
									<span className="font-semibold">Cake Base:</span> {item.base}
								</p>
							</CardContent>
							<CardFooter>
								<Button
									variant="destructive"
									onClick={() => removeFromCart(item.id)}
								>
									Remove
								</Button>
							</CardFooter>
						</Card>
					))}
					<div className="mt-8">
						<p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
						<div className="mt-4 space-x-4">
							<Button
								className="bg-purple text-gray-800 hover:bg-[#bfadc1]"
								onClick={() => alert("Checkout functionality not implemented")}
							>
								Checkout
							</Button>
							<Button variant="outline" onClick={clearCart}>
								Clear Cart
							</Button>
						</div>
					</div>
				</>
			)}
		</div>
	);
}
