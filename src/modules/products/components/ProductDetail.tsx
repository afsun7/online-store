import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

const ProductDetail = (product: any) => {
	return (
		<div className='container mx-auto py-10'>
			<Card className='mx-auto max-w-3xl'>
				<CardHeader>
					<CardTitle className='text-2xl font-bold'>{product?.name}</CardTitle>
				</CardHeader>
				<CardContent>
					<div className='grid gap-6 md:grid-cols-2'>
						<div className='space-y-4'>
							{product?.images.length > 0 ? (
								<Image
									src={product?.image[0]?.noImage}
									alt={product?.name}
									width={500}
									height={500}
									quality={50}
									property='1'
									className='rounded-lg'
								/>
							) : (
								<div className='flex h-64 w-full items-center justify-center rounded-lg bg-gray-200'>
									no image available
								</div>
							)}
						</div>
						<div className='f;ex-col flex justify-between'>
							<p className='text-xl font-semibold'>${product?.price}</p>
							<p className='text-gray-700'>quantity:{product?.quantity}</p>
							<p className='text-gray-700'>category:{product?.category}</p>
							<p className='text-gray-500'>{product?.description || 'no description available'}</p>
							<Button
								variant='secondary'
								asChild
							>
								<Link href='/product'></Link>
							</Button>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	)
}

export default ProductDetail
