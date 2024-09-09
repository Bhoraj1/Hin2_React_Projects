import { useState } from 'react'

function App() {
  const [color, setColor] = useState("black");
  return (
 <div className='w-full h-screen duration-200' 
 style={{backgroundColor:color}}>
   <p className='flex justify-center py-5 px-3 text-white'><span style={{backgroundColor:"red"}} className='rounded-full px-3 py-2'>Hello Bhoraj Malla</span></p>
  <div className="fixed flex flex-wrap justify-center bottom-24 inset-x-0 px-2">
    <div className="flex flex-wrap justify-center gap-4 bg-white 
     shadow-lg py-2 px-4 rounded-full">
       <button onClick={() => setColor("red")}
       className='outline-none text-white px-5 py-2 rounded-full shadow-md'
       style={{backgroundColor: "red"}}
       >Red</button>

       <button onClick={() => setColor("green")}
       className='outline-none text-white px-4 py-2 rounded-full shadow-md '
       style={{backgroundColor: "Green"}}
       >Green</button>

       <button onClick={() => setColor("yellow")}
       className='outline-none text-white px-4 py-2 rounded-full shadow-md '
       style={{backgroundColor: "yellow"}}
       >Yellow</button>

       <button onClick={() => setColor("black")}
       className='outline-none text-white px-4 py-2 rounded-full shadow-md '
       style={{backgroundColor: "black"}}
       >Black</button> 

       <button onClick={() => setColor("purple")}
       className='outline-none text-white px-4 py-2 rounded-full shadow-md '
       style={{backgroundColor: "purple"}}
       >Purle</button>
    </div>
  </div>
 </div>
  )
}   

export default App
