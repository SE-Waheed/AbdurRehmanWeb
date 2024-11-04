import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import Products from '../../components/products/Products'
import Feature from '../../components/feature/Feature'
import Testimonial from '../../components/testimonial/Testimonial'
import Category from '../../components/Category.jsx/Category'
import { Button } from '@/components/ui/button'

function Home() {

   

  return (
    <>
    <div className="containet mx-6">
    
    <HeroSection/>
    <Button>kll</Button>
    <Category/>
    <Products/>
    <Feature/>
    <Testimonial/> 

    </div>
    
    </>
  )
}

export default Home