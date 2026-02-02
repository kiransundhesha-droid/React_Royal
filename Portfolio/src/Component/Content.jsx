import React from 'react'
import img from '../assets/Images/final23.jpg';
import img1 from '../assets/Images/rjmsnz19.jpg';
import img2 from '../assets/Images/rjms19.jpg';
import img3 from '../assets/Images/victorylap23.jpg';

const Content = () => {
  return (
    <div className='p'>
        <p>
           <b>Ravindra Jadeja is a premier Indian international cricketer and one of the world’s finest all-rounders, popularly known as <b><i><u>“The Rockstar” </u></i></b>for his energy and impact on the field. Since making his international debut in 2009, he has been a vital part of India’s success, especially in Test cricket, excelling as a left-arm orthodox spinner, a dependable lower-order batsman, and an outstanding fielder. Born on December 6, 1988, in Gujarat,Jadeja made early headlines by becoming the first Indian to score three triple centuries in first-class cricket. <i>He was a key member of India’s ICC Champions Trophy–winning team in 2013 and later achieved the dream of lifting the T20 World Cup in 2024, after which he retired from T20 Internationals.</i><b> In the Indian Premier League, Jadeja has been a long-time pillar of the Chennai Super Kings, playing a crucial role in multiple title victories with his all-round performances, calmness under pressure, and match-winning contributions with both bat and ball. His trophy-laden career, sharp fielding, and ability to balance the team make Ravindra Jadeja one of the most dependable and influential match-winners in Indian cricket.</b></b>
 
        </p>
        <div className='images'>
          <img src={img} width={200} height={230}></img>
          <img src={img1}  width={200} height={230}></img>
          <img src={img2} width={200} height={230}></img>
          <img src={img3} width={200} height={230}></img>
        </div>

    </div>
  )
}

export default Content