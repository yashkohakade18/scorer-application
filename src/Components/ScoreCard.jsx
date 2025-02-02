import React from 'react'


import { CirclePlus as IconCirclePLus,CircleMinus as IconCircleMinus, AlertCircle,} from 'lucide-react'


function ScoreCard({ score, increasescore , decreasescore , teamname , winner }) {
  const isWinner = winner ===teamname;
  return (
    
    <div className=' m-5 w-auto md:w-1/3 rounded-lg shadow-green-950 shadow-lg border-t-2'>
    <h2 className='text-3xl text-center my-4 border-b-2  text-green-600 font-semibold'>
      {teamname} {isWinner?"🏆" : ""} </h2> 
    <h3 className='text-5xl md:text-8xl text-center  text-green-600' >
      {score}</h3>

      {winner? null:(
    <div className='flex justify-around mb-5 mt-4 md:mt-12'>
    <IconCirclePLus color='#000' size={60} onClick={increasescore}/>
    <IconCircleMinus color='#000' size={60} onClick={decreasescore}/>
    </div>)}
    </div>

    
  )
}

export default ScoreCard