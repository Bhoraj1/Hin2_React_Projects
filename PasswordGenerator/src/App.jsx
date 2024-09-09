import { useState,useCallback,useEffect,useRef} from 'react'
import './App.css'

function App() {
 const [length, setLength] = useState(6);
 const [nbrAllowed, setNbrAllowed] = useState(false);
 const [chrAllowed, setChrAllowed] = useState(false);
 const [password, setPassword] =useState("");

 //useRef hook
 const passwordRef = useRef(null);

 const passwordGenerator = useCallback(()=> {
  let pass = ""
  let str = 
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(nbrAllowed) str += "1234567890"
  if(chrAllowed) str += "!@#$%^&*()_+-={}[]|\\:;"
  for(let i= 0; i < length; i++){
  let char = Math.floor(Math.random()*str.length)
  pass += str.charAt(char)
  }
  setPassword(pass)

 } ,[length,nbrAllowed,chrAllowed, setPassword])

 const CopyPassword = useCallback(()=> {
  passwordRef.current?.select();
  // passwordRef.current?.setSelectionRange(0,8);
 window.navigator.clipboard.writeText(password);
 },[password])

 useEffect(() => {
  passwordGenerator ();
 } ,[length,nbrAllowed,chrAllowed,passwordGenerator])

 const EventHandler = (e) =>{
  setLength(e.target.value);
 }

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg
     px-4 py-6 my-8 text-rose-600 text-lg bg-gray-800 '> <strong className='fw-bold text-3xl'> Password Generator</strong>

     <div className="flex shadow rounded-lg overflow-hidden mb-3 mt-3">
      <input type="text"
      value={password}
      className='outline-none w-full py-2 px-3'
      placeholder='Password'
      readOnly
      ref={passwordRef}
      />
      <button 
      onClick={CopyPassword}
      className='rounded-xl text-white bg-blue-700 px-4 ml-1'
      >Copy</button>
      
     </div>
     <div className='flex gap-x-2 text-lg text-orange-600 '>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={50}
        value={length}
        className='cursor-pointer'
        onChange={EventHandler}
        />
        <label>Length:{length}</label>
      </div>
      <div className=' flex items-center text-lg rounded-xl gap-x-1'>
        <input 
        type="checkbox" 
        defaultChecked = {nbrAllowed}
        onChange={() => {
        setNbrAllowed((prev) => !prev);
        }}
        />
        <label>Number</label>
      </div>
      <div className=' flex items-center text-lg rounded-xl gap-x-1'>
        <input 
        type="checkbox" 
        defaultChecked = {chrAllowed}
        onChange={() => {
        setChrAllowed((prev) => !prev);
        }}
        />
        <label>Characters</label>
      </div>
     </div>
      
    </div>

  )
}

export default App
