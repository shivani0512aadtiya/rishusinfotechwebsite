import React, { useEffect, useState } from "react";
import "./services.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [first, setfirst] = useState(" ");

  const navigate = useNavigate();

  const ChangeByNAvigate = () => {
    navigate("/contact");
  };

  const ShowText = () => {
    const sentence = "Welcome to Rishus Infotech Gate Way to Online Business";
    const words = sentence.split(" ");
    // Map through the words array and set each word after a certain delay
    words.forEach((word, index) => {
      setTimeout(() => {
        setfirst((prevText) => prevText + word + " ");
      }, index * 1000); // Adjust the delay as needed
    });
  };

  useEffect(() => {
    ShowText();
  }, []);

  const [selectedItem, setSelectedItem] = useState("Frontend Developer");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="flex-col">
      <video autoPlay muted loop className="video">
        <source
          src="/pexels-yunus-tuğ-19843219 (Original).mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="w-full h-full">
        <div className="box1 w-full h-full flex items-center justify-center">
          <div className="box text-center">
            <span className="highlight">{first}</span>
            <span className="text-lg">
              Get to know us and learn why clients trust us as their preferred
              IT partner for all their technology needs.
            </span>

            <div className="mt-4">
              <button className="btn bg-yellow-400 text-black py-2 px-4 rounded">
                Click Here
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="ourservices marg">
  <div className="flex flex-wrap gap-x-6 gap-y-6">
    <div className="md:w-1/2 lg:w-1/3">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
        Our Services
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl">
        We focus on our strengths: generating innovative ideas, creating
        exceptional products, and delivering them to our customers through
        the power of the internet.
      </p>
    </div>

    <div className="w-[400px] bg-gray-200 rounded-lg overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
      <p className="p-4">
        <h1 className="flex">
          <img
            src="./2527959_coding_development_html_php_programming_icon.png"
            alt="Web Development Icon"
            className="w-16 h-16 mb-4"
          />
                  <span class="text-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
  Web Development
</span>
        </h1>
        Web development involves creating websites and web applications
        using languages like HTML, CSS, and JavaScript. Developers use
        frameworks like React and Node.js to build dynamic and interactive
        experiences. It's a field that requires continuous learning and
        adaptation to new technologies.
      </p>
    </div>

    <div className="w-[400px] bg-gray-200 rounded-lg overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
      <p className="p-4">
        <h1 className="flex">
          <img
            src="./5724956_app_follow_mobile_news_read_icon.png"
            alt="Mobile Development Icon"
            className="w-16 h-16 mb-4"
          />
                 <span class="text-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
  Mobile Development
</span>
        </h1>
        Mobile application development focuses on creating software
        applications for smartphones and tablets. It involves platforms
        like iOS and Android, using languages like Swift, Java, or Kotlin.
        Cross-platform tools such as React Native and Flutter enable
        developers to build apps for multiple platforms simultaneously.
        Mobile apps range from simple utilities to complex enterprise
        solutions, catering to diverse user needs.
      </p>
    </div>
  </div>
  <br />
  <div className="flex flex-wrap gap-x-6 gap-y-6 justify-end">
    <div className="w-[400px] bg-gray-200 rounded-lg overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
      <p className="p-4">
        <h1 className="flex">
          <img
            src="./computer.png"
            alt="Game Development Icon"
            className="w-16 h-16 mb-4"
          />
                 <span class="text-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
  Game Development
</span>
        </h1>
        Game development is the process of creating interactive
        experiences for players. It involves programming, art, design, and
        sound engineering skills. Developers use game engines like Unity
        or Unreal Engine to build games, which can be played on various
        platforms. Game development includes disciplines such as game
        design, level design, character modeling, animation, and audio
        production.
      </p>
    </div>
    <div className="w-[400px] bg-gray-200 rounded-lg overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
      <p className="p-4">
        <h1 className="flex ">
          <img
            src="./Graphic-Designing1.jpg"
            alt="Graphic Development Icon"
            className="w-16 h-16 mb-4"
          />
          <span class="text-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
  Graphic Development
</span>

        </h1>
        Graphic design is the visual communication of ideas and messages.
        It involves typography, imagery, color theory, and layout
        principles. Designers use software like Adobe Photoshop and
        Illustrator to create content for branding, marketing, and digital
        media. They shape the visual identity of businesses through logos,
        advertisements, and website interfaces, ensuring effective
        communication with the target audience.
      </p>
    </div>
  </div>
</div>

      <div className="text-center py-8 text-5xl justify-center">
        <h1>Boosting Your Business Success</h1>
        <span className="font-normal text-lg mx-8">
          We excel in crafting web and mobile solutions tailored to address
          intricate business hurdles, all the while ensuring an unparalleled
          user experience that users delight in using regularly. Our expertise
          spans across web development, app creation, graphic design, e-commerce
          solutions, Google and Facebook advertising, and gaming development.
        </span>
      </div>
      <div className="relative justify-center">
  <img
    className="rounded-md w-full object-contain sm:h-auto md:h-auto"
    src="./slider2.webp"
    alt="Slider Image"
  />
  <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white p-8 absolute-content">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl lg:text-4xl mb-4">
        Transforming Businesses with Innovative IT Solutions
      </h2>
      <p className="text-base lg:text-lg mb-4">
        Welcome to Rishus Infotech IT Solutions, your gateway to digital excellence.
        We specialize in delivering cutting-edge IT solutions tailored to
        meet your unique business needs.
      </p>
      <p className="text-base lg:text-lg">
        From web development to cybersecurity, our team of experts is here
        to propel your business forward in the digital age.
      </p>
    </div>
  </div>
</div>

      <h1 className="text-orange-500 mt-8 lg:mt-12 text-center text-2xl lg:text-4xl">
        TECHNOLOGY STACK
        <br /> <span className="text-black text-lg">Tech We Love</span>
      </h1>
      (
      <div className="text-center">
        <nav className="text-xl font-semibold">
          <ul className="nav-ul-li flex flex-wrap justify-center lg:justify-start lg:space-x-8">
            <li
              className={`${
                selectedItem === "Frontend Developer" ? "active" : ""
              } cursor-pointer mb-2 lg:mb-0`}
              onClick={() => handleItemClick("Frontend Developer")}
            >
              Frontend Developer
            </li>
            <li
              className={`${
                selectedItem === "Backend Developer" ? "active" : ""
              } cursor-pointer mb-2 lg:mb-0`}
              onClick={() => handleItemClick("Backend Developer")}
            >
              Backend Developer
            </li>
            <li
              className={`${
                selectedItem === "App Development" ? "active" : ""
              } cursor-pointer mb-2 lg:mb-0`}
              onClick={() => handleItemClick("App Development")}
            >
              App Development
            </li>
            <li
              className={`${
                selectedItem === "Gaming Development" ? "active" : ""
              } cursor-pointer mb-2 lg:mb-0`}
              onClick={() => handleItemClick("Gaming Development")}
            >
              Gaming Development
            </li>
          </ul>
        </nav>

        <div className="mt-6">
          {selectedItem === "Frontend Developer" && (
            <div className="flex justify-center flex-wrap gap-4">
              <img
                src="./ANGULAR.png"
                width="155"
                height="155"
                alt="Angular Logo"
              />
              <img
                src="./logo192.png"
                width="140"
                height="140"
                alt="Angular Logo"
              />
              <img src="./HTML.png" width="155" height="155" alt="HTML Logo" />
              <img src="./CSS.png" width="155" height="155" alt="CSS Logo" />
              <img
                src="./Figma.png"
                width="155"
                height="155"
                alt="Figma Logo"
              />
              <img
                src="./WORDPRESS.png"
                width="150"
                height="150"
                alt="Wordpress Logo"
              />
            </div>
          )}
          {selectedItem === "Backend Developer" && (
            <div className="flex justify-center flex-wrap gap-4">
              <img src="./php.png" width="150" height="150" alt="PHP Logo" />
              <img
                src="./python.png"
                width="100"
                height="110"
                alt="Python Logo"
              />
              <img
                src="./java (1).png"
                width="120"
                height="120"
                alt="Java Logo"
              />
              <img
                src="./software.png"
                width="120"
                height="120"
                alt="Software Logo"
              />
            </div>
          )}
          {selectedItem === "App Development" && (
            <div className="flex justify-center flex-wrap gap-4">
              <img
                src="./apple.png"
                width="100"
                height="100"
                alt="Apple Logo"
              />
              <img
                src="./android.png"
                width="95"
                height="95"
                alt="Android Logo"
              />
              <img src="./swift.png" width="90" height="95" alt="Swift Logo" />
              <img
                src="./logo192.png"
                width="100"
                height="100"
                alt="React Logo"
              />
            </div>
          )}
          {selectedItem === "Gaming Development" && (
            <div className="flex justify-center flex-wrap gap-4">
              <img
                src="./computer.png"
                width="100"
                height="100"
                alt="Computer Logo"
              />
              <img
                src="./apple.png"
                width="100"
                height="100"
                alt="Apple Logo"
              />
            </div>
          )}
        </div>
      </div>
      <br />
      <br />
      <br />
      <h1 className="text-center text-3xl lg:text-5xl">
        Innovate Together, Succeed Together: Our Team's Promise
      </h1>
      <br />
      <br />
      <br />
      <div className="flex flex-col lg:flex-row justify-center items-center px-4 lg:px-20 lg:text-lg">
        <img
          src="./pexels-fox-1595385 (1).jpg"
          width="500"
          className="mb-4 lg:mr-8 lg:mb-0"
          alt="Teamwork"
        />
        <p className="text-center lg:text-left">
          From brainstorming sessions to project implementations, our teamwork
          is the cornerstone of our success. We foster an environment where
          communication flows freely, ideas are shared enthusiastically, and
          every voice is valued. This inclusive approach not only enhances
          creativity but also fosters a sense of belonging and ownership among
          team members. As you embark on your journey with us, rest assured that
          you'll be joining a team that thrives on collaboration and mutual
          support. Together, let's turn challenges into opportunities, and
          dreams into reality. With [Your Company Name], the possibilities are
          endless when we work together. Join us, and experience the
          transformative power of teamwork firsthand. Together, let's build a
          brighter future, one collaboration at a time.
        </p>
      </div>
      <br />
      <br />
      <br />
      <div className="flex flex-col lg:flex-row justify-center items-center px-4 lg:px-20 lg:text-lg">
        <p className="lg:mr-8 lg:pl-8 lg:border-l lg:border-gray-400 lg:mt-0">
          At [Rishus Infotech], we believe in the power of teamwork. 🚀 Our
          collaborative spirit drives us to new heights every day, as we combine
          our diverse talents and expertise to tackle challenges head-on and
          achieve remarkable results. In this image, witness the essence of our
          teamwork in action. Each member of our team plays a crucial role,
          contributing their unique skills and perspectives to the collective
          effort. Together, we are more than just a group of individuals – we
          are a unified force dedicated to delivering excellence in every
          project we undertake.
        </p>
        <img
          src="./pexels-fauxels-3184291.jpg"
          width="500"
          className="flex-shrink-0 mt-4 lg:mt-0 lg:ml-8 lg:pr-8 lg:border-r lg:border-gray-400"
          alt="Teamwork"
        />
      </div>
      <br />
      <br />
      <br />
      <div className="talkbox lg:pl-20">
        <h1 className="text-white text-2xl lg:text-5xl px-4 py-6">
          Looking to discuss your project? Let's kick things off!
        </h1>
        <span className="text-black text-lg lg:text-xl px-4 py-1">
          Contact us now, and we'll initiate work within 48 hours.
        </span>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-1"
          onClick={ChangeByNAvigate}
        >
          Let's Talk
        </button>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
export default Home;
