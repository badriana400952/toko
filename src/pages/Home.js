import React from 'react'
import Carousels from '../component/Carousels'
import DataBabyProduk from '../component/DataBabyProduk'
import DataMenProduk from '../component/DataMenProduk'
import DataProduk from '../component/DataWomen'

const Home = () => {
  return (
    <div>
    <Carousels/>
    <DataProduk/>
    <DataMenProduk/>
    <DataBabyProduk/>
    </div>
  )
}

export default Home