function Footer() {
  return (
    <div className=" bg-[#232142]  w-[100vw] flex flex-col font-semibold text-2xl text-white p-6 items-start">
      <div className="contact-container flex flex-row">
        <h1 className="text-5xl ml-[150px] text-right">Contact Me</h1>
        <div className=" bg-slate-500 w-2 h-[200px] m-2 ml-5"></div>
        <div className="flex flex-col ml-[10px] justify-evenly w-[600px]  h-[200px]">
          <div className="flex flex-row  items-center w-[400px]">
            <img src="../../public/pic/phone.png" className="h-[50px] mr-4" />
            <h1>Phone : 093-419-7483</h1>
          </div>
          <div className="flex flex-row  items-center w-[450px]">
            <img
              src="../../public/pic/facebook02.png"
              className="h-[55px] mr-3"
            />
            <a href="https://www.facebook.com/theerapat.inthong" target="blank">
              Facebook : Frank Tangtongkun
            </a>
          </div>
          <div className="flex flex-row  items-center w-[400px]">
            <img
              src="../../public/pic/instagram.png"
              className="h-[50px] mr-4"
            />
            <a href="https://www.instagram.com/?hl=th" target="blank">
              Instagram : F12ank__
            </a>
          </div>
        </div>
        <div className="flex flex-col ml-[10px] justify-evenly w-[500px]  h-[200px]">
          <div className="flex flex-row  items-center w-[500px]">
            <img
              src="../../public/pic/linkedin.png"
              className="h-[55px] mr-3"
            />
            <a
              href="https://www.linkedin.com/in/nattawat-tangtongkun-182b372a8/"
              target="blank"
            >
              Linkedin : Nattawat Tangtongkun
            </a>
          </div>
          <div className="flex flex-row  items-center w-[500px]">
            <img src="../../public/pic/github.png" className="h-[50px] mr-4" />
            <a href="https://github.com/F12ank" target="blank">
              Github : F12ank
            </a>
          </div>
          <div className="flex flex-row  items-center w-[500px]">
            <img src="../../public/pic/email.png" className="h-[50px] mr-4" />
            <h1>Email : Frank.nattawat@hotmail.com</h1>
          </div>
        </div>
      </div>
      <div className="address-container flex flex-row mt-10">
        <h1 className="text-5xl ml-[207px] mt-[5px] text-right">Address</h1>
        <div className=" bg-slate-500 w-2 h-[100px] m-2 ml-5"></div>
        <div className="flex flex-row  w-[500px] ml-[10px] mt-3">
          <img
            src="../../public/pic/location02.png"
            className="h-[50px] mr-4"
          />

          <h1 className="mt-2">Satuek, Buriram 31150</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
