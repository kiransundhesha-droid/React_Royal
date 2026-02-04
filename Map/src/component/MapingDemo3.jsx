import React from 'react'
import img1 from "../assets/ertiga.jpg"
import img2 from "../assets/fortuner.jpg"
import img3 from "../assets/harrier.jpg"
import img4 from "../assets/thar.jpg"
import img5 from "../assets/verna.jpg"

const MapingDemo3 = () => {

   let cars=[
        {No:1,BrandName:"Tata",CarName:"Harrier",Price:28.63,imgUrl:img3},
        {No:2,BrandName:"Totoyo",CarName:"Fortuner",Price:50.40,imgUrl:img2},
        {No:3,BrandName:"Hyundai",CarName:"Verna",Price:19.20,imgUrl:img5},
        {No:4,BrandName:"Mahindra",CarName:"Thar",Price:18.10,imgUrl:img4},
        {No:5,BrandName:"Suzuki",CarName:"Ertiga",Price:15.20,imgUrl:""},

   ]

  return (
    <>

<center>
    <h1>Cars</h1>
   <table border={2} width={1000} >
      <tr>
        <th>No</th>
        <th>BrandName</th>
        <th>CarName</th>
        <th>Price</th>
         <th>Image</th>      
        
      </tr>

  {
      cars.map((cars)=>{
        return (
            <tr>
              <td>{cars.No}</td>
              <td>{cars.BrandName}</td>
              <td>{cars.CarName}</td>
              <td style={{backgroundColor:(cars.Price < 20) ? "red" :"blue"}}>{cars.Price}Lakh</td>
              <td >{cars.imgUrl == "" ? <p> image Not Found</p>:<img src={cars.imgUrl} width={200} height={150} />}</td>

            </tr>
        )
      })
    }
    </table>
</center>
    </>
    
  )
}

export default MapingDemo3