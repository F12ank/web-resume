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
          className=" relative z-10 top-[50px] left-[140px] h-[300px]"
        />
        <img
          src="/pic/rainbow.png"
          className=" relative z-10 left-[50px] bottom-[250px] h-[50px] animate-bounce"
        />
        <img
          src="/pic/star.png"
          className=" relative z-10 bottom-[230px] left-[320px] h-[50px] animate-spin"
        />
        <img
          src="/pic/heart.png"
          className=" relative z-10 bottom-[20px] left-[30px] h-[50px] animate-bounce"
        />
        <img
          src="/pic/umbrella.png"
          className=" relative z-10 top-[50px] left-[340px] h-[50px] animate-bounce"
        />
        <img
          src="/pic/smile1.png"
          className=" relative z-10 top-[70px] left-[140px] h-[50px] animate-bounce"
        />
      </div>
      <div className="curve bg-[#070707] h-[200px] w-[250px] absolute top-[150px] left-[20%] rounded-t-full z-0"></div>
      <div className="secound-container bg-gradient-to-t from-[#070707] to-[#dd7ab1] h-[400px] rounded-t-[70px] relative top-[50px] ">
        <Accordion
          allowToggle
          className="w-[270px] absolute left-[80px] top-[100px]"
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
    </div>
  );
}

export default HomePage;
