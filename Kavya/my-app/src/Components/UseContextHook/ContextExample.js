import React, { useContext } from 'react'
import MyContext from './MyContext'

const ContextExample = () => {

const {sharedData, setSharedData} = useContext(MyContext);
  return (
    <div className="box" style={
        sharedData.theme == "Dark"?{
        backgroundColor:"black"
        }:{backgroundColor:"white"}}>
        <button
        onClick={()=>{
            setSharedData({...sharedData, theme:"light"})
        }}
        >
            Light theme
        </button>

        <button
        onClick={()=>{
            setSharedData({...sharedData, theme:"Dark"})
        }}
        >
            Dark theme
        </button>



    </div>
  )
}

export default ContextExample