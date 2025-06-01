'use client'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

const Ads = () => {
	return (
		<Card className='flex w-3/4 flex-row items-center justify-between'>
			<div>
				<CardHeader>
					<CardTitle>on sale product</CardTitle>
					<CardDescription>Buy outdated products with 50% discount</CardDescription>
				</CardHeader>
				<CardFooter>
					<Button>Buy Now</Button>
				</CardFooter>
			</div>
			<Image
				src='/mock/iphone+.webp'
				width={300}
				height={200}
				alt='ads'
				className='rounded-tr-lg rounded-br-lg'
			/>
		</Card>
	)
}

export default Ads
