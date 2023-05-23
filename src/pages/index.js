import Image from 'next/image'
import { Inter } from 'next/font/google'

import Footer from '../../Components/Footer'
import Hero from '../../Components/Hero'
import Navbar from '../../Components/Navbar'
import Categories from '../../Components/Categories'
import FeaturedProducts from '../../Components/FeaturedProducts'

import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ featuredProducts }) {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts products={featuredProducts} />
      <Footer />
    </>
  )
}

export async function getServerSideProps() {
  const { data } = await axios.get('http://localhost:3000/api/products');

  return {
    props: {
      featuredProducts: data
    }
  }
}