import { data } from '../mock/products'
import ProductItem from './ProductItem'

const ProductList = () => {
	return (
		<div className='my-10 flex w-full flex-wrap items-center gap-x-6'>
			{data.map((item) => (
				<ProductItem
					key={item.name}
					product={item}
				/>
			))}
		</div>
	)
}

export default ProductList
