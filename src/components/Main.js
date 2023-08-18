import React from 'react'
import "./main.css"
const Main = () => {
    return (
        <>
            <main className='main'>
                <div className='main-text'>
                    <h1>YOUR FEET DESERVE THE BEST</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, nulla temporibus tempore fuga voluptates culpa pariatur sapiente ullam impedit adipisci rerum odio ea esse quo repellat. A hic doloribus ipsam!
                    </p>

                    <div className='main-btn'>
                        <button className='btn btn-warning m-2'>Shop Now</button>
                        <button className='btn btn-light' id='btn1'>Cetegory</button>
                    </div>
                    <div className='shopping'><p>Available On</p>
                        <div className='icons'>
                            <img src="/images/flipkart.png" alt="flip-logo" />
                            <img src="/images/amazon.png" alt="flip-logo" />
                        </div>
                    </div>
                </div>
                <div className='image'><img src="/images/hero-image.png" alt="hero" /></div>

            </main>

        </>


    )
}

export default Main
