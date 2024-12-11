'use client'

import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCart } from './cart-provider'

export default function Header() {
  const { cartItems } = useCart()

  return (
    (<header className="bg-[#cdbecf] shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Sweet Delights Bakery
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-gray-800 hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/cakes"
                className="text-gray-800 hover:text-white transition-colors">
                Cakes
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-gray-800 hover:text-white transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/cart" className="text-gray-800 hover:text-white transition-colors">
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

