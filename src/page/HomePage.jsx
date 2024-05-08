import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

function HomePage() {
  return (
    <div className="wrapper bg-[#070707] relative h-[800px]">
      <div className="first-container bg-gradient-to-b from-[#070707] to-[#dd7ab1] h-[300px] rounded-b-[70px] ">
        <img
          src="/pic/jj1.png"
          className=" relative z-10 top-[130px] left-[190px] h-[270px]"
        />

        <img
          src="/pic/rainbow.png"
          className=" relative z-10 left-[50px] bottom-[200px] h-[50px] animate-bounce"
        />
        <img
          src="/pic/star.png"
          className=" relative z-10 bottom-[230px] left-[320px] h-[50px] animate-spin"
        />
        <img
          src="/pic/heart.png"
          className=" relative  z-20 top-[50px] left-[10px] h-[60px] animate-bounce "
        />
        <img
          src="/pic/umbrella.png"
          className=" relative z-20 top-[50px] left-[320px] h-[50px] animate-bounce"
        />
        <img
          src="/pic/smile1.png"
          className=" relative z-10 top-[70px] left-[140px] h-[50px] animate-bounce"
        />
        <img
          src="/pic/jj2.png"
          className=" absolute z-10 top-[150px] left-[50px] h-[250px]"
        />
      </div>

      <div className="secound-container bg-gradient-to-t from-[#070707] to-[#dd7ab1] h-[400px] rounded-t-[70px] relative top-[50px] z-0">
        <Accordion
          allowToggle
          className="w-[270px] absolute left-[60px] top-[90px]  z-10"
        >
          <AccordionItem className="bg-[#d64783] rounded-md  border-2">
            <h2>
              <AccordionButton>
                <Box className=" text-2xl font-bold ml-10">Click here 👻</Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className="text-xl font-semibold">
              🌞มาลองคบกันไหมม?💚
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="curve bg-[#070707] h-[180px] w-[360px] absolute top-[220px] left-[10px] rounded-full z-0"></div>
    </div>
  );
}

export default HomePage;
