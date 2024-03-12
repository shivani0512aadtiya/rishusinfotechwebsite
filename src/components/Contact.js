import React from "react";

export default function Contact() {
  return (

    <div className="p-0.5 align-center mt-10 mb-10 mx-auto flex flex-wrap justify-center items-start sm:items-center">
      <div className="mr-8">
        <span className="text-[limegreen] text-lg">&nbsp;HAVE QUESTIONS?</span>
        <br />
        <h1 className="text-5xl sm:text-6xl">Contact Us</h1>
        <div className="box2 mt-4">
          <p>
            Share the details of your project - like scope, timeframes, or
            business challenges you'd like to solve. Our team will carefully
            study them and we'll figure out the next move together.
          </p>
        </div>

        <span className="text-[limegreen] text-lg">&nbsp;Call Us</span>
        <br />
        <span className="text-xl">&nbsp;+91 9384746363</span>
        <br />
        <br />
        <span className="text-[limegreen] text-base">
          &nbsp;PROJECT INQUIRIES
        </span>
        <br />
        <span className="text-xl">&nbsp;Rishusinfotech@gmail.com</span>
        <br />
        <br />
        <span className="text-[limegreen] text-base">
          &nbsp;CAREER INQUIRIES
        </span>
        <br />
        <span className="text-xl">&nbsp;Rishusinfotech@gmail.com</span>
        <br />
        <br />
        <span className="text-[limegreen] text-base">&nbsp;VISIT Us</span>
        <br />
        <span className="text-xl">
          &nbsp;401 Sai Ram Plaza Mangal Nagar near by mata gujri ibus stop
        </span>
      </div>
      
      <div className="box3">
        <h1>Exploring a project idea?</h1>
    
        <form>
          <input className="input" type="text" placeholder="First Name" />
          <input className="input" type="text" placeholder="Last Name" />

          <input className="input" type="text" placeholder="Email Address" />
          <input className="input" type="text" placeholder="Contact Number" />
          <div>
            <input
              className="input"
              type="text"
              placeholder="Description"
              style={{
                width: "85%",
                height: "150px",
                border: "1px solid rgba(206, 212, 218, 0.8)",
                borderRadius: "1%",
                padding: "10px",
              }}
            />
          </div>
          <br />
          <button className="btn text-[20px] bg-green-500 text-white px-3 py-1 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
