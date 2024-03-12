import React from "react";

function Resource() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center p-4 overflow-hidden">
      <div className="boxResource1 p-4">
        <img
          className="rounded-full justify-center"
          src="./girl.png"
          width="200"
          height="200"
          alt="Girl"
        />
        <p>
          "We regard the Rishus Infotech team as co-founders in our business.
          The entire team from The Software House has invested an incredible
          amount of time to truly understand our business, our users and their
          needs."
        </p>
      </div>
      <div className="boxResource p-4">
        <h1>What would you like to do?</h1>
        <form className="mt-4">
          <input className="input mb-2" type="text" placeholder="Full Name" />
          <input
            className="input mb-2"
            type="text"
            placeholder="Email Address"
          />
          <input
            className="input mb-2"
            type="text"
            placeholder="Contact Number"
          />
          <input
            className="input mb-2"
            type="text"
            placeholder="Where did you hear about us?"
          />
          <textarea
            className="input h-32 mb-2 resize-none"
            placeholder="Tell us about your project or the challenge you have*"
          ></textarea>
          <button className="btn text-[20px] bg-green-500 text-white px-3 py-1 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Resource;
