import React from 'react'
import Layout from '@/components/layout/Layout'
import Hero from '@/components/home/hero/Hero'
import Cards from '@/components/home/cardSec/Cards'
const page = () => {
  return (
    <Layout>
      <Hero/>
      <Cards/>
    </Layout>
  )
}

export default page