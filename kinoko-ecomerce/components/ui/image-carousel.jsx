"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const images = [
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400&text=Cake+2",
    "/placeholder.svg?height=400&width=400&text=Cake+3",
]

export default function ImageCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 5000)

        return () => clearInterval(timer)
    }, [])

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    return (
        <div className="relative w-full max-w-md aspect-square">
            <AnimatePresence mode="wait">
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={`Cake ${currentIndex + 1}`}
                    className="object-center object-cover rounded-md w-full h-96 mb-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                />
            </AnimatePresence>

            <div className="absolute inset-0 flex items-center justify-between p-4">
                <Button
                    variant="outline"
                    size="icon"
                    className="bg-white/80 backdrop-blur-sm hover:bg-white/90"
                    onClick={handlePrevious}
                >
                    <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    className="bg-white/80 backdrop-blur-sm hover:bg-white/90"
                    onClick={handleNext}
                >
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
                {images.map((_, index) => (
                    <button
                        type="button"
                        key={index + _}
                        className={`h-2 w-4 rounded-full transition-colors ${index === currentIndex ? "bg-purple" : "bg-background"
                            }`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    )
}