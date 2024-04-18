import React   from "react"
 import MyPhoto from "../../assets/Image/P1.JPG"
const About =() => {

    return (
       <div className=" py-16 ">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:item-centre lg:gap-12">
           <div className="md:1/3 lg:w-1/3 max-w-xl bg-white shadow-xl rounded-lg overflow-hidden mt-8">
            
           
                <img
                          src={ MyPhoto }
                          alt="image"
                      />
            </div>
            <div className="md:7/12 lg:w-9/12 flex-col">
                <h2 className="text-2xl text-black mt-3 font-bold md:text-4xl">   </h2>
                <div className="max-w-xl bg-white shadow-xl rounded-lg overflow-hidden mt-8">
                    <div className="px-4 py-2">
                         <h1 className="text-gray-900 font-bold text-2xl">Intoduction </h1>
                         <p className="text-gray-600 text-xl mt-1">Trying to Become a Creative  Full Stack Web Developer.

                            I took an academic pause (Bsc.) from Delhi university to pursue other opportunities.

                            I am currently enrolled in a B.Tech program specializing in Computer Science at Ajay 
                            Kumar Garg College (AKG).

                            Technology excites me and I always keep my eyes on the TechNews all over world.
                            Certain skills that I have worked with Include C & C++ programming , Web 
                            Development (HTML, CSS, NodeJs), Figma designing . And What I might lack in 
                            skills i make up for with my determination to learn.

                            Outside of tech , I have participate in many cultural Events held in Delhi University.

                            I Also have a one year government job Experience as a Gram panchayat data entry 
                            operator.</p>
                    </div>
                </div>
            
                 
            </div>
        </div>
        </div>
        </div>
    )
}

export default About;