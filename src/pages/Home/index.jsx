import { useEffect,useState } from 'react'
import CharacterCard from '../../component/CharacterCard'
import './home.style.css'

const Home=()=>{
//States
const [characterData,setCharacterData]=useState([])
const [isLoading,setIsLoading]=useState(false)


const fetchCharacterr=async ()=>{
    const json=await fetch("https://rickandmortyapi.com/api/character");
    const data=await json.json()
    setCharacterData(data.results)
}

//    Sideeffect
useEffect(()=>{
   fetchCharacterr()
},[])


    return <div className="wrapper">
        <h1>Lists Of Character</h1>
        <div className="characterWrapper">
        { characterData.length ? characterData.map((item,i)=>
            <CharacterCard key={i} data={item} isLoading={isLoading}/>
            )  : 
            <h1>Loading..</h1>
            }
    </div>
         
    </div>
}


export default Home