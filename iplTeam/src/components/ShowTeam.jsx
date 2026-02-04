import React from 'react'
import {Link} from 'react-router-dom';
const ShowTeam = () => {
    const teams = [
        {
        name:"csk",
        wonTrophy:5
        },
        {
        name:"mi",
        wonTrophy:5
        },
        {
        name:"gt",
        wonTrophy:1
        },
        {
        name:"kkr",
        wonTrophy:3
        },
        {
        name:"rcb",
        wonTrophy:1
        },
        {
        name:"srh",
        wonTrophy:1
        },
        {
        name:"rr",
        wonTrophy:1
        },
        {
        name:"dc",
        wonTrophy:0
        },
        {
        name:"lsg",
        wonTrophy:0
        },
        {
        name:"pkbs",
        wonTrophy:0
        },
        
];
  return (
    <u>
        {teams.map((team)=>{
            return <li><Link to={`/iplteam/${team.name}/:${team.wonTrophy}`}>{team.name}</Link></li>
        })}
    </u>

  )
}

export default ShowTeam