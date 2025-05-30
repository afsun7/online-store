import img1 from '@/components/banner/image/1.jpg'
import img2 from '@/components/banner/image/2.jpg'
import img3 from '@/components/banner/image/3.webp'
import img4 from '@/components/banner/image/4.webp'
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Image from 'next/image'

const Banner = () => {
	const listImage = [img1, img2, img3, img4]
	return (
		<Carousel
			opts={{
				align: 'start'
			}}
			className='w-full'
		>
			<CarouselContent>
				{listImage.map((item, index) => (
					<CarouselItem
						key={index}
						className='md:basis-1/2 lg:basis-1/3'
					>
						<div className='p-1'>
							<Card>
								<CardContent className='relative flex aspect-square h-[400px] w-full items-center justify-center p-6'>
									<Image
										src={item}
										fill
										className='object-cover'
										alt='ban'
									/>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	)
}
export default Banner
