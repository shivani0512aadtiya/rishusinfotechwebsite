import React from "react";
import "./services.css";
export default function Services() {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 bg-black bg-opacity-70 text-center flex flex-col justify-center px-4">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl">
            Our Services
          </h1>
          <p className="text-white text-lg md:text-xl">
            Home <span className="text-green-500">Services</span>
          </p>
          <p className="text-white text-lg md:text-xl px-4 md:px-8 lg:px-16 xl:px-24 overflow-y-auto">
            Our custom software solutions are meticulously designed to match
            your specific needs, empowering your business with tailored tools
            for enhanced efficiency and productivity. We specialize in
            cybersecurity services, offering comprehensive protection for your
            digital assets through advanced measures such as penetration
            testing, vulnerability assessment, and incident response to shield
            against evolving threats. Additionally, our cloud services elevate
            your business operations, facilitating seamless migration,
            architecture design, and management to harness the full capabilities
            of cloud technology for scalability and flexibility.
          </p>

          <div className="flex justify-center items-center md:pt-12 lg:pt-16">
            <div className="mr-8 md:mr-16 lg:mr-24">
              <img src="./HTML.png" width="190" height="190" />
            </div>
            <div className="mr-8 md:mr-16 lg:mr-24">
              <img src="./CSS.png" width="190" height="190" />
            </div>
            <div className="mr-8 md:mr-16 lg:mr-24">
              <img src="./ANGULAR.png" width="150" height="150" />
            </div>
            <div className="mr-8 md:mr-16 lg:mr-24">
              <img src="./logo192.png" width="150" height="150" />
            </div>
            <div className="mr-8 md:mr-16 lg:mr-24">
              <img src="./WORDPRESS.png" width="190" height="190" />
            </div>
          </div>
        </div>
        <img
          src="./services.jpg"
          alt="Background Image"
          className="w-full h-auto block"
        />
      </div><br/>
      <div className="flex justify-center flex-wrap md:justify-between md:px-8 lg:px-16 xl:px-24">
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <img
            src="./smartphone-visual.webp"
            alt="Mobile Application"
            width="200"
            height="200"
          />
          <h1 className="text-2xl font-bold">Mobile Application</h1>
          <p className="text-lg">
            Mobile applications are software programs designed to run on mobile
            devices such as smartphones and tablets. They enable users to
            perform various tasks, access information, and interact with digital
            services on the go.
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <img
            src="./slider2.webp"
            alt="Web Development"
            width="300"
            height="300"
          />
          <h1 className="text-2xl font-bold">Web Development</h1>
          <p className="text-lg">
            Web development involves creating and maintaining websites or web
            applications using programming languages, frameworks, and tools to
            deliver content and functionality over the internet.
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <img
            src="./services.jpg"
            alt="Digital Marketing"
            width="300"
            height="300"
          />
          <h1 className="text-2xl font-bold">Digital Marketing</h1>
          <p className="text-lg">
            Digital marketing is the strategic use of online channels such as
            social media, email, search engines, and websites to reach and
            engage with target audiences, promote products or services.
          </p>
        </div>
      </div>
    </>
  );
}
