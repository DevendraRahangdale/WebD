
import { useMemo, useState } from 'react'
import './App.css'

function App() {
 const [count,setCount]=useState(0);
 const [input,setInput]=useState(0);

 function expensivetask(num){
  console.log("inside expensive task");
  for(let i=0;i<=1000000000000;i++){}
  return num*2;
 }

  let doublevalue=  useMemo(()=> expensivetask(input),[input]);

  return (
    <>
      <div>
        <button onClick={()=>setCount(count+1)}>Increment</button>

        <div>
          count:{count}
        </div>

        <div>
          Double:{doublevalue}
        </div>

        <input type="number" placeholder='enter the number' 
        vlaue={input}
        onChange={(e)=>setInput.target.value}/>
      </div>
    </>
  )
}

export default App
