function Navbar() {
  return (
    <div className=" bg-gradient-to-r from-[#342447] to-blue-500  h-[150px] w-[100vw] flex flex-row font-semibold text-2xl text-white p-12 fixed z-50">
      <img src="../../public/pic/cv02.png" className="h-[80px] ml-[100px] " />
      <h1 className="text-4xl ml-4 mt-3 w-[300px]">My Profile</h1>
      <div className="flex flex-row ml-[500px]  mt-3 justify-evenly w-[1000px] ">
        <h1>About Me</h1>
        <h1>Project</h1>
        <h1>Contact</h1>
        <h1>Resume</h1>
      </div>
    </div>
  );
}

export default Navbar;
