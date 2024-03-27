function Footer() {
  return (
    <div className=" bg-[#232142] h-[100px] w-[100vw] flex flex-row font-semibold text-2xl text-white p-6 ">
      <img src="../../public/pic/cv.png" className="h-[50px] ml-[100px]" />
      <h1 className="text-4xl ml-3">Frank</h1>
      <div className="flex flex-row ml-[600px] justify-evenly w-[600px] ">
        <h1>About Me</h1>
        <h1>Project</h1>
        <h1>Contact</h1>
        <h1>Resume</h1>
      </div>
    </div>
  );
}

export default Footer;
