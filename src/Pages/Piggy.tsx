import React from 'react'
import Hero from '../Components/reUse/Hero'
import Security from '../Components/Block/Security'
import Deploys from '../Components/Block/Deploys'
import Invest from '../Components/Block/Invest'
import Customer from '../Components/Block/Customer'
import Millions from '../Components/Block/Millions'
import Shorts from '../Components/Block/Shorts'

const Piggy = () => {
  return (
    <div>
      <Hero />
      <Security />
      <Deploys />
      <Invest />
      <Customer />
      <Millions />
      <Shorts />
    </div>
  )
}

export default Piggy
