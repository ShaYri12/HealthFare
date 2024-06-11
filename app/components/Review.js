import React from 'react'
import '../styles/review.css'

const Review = () => {
  return (
    <div className='review'>
        <h3>Excellent</h3>
        <div className='stars'>
            <img src="/assets/star.png" alt="star"/>
            <img src="/assets/star.png" alt="star"/>
            <img src="/assets/star.png" alt="star"/>
            <img src="/assets/star.png" alt="star"/>
            <img src="/assets/star.png" alt="star"/>
        </div>
        <p>Based on <b>456 reviews</b></p>
        <div className='trustpilot'>
            <img src="/assets/star-trustpilot.svg" alt="trust"/> Trustpilot
        </div>
    </div>
  )
}

export default Review