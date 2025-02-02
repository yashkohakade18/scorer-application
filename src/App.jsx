import { useEffect, useState } from 'react'
import './App.css'
import ScoreCard from './Components/ScoreCard'
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const [winner,setWinner] = useState(null);

  const MAX_SCORE = 11;

  useEffect(() => {
    if (scoreA<MAX_SCORE  && scoreB<MAX_SCORE ){
    return;
    }
    if (scoreA==MAX_SCORE  ){
      setWinner("INDIA");
      toast('INDIA wins!', {
        icon: '🏆',
      });
  
    }
    if (scoreB==MAX_SCORE  ){
      setWinner("USA");
      toast('USA wins!', {
        icon: '🏆',
      });
     
      }
    }, [scoreA,scoreB]);
  
  return (
    <div className='bg-green-100 min-h-screen p-10'>
  <h1 className='text-center text-3xl md:text-4xl text-green-700 py-4 md:py-10 border-green-700 border-3 border-r-2 shadow-green-800 shadow-md font-semibold rounded-lg'>TABLE-TENNIS SCORER🏓</h1>
 
  <div className='flex flex-col md:flex-row justify-center md:justify-around md:mt-10 '>
 <ScoreCard score={scoreA} teamname="INDIA" increasescore={()=>{
  
  setScoreA(scoreA+1);}}
  decreasescore={()=>{

    setScoreA(scoreA-1)
   }}
   winner={winner}
   /> 

 <ScoreCard score={scoreB} teamname="USA" 
 increasescore={()=>{
  
  setScoreB(scoreB+1);}}
 decreasescore={()=>{
  
  setScoreB(scoreB-1)
 }}
 winner={winner}
 /> 
 </div>
<br/>
<br/>
{winner?
 <p className='text-center text-2xl text-green-700 '>
  Winner Team is 
  <b className='mx-2'>{winner}🏆.</b>Click Reset to start again.
 </p>:null}

    <div className='flex justify-center mt-10'>
      <button className=' px-10 py-3 text-3xl text-green-700 rounded-lg shadow-lg shadow-green-800 border-t-2 font-semibold ' onClick={ ()=> {setScoreA(0);
        setScoreB(0);
      }}>
        RESET</button>
    </div>
    <Toaster/>
    </div>
  )
}

export default App
