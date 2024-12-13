import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { cakes } from '../mocks-cakes';

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
              <p className="mt-2 text-xl font-bold">${cake.basePrice.toFixed(2)}</p>
            </CardContent>
            <CardFooter>
              <p>{cake.description}</p>
              <Link href={`/cakes/${cake.id}`}>
                <Button className="bg-buttonColor">ver tortita</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>)
  );
}

