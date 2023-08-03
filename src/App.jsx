import {useState} from 'react'
import './App.css'
import { FaBackspace } from 'react-icons/fa';


function App() {
  const [input , setInput] = useState("")
  const [outPut, setOutput] = useState("0")


const handleRemove = () => {

  setInput(input.slice(0,-1))
  setOutput("0")
}



const handleClick = () => {
  for(let i = 0; i < input.length; i++){
    if(input[i]  === "=" || "&" || "^" ||  "%" || "$" || "#" || "@" || "!" || "~" ){
      setOutput("invalid input")
    }
      setOutput(eval(input))

}
console.log("OUTPUT:",outPut)
}
const handleClear = () => {
  setOutput("0")
  setInput("")
}
const handleOne = (e) => {
  setInput(input.concat(e))
}

  return (
    <div className='h-[700px] flex flex-col justify-center items-center text-white bg-[#dfe6e9]'>
    <div className='w-[350px] border border-black p-5 rounded-lg shadow-2xl bg-[#2d3436]'>

    <div className='flex flex-col justify-center items-center '>

      <input type='text' className='rounded-t-lg p-2  h-[60px] w-[300px] bg-[#636e72] border border-black text-end text-3xl' value={input} onChange={e => setInput(e.target.value)} />
      <p className='rounded-b-lg m-1 h-[40px] w-[300px] border border-black  p-2 text-2xl flex justify-end items-center'>{outPut}</p>
    </div>


      <div className='grid grid-cols-4'>


      <button className='border m-1 p-2 bg-[#636e72] rounded' onClick={handleClear}>AC  </button>
      <button className='border m-1 p-2 bg-[#636e72] rounded' onClick={handleClear}> RESET  </button>
      <button className='border m-1 p-2 flex justify-center items-center bg-[#636e72] rounded' onClick={handleRemove}><FaBackspace/></button>
      <button className='border m-1 p-2 bg-[#636e72] rounded' value="/"  onClick={e => handleOne(e.target.value)}>/</button>


      <button className='border m-1 p-2 rounded' value="1" onClick={e => handleOne(e.target.value)} >1</button>
      <button className='border m-1 p-2 rounded' value="2" onClick={e => handleOne(e.target.value)} >2</button>
      <button className='border m-1 p-2 rounded' value="3" onClick={e => handleOne(e.target.value)} >3</button>
      <button className='border m-1 p-2 bg-[#636e72] rounded' value="*" onClick={e => handleOne(e.target.value)} >*</button>


      <button className='border m-1 p-2 rounded' value="4" onClick={e => handleOne(e.target.value)} >4</button>
      <button className='border m-1 p-2 rounded' value="5" onClick={e => handleOne(e.target.value)} >5</button>
      <button className='border m-1 p-2 rounded' value="6" onClick={e => handleOne(e.target.value)} >6</button>
      <button className='border m-1 p-2 bg-[#636e72] rounded' value="-" onClick={e => handleOne(e.target.value)} >-</button>


      <button className='border m-1 p-2 rounded' value="7" onClick={e => handleOne(e.target.value)} >7</button>
      <button className='border m-1 p-2 rounded' value="8" onClick={e => handleOne(e.target.value)} >8</button>
      <button className='border m-1 p-2 rounded' value="9" onClick={e => handleOne(e.target.value)} >9</button>
      <button className='border m-1 p-2 bg-[#636e72] rounded' value="+" onClick={e => handleOne(e.target.value)} >+</button>



      <button className='border m-1 p-2 rounded' value="0" onClick={e => handleOne(e.target.value)} >0</button>
      <button className='border m-1 p-2 rounded' value="00" onClick={e => handleOne(e.target.value)} >00</button>
      <button className='border m-1 p-2 rounded' value="." onClick={e => handleOne(e.target.value)} >.</button>
      <button className='border m-1 p-2 bg-[#6c5ce7] rounded' onClick={handleClick}>=</button>


      </div>
      </div>

    </div>
  )
}

export default App
