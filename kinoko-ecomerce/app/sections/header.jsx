'use client'

import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCart } from './cart-provider'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function Header() {
  const { cartItems } = useCart()
  const pathname = usePathname()
  
  return (
    (
    <header className="bg-white shadow-md shadow-purple m-auto h-32 flex items-center">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center ">
        <Link href="/" className={`text-2xl font-sans font-bold`}>
            <Image
              src={'/kinokoLogo.svg'}
              width={159}
              height={32}
              alt='picture, kinoko logo'
            />
        </Link>
        <nav>
            <ul className="flex space-x-4 items-center gap-12 [&>li]:text-foreground [&>li]:font-bold [&>li]:text-xl [&>li]:transition-colors ">
            <li>
              <Link href="/" className={`hover:text-accent-foreground hover:underline hover:underline-offset-8 ${pathname === '/' ? 'text-accent-foreground underline underline-offset-8' : ''}`}>
                home
              </Link>
            </li>
            <li>
              <Link
                href="/cakes"
                className={`hover:text-accent-foreground hover:underline hover:underline-offset-8 ${pathname === '/cakes' ? 'text-accent-foreground underline underline-offset-8' : ''}`}>
                cakes
              </Link>
            </li>
            <li>
              <Link href="/blog" className={`hover:text-accent-foreground hover:underline hover:underline-offset-8 ${pathname === '/blog' ? 'text-accent-foreground underline underline-offset-8' : ''}`}>
                blog
              </Link>
            </li>
            <li>
              <Link href="/cart" className=" transition-colors">
                <Button variant="outline" className="bg-white hover:bg-gray-100">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Cart ({cartItems.length})
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>)
  );
}

