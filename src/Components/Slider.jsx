import React, { useEffect, useState } from 'react'
import Arrow from './Arrow'
import Card from './Card'

export default function Slider() {
    const [heros,setHeros]=useState();
    const [curentHeros,setCurentHeros]=useState();

    useEffect(
        ()=>{
            (
            async()=>{
                const res=await fetch('http://localhost:3001/heroes')
                const data=await res.json()
                setHeros(data)
            }
            )()
        },[]
    );
    const nextCurent=()=>{
       setCurentHeros(curentHeros==heros?.length-1?0:curentHeros+1)
    }
    const prevCurent=()=>{
       setCurentHeros(curentHeros==0?heros?.length-1:curentHeros-1)
    }
  return (
   
    <div class="slide-container">
       
        <div class="wrapper">

          <Arrow handleCurent={prevCurent} position={'prev'}/>
          <Card hero={heros[curentHeros]}/>
          <Arrow  handleCurent={nextCurent} position={'next'}/>

        </div>
     </div>
  )
}
