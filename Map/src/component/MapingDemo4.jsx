import React from 'react'

const MapingDemo4 = () => {

    let Players=[ 
        {no:1,name:"MSD",age:44,totalruns:17000,trophies:8, totalmatch:538 },
        {no:2,name:"VK",age:37,totalruns:28000,trophies:6, totalmatch:559},
        {no:3,name:"RS",age:38,totalruns:11000,trophies:3, totalmatch:508},
        {no:4,name:"SD",age:40,totalruns:15000,trophies:2, totalmatch:380 },
        {no:5,name:"RJ",age:37,totalruns:8000,trophies:4, totalmatch:350},
       
        
    ]


  return (
    <>
    <center>
        <h1>Players</h1>
        <table border={2}>
            <tr>
                <th>No</th>
                <th>Name</th>
                <th>Age</th>
                <th>TotalRuns</th>
                <th>Trophies</th>
                <th>TotalMatch</th>
            </tr>

            {
                Players.map((Players)=>{
                    return (
                        <tbody style={{ backgroundColor:"#"}}>


                        <tr>
                            <td >{Players.no}</td>
                            <td>{Players.name}</td>
                            <td>{Players.age}</td>
                            <td style={{color:"black",backgroundColor:Players.totalruns >15000?
                        "green": Players.totalruns ===15000?
                        "yellow"
                        :"red"}}>{Players.totalruns}</td>
                            <td>{Players.trophies}</td>
                            <td>{Players.totalmatch}</td>
                        </tr>
                        </tbody>
                    )
                })
            }

        </table>
    </center>
    </>
  )
}

export default MapingDemo4