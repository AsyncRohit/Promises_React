import axios from 'axios'
import React from 'react'


const App = () => {
  
  const getData=async()=>{
    const data= await axios.get('https://picsum.photos/v2/list')
    console.log(data.data);

  }
  return (
    <div className='p-10'>
      <button onClick={()=>{
        getData()
      }} className='bg-blue-400 px-4 py-2  outline-none text-xl text-white rounded-md'>Get Data</button>
    </div>
  )
}

export default App