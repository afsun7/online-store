import Banner from '@/components/banner'
import Welcome from '@/components/ui/welcome'

export default function Home() {
	return (
		<div className='flex h-screen flex-col items-center justify-center'>
			<Banner />
			<Welcome />
		</div>
	)
}
