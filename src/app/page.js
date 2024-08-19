import React from 'react'
import Layout from '@/components/layout/Layout'
import Hero from '@/components/home/hero/Hero'
import Cards from '@/components/home/cardSec/Cards'
import ImageSlider from '@/components/home/ImageSlider/ImageSlider'
const page = () => {
  return (
    <Layout>
      <Hero/>
      <Cards/>
      <ImageSlider/>
    </Layout>
  )
}

export default page