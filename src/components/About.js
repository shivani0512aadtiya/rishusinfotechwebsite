import React, { useEffect, useState } from "react";

function About() {
  const [technologies, setTechnologies] = useState([
    "React js",
    "Node js",
    "Gaming Development",
    "Mobile Application",
    "Java",
    "Next js",
    "Wordpress",
    "PhP",
    "Web Design",
  ]);
  const [currentTechnologyIndex, setCurrentTechnologyIndex] = useState(0);
  const [displayedTechnology, setDisplayedTechnology] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedTechnology(technologies[currentTechnologyIndex]);
      setCurrentTechnologyIndex(
        (prevIndex) => (prevIndex + 1) % technologies.length
      );
    }, 1000); // Adjust the delay as needed

    // Clear the interval when the component unmounts or when it loses focus
    window.addEventListener("blur", () => clearInterval(interval));
    return () => clearInterval(interval);
  }, [currentTechnologyIndex, technologies]);
  return (
    <>
      <div className="relative w-full h-screen flex items-center justify-center">
        <img
          src="./pexels-alena-darmel-7710118.jpg"
          alt="Background Image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-75 text-white p-6 rounded-lg">
          <p className="font-semibold text-lg md:text-xl lg:text-2xl">
            <span className="text-green">HOME</span>
            <span className="md:hidden lg:inline-block"> / ABOUT US</span>
          </p>
          <h1 className="text-2xl md:text-4xl lg:text-5xl mb-4">
            We're Service builders
          </h1>
          <p className="text-base md:text-lg lg:text-xl mx-4">
            Rishus Infotech is a young Services development company based in
            India. We do everything related to web and mobile app development
            and are extremely passionate about building world-class products.
          </p>
        </div>
      </div>

      <div className="text-center p-[45px] text-[23px]">
        <h1 className="font-bold text-[40px]">Technologies we use</h1>
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <span
            className="w-90 md:max-w-400 h-auto bg-black rounded-full p-2 mt-11 text-orange-500 text-[50px] font-bold"
            style={{
              // marginTop: "45px",
              // color: "orange",
              // fontSize: "50px",
              // fontWeight: "bold",
              fontFamily: "papins",
            }}
          >
            {displayedTechnology}
          </span>
          <br />
          {/* <img src="./logo192.png" /> */}
        </div>
      </div>
      <div class="container mx-auto flex flex-col items-center justify-center">
  <div class="p-4 text-center">
    <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Core Values</h1>
    <img src="./pexels-yan-krukau-8837438 (1).jpg" alt="Core Values" class="w-full md:max-w-lg lg:max-w-xl rounded-lg" />
  </div>
</div>

 
      <div className="container mx-auto flex flex-col items-center justify-center h-screen">

  <div className="w-full max-w-3xl bg-gray-200 bg-opacity-10 backdrop-blur-md text-black border border-gray-300 rounded-lg p-6">
  <h1 className="text-3xl md:text-4xl lg:text-5xl mb-8">About Us</h1>
    
    <p className="text-base md:text-lg lg:text-xl">
      As a leading software solutions development company, we are renowned
      for delivering exceptional products and custom app development
      services. Our team comprises top 1% talent in the IT industry,
      comprising highly skilled professionals with over 5+ years of domain
      expertise. Our distinct team of designers and developers follows
      industry-leading practices to develop innovative solutions that are
      futuristic and user-friendly. We are a fast-growing business that
      works with a diverse range of exciting clients across the globe,
      spanning various verticals. Our dream has always been to provide
      excellent solutions to our clients that can help them reduce costs
      and save time. Over the years, we have evolved into a prominent
      service provider in the software solutions industry, and we take
      great pride in our journey.
    </p>
  </div>
</div>


    </>
  );
}
export default About;
