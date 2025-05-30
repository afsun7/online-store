import { MonitorSmartphoneIcon } from 'lucide-react'
import Link from 'next/link'
import { Button } from './button'

const Welcome = () => {
	return (
		<div className='mt-6 flex flex-col items-center justify-center'>
			<span>welcome to</span>
			<div className='flex items-center gap-x-2'>
				<MonitorSmartphoneIcon />
				<h1 className='text-2xl font-bold text-gray-800'>Digital shop</h1>
			</div>
			<Button
				asChild
				className='mt-6'
			>
				<Link href='./products'> Go to products</Link>
			</Button>
		</div>
	)
}

export default Welcome
