import ProductDetail from '@/modules/products/components/ProductDetail'
import { data } from '@/modules/products/mock/products'

const Page = async ({ params }: { params: { id: string } }) => {
	const param = await params
	const product = data[0]

	return <ProductDetail {...product} />
}

export default Page
