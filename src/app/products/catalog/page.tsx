import { Button } from '@/components/ui/button'
import Link from 'next/link'

const page = () => {
	return (
		<div className='mx-auto my-4 flex flex-col items-center'>
			{/* <CatalogList /> */}
			<Button asChild>
				<Link href='/products'> back to products</Link>
			</Button>
		</div>
	)
}

export default page
