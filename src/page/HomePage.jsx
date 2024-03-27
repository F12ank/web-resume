import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

function HomePage() {
  return (
    <div className="wrapper bg-[#232142] relative">
      <Navbar />
      <div className="first-container bg-gradient-to-r from-[#232142] to-blue-500 h-[500px] rounded-br-[150px] ">
        <img
          src="../../public/pic/frank.png"
          className=" relative z-10 top-[100px] left-[100px] h-[500px]"
        />
      </div>
      <div className="curve bg-[#232142] h-[300px] w-[30%] absolute top-[250px] left-[50px] rounded-t-full z-0"></div>
      <div className="secound-container bg-gradient-to-r from-blue-500 to-[#232142be] h-[600px] rounded-br-[200px] rounded-tl-[200px] relative top-[100px] "></div>
      <div className="thrid-container bg-gradient-to-r from-[#232142be] to-blue-500  h-[600px]  rounded-tr-[200px] mt-[200px]"></div>
      <Footer />
    </div>
  );
}

export default HomePage;
