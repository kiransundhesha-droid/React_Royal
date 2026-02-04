import React from 'react'
import { useParams } from 'react-router-dom'

const IplTeam = () => {
    const teamName = useParams().name;
    const wonTrophy = useParams().won;

    console.log(teamName);
  return (
    <h1>{teamName} is Playing... <br></br><hr></hr>
    wonTrophy  {wonTrophy}
    </h1>
  )
}

export default IplTeam