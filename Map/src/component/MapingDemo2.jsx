import React from 'react'

const MapingDemo2 = () => {
   
   let cars=[
        {No:1,BrandName:"Tata",CarName:"Harrier",Price:28.63},
                {No:2,BrandName:"Totoyo",CarName:"Fortuner",Price:50.40},
                {No:3,BrandName:"Hyundai",CarName:"Verna",Price:19.20},
                {No:4,BrandName:"Mahindra",CarName:"Thar",Price:18.10},
                {No:5,BrandName:"Suzuki",CarName:"Ertiga",Price:18.10},
]
    
  return (
  <>
  <center>
    <h1  >Cars</h1>
    <table border={2} width={1000} >
      <tr>
        <th>No</th>
        <th>BrandName</th>
        <th>CarName</th>
        <th>Price</th>      
       
      </tr>
    {
      cars.map((cars)=>{
        return (
          <tr>
              <td>{cars.No}</td>
              <td>{cars.BrandName}</td>
              <td>{cars.CarName}</td>
              <td style={{color:"white",backgroundColor:(cars.Price < 20) ? "red" :"blue"}}>{cars.Price}Lakh</td>
              
            </tr>
        )
      })
    }
    </table>
    </center>
  </>
  )
}

export default MapingDemo2