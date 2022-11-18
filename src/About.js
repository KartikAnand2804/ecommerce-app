import React from 'react'

const About = () => {
  return (
    <div className="container" class="h-screen p-2.5 flex">
        <div className="person" class="block justify-center p-2.5 h-fit border-4">
            <div className="image" class="m-4">
                <img class="w-full h-2/5" src="https://avatars.githubusercontent.com/u/84150500?v=4" alt=""></img>
            </div>
            <div className="name" class="m-4">
                <h3>Kartik Anand</h3>
            </div>

            <div className="description-role" class="content-center">
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            </div>

            <div className="social-links" class="content-center text-center italic">
                links
            </div>
        </div>
    </div>
    
  )
}

export default About