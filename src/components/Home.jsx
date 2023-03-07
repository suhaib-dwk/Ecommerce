import React from 'react'
import background from '../assets/background1.jpg'

const Home = () => {
    return (
        <div className='hero'>
            <div class="card text-bg-dark border-0">
                <img src={background} class="card-img" alt="background" width="250px" height="550px"/>
                <div class="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 class="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                        <p class="card-text lead fs-2">
                            CHECK OUT ALL THE TRENDS
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home