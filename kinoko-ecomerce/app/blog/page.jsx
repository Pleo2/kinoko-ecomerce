"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const blogPosts = [
	{
		slug: "best-cake-recipes",
		title: "Top 5 Cake Recipes for Beginners",
		excerpt:
			"Discover the easiest and most delicious cake recipes perfect for novice bakers.",
		date: "2023-06-01",
		category: "Recipes",
		image: "/placeholder.svg",
	},
	{
		slug: "decorating-tips",
		title: "Advanced Cake Decorating Techniques",
		excerpt:
			"Learn professional cake decorating tips to take your cakes to the next level.",
		date: "2023-06-15",
		category: "Decorating",
		image: "/placeholder.svg",
	},
	{
		slug: "youtube-vanilla-cake",
		title: "How to Make the Perfect Vanilla Cake",
		excerpt:
			"Watch our step-by-step video guide to baking a delicious vanilla cake.",
		date: "2023-07-01",
		category: "Video Tutorials",
		image: "/placeholder.svg",
		youtubeId: "dQw4w9WgXcQ",
	},
	{
		slug: "baking-tools",
		title: "Essential Baking Tools for Every Baker",
		excerpt: "Discover the must-have tools that will elevate your baking game.",
		date: "2023-07-15",
		category: "Equipment",
		image: "/placeholder.svg",
	},
	{
		slug: "gluten-free-baking",
		title: "Mastering Gluten-Free Baking",
		excerpt:
			"Tips and tricks for creating delicious gluten-free cakes and pastries.",
		date: "2023-08-01",
		category: "Special Diets",
		image: "/placeholder.svg",
	},
	{
		slug: "cake-trends-2023",
		title: "Top Cake Trends of 2023",
		excerpt:
			"Explore the hottest cake trends taking the baking world by storm this year.",
		date: "2023-08-15",
		category: "Trends",
		image: "/placeholder.svg",
	},
	{
		slug: "fondant-basics",
		title: "Fondant 101: Getting Started with Fondant",
		excerpt:
			"Learn the basics of working with fondant for beautiful cake decorations.",
		date: "2023-09-01",
		category: "Decorating",
		image: "/placeholder.svg",
	},
	{
		slug: "vegan-baking",
		title: "Vegan Baking: Tips for Egg and Dairy Substitutes",
		excerpt:
			"Discover how to create delicious vegan cakes using plant-based ingredients.",
		date: "2023-09-15",
		category: "Special Diets",
		image: "/placeholder.svg",
	},
	{
		slug: "cake-storage",
		title: "How to Properly Store and Preserve Your Cakes",
		excerpt:
			"Learn the best practices for keeping your cakes fresh and delicious.",
		date: "2023-10-01",
		category: "Tips & Tricks",
		image: "/placeholder.svg",
	},
];

const categories = ["All", ...new Set(blogPosts.map((post) => post.category))];

export default function BlogPage() {
	const [selectedCategory, setSelectedCategory] = useState("All");

	const filteredPosts =
		selectedCategory === "All"
			? blogPosts
			: blogPosts.filter((post) => post.category === selectedCategory);

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-4xl font-bold mb-8">Sweet Delights Blog</h1>
			<div className="mb-8">
				<Select value={selectedCategory} onValueChange={setSelectedCategory}>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Select a category" />
					</SelectTrigger>
					<SelectContent>
						{categories.map((category) => (
							<SelectItem key={category} value={category}>
								{category}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{filteredPosts.map((post) => (
					<Card key={post.slug} className="flex flex-col">
						<CardHeader>
							<Image
								src={post.image}
								alt={post.title}
								width={300}
								height={200}
								className="w-full h-48 object-cover rounded-t-lg"
							/>
							<CardTitle className="mt-4">
								<Link
									href={`/blog/${post.slug}`}
									className="text-2xl font-bold hover:text-blue-600"
								>
									{post.title}
								</Link>
							</CardTitle>
						</CardHeader>
						<CardContent className="flex-grow">
							<p className="text-gray-600 mb-2">{post.date}</p>
							<p className="text-sm text-gray-500 mb-2">{post.category}</p>
							<p>{post.excerpt}</p>
						</CardContent>
						<CardFooter>
							<Link
								href={`/blog/${post.slug}`}
								className="text-blue-600 hover:underline"
							>
								Read more
							</Link>
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	);
}
