import dynamic from 'next/dynamic'
import Hero from '@/content/home/Hero'

const Section1 = dynamic(() => import('@/content/home/Section1'))

const Home = () => {
    return (
        <>
            <Hero />
            <Section1 />
        </>
    )
}

export default Home