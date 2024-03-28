import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

function HomePage() {
  return (
    <div className="wrapper bg-[#342447] relative">
      <Navbar />
      <div className="first-container bg-gradient-to-r from-[#342447] to-blue-500 h-[600px] rounded-br-[150px] ">
        <img
          src="../../public/pic/frank02.png"
          className=" relative z-10 top-[200px] left-[100px] h-[500px]"
        />
      </div>
      <div className="curve bg-[#342447] h-[450px] w-[35%] absolute top-[250px] left-[0px] rounded-t-full z-0"></div>
      <div className="secound-container bg-gradient-to-r from-blue-500 to-[#342447] h-[600px] rounded-br-[200px] rounded-tl-[200px] relative top-[100px] "></div>
      <div className="thrid-container bg-gradient-to-r from-[#342447] to-blue-500  h-[600px]  rounded-tr-[200px] mt-[200px]"></div>
      <Footer />
    </div>
  );
}

export default HomePage;
