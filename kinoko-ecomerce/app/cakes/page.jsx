import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const cakes = [
  { id: 1, name: 'Chocolate Dream', price: 35.99, image: '/images/20240513_182430.webp' },
  { id: 2, name: 'Strawberry Delight', price: 32.99, image: '/images/20240516_091853.webp' },
  { id: 3, name: 'Vanilla Bliss', price: 30.99, image: '/images/20240523_153232.webp' },
  { id: 4, name: 'Red Velvet Romance', price: 37.99, image: '/images/1000307419.webp' },
  { id: 5, name: 'Lemon Zest Delight', price: 33.99, image: '/images/1000904494.webp' },
  { id: 6, name: 'Caramel Cream Dream', price: 36.99, image: '/images/IMG_0972.webp' },
  { id: 7, name: 'Lemon Zest Delight', price: 33.99, image: '/images/IMG_1213.webp' },
  { id: 8, name: 'Caramel Cream Dream', price: 36.99, image: '/images/IMG_1218_jpg-2.webp' },
  { id: 9, name: 'Lemon Zest Delight', price: 33.99, image: '/images/IMG_1293.webp' },
]

export default function CakesPage() {
  return (
    (<div>
      <h1 className="text-4xl font-bold text-center mb-8">Our Cakes</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cakes.map((cake) => (
          <Card key={cake.id}>
            <CardHeader>
              <CardTitle>{cake.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src={cake.image}
                alt={cake.name}
                className="w-full h-48 object-cover rounded-md" />
              <p className="mt-2 text-xl font-bold">${cake.price.toFixed(2)}</p>
            </CardContent>
            <CardFooter>
              <Link href={`/cakes/${cake.id}`}>
                <Button className="bg-buttonColor">View Details</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>)
  );
}

