import React from 'react'
import { Link, Links } from 'react-router-dom'

const Movies = () => {

    let movies=[

        {movieId:1,movieName:"Kalki"},
        {movieId:2,movieName:"Hit"},
        {movieId:3,movieName:"Kill"}
    ]
    
  return (<>
    
    <div style={{textAlign:"center"}}>
        <h1>movies</h1>


    {
        movies.map((movies)=>
            {
                return <li>
           <Link to={`/watch/${movies.movieName}`} >{movies.movieName}</Link>
            </li>
        })
        
    }

    </div>
   
    </>
  )
}

export default Movies