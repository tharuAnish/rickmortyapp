import './charactercard.style.css'


const CharacterCard=({data})=>{
  return (
        <div className="characterCard">  
                <img src={data.image} alt={data.name+' Photo'} />
                <div className='rightSide'>
                 <p>{data.name}</p>
                <p>Status : {data.status}</p>
                <p>Species : {data.species}</p>
                <p>Gender : {data.gender}</p>
                </div>
              
            </div>
    )
}

export default CharacterCard