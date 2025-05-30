import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { GalleryThumbnails, Heart } from 'lucide-react'
import Link from 'next/link'

const ProductItem = async (props: { product: any }) => {
	const { product } = props
	return (
		<Card className='w-[400px] transform transition-transform duration-300 hover:scale-105'>
			<CardHeader>
				<div className='relative h-[300px] w-full'>
					{/* <Image
						src={product?.images[0]?.image || 'assets/noImage.jpg'}
						alt={product?.name}
						fill
						className='rounded-t-lg object-cover'
					/> */}
				</div>
			</CardHeader>
			<CardContent>
				<h2 className='text-xl font-bold'>{product?.name}</h2>
				<p className='text-gray-500'>{product?.name}</p>
				<div className='flex items-center justify-between'>
					<p className='mt-4 text-lg font-semibold'>${product?.price}</p>
					<div className='flex gap-2'>
						<Heart />
						<Link href={`/products/catalog?id=${product.id}`}>
							<GalleryThumbnails />
						</Link>
					</div>
				</div>
			</CardContent>
			<CardFooter>
				<Button className='w-full'>
					<Link href={`/products/${product.id}`}>more detail</Link>
				</Button>
			</CardFooter>
		</Card>
	)
}

export default ProductItem
