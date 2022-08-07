import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";

//importing local components
import Layout from "../../../../../../components/Layout";
import Navbar from "../../../../../../components/Navbar";
import MaximaIconP from "../../../../../../public/maximaIconP.svg";
import MaximaIconP2 from "../../../../../../public/maximaIconP2.svg";

//importing chakra ui components
import { Box, Flex, Center, Heading, Text, Button, Stack, Img, Wrap, WrapItem, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react";

const OrganizationDesc: NextPage = () => {
  const router = useRouter();
  const organizationID = router.query.descriptionID;

  const capitalize = (s: any) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const Header = () => {
    return (
      <>
        <Center position={"absolute"} mt={["6rem", "6rem", "14rem", "14rem", "14rem"]} top={0} bottom={0} left={0} right={0}>
          <Box transform={["scale(0.6)", "scale(1.2)", "scale(1.2)", "scale(1.2)", "scale(1.5)"]} zIndex={"1"}>
            <Img src={`/organization/${organizationID}.png`} />
          </Box>
        </Center>
      </>
    );
  };

  const Body = () => {
    const organizationData = [
      {
        img: "/organization/umnDocumentation.png",
        title: "UMN Documentation",
      },
      {
        img: "/organization/campusVisit.png",
        title: "Campus Visit",
      },
      {
        img: "/organization/campusVisit.png",
        title: "Campus Visit",
      },
      {
        img: "/organization/umnDocumentation.png",
        title: "UMN Documentation",
      },
      {
        img: "/organization/campusVisit.png",
        title: "Campus Visit",
      },
      {
        img: "/organization/campusVisit.png",
        title: "Campus Visit",
      },
      {
        img: "/organization/umnDocumentation.png",
        title: "UMN Documentation",
      },
      {
        img: "/organization/campusVisit.png",
        title: "Campus Visit",
      },
      {
        img: "/organization/campusVisit.png",
        title: "Campus Visit",
      },
      {
        img: "/organization/umnDocumentation.png",
        title: "UMN Documentation",
      },
      {
        img: "/organization/campusVisit.png",
        title: "Campus Visit",
      },
      {
        img: "/organization/campusVisit.png",
        title: "Campus Visit",
      },

      {
        img: "/organization/campusVisit.png",
        title: "Campus Visit",
      },
      {
        img: "/organization/campusVisit.png",
        title: "Campus Visit",
      },
    ];
    return (
      <Center mt={["90vh", "185vh"]} mb={"15vh"} zIndex={"4"}>
        <Box w={["20em", "60em"]}>
          <Stack my={"3em"} direction={"column"} spacing={"3em"}>
            <Center>
              <Text textAlign={"center"} display={["none", "block"]} color={"#062D5F"} fontSize={["2xl"]} fontWeight={["black", "bold"]}>
                UMN Documentation
              </Text>
              <Text textAlign={"center"} display={["block", "none"]} color={"#062D5F"} fontSize={["2xl"]} fontWeight={["black", "bold"]}>
                UMN Documentation
              </Text>
            </Center>

            <Center>
              <Box w={["17em", "40em"]}>
                <Center w={"full"} h={["10em", "20em"]} mb={"4em"} bgColor={"#D9D9D9"} outline={"5px solid #FF6835"} borderRadius={"2xl"}>
                  <Center w={["4em", "5em"]} h={["4em", "5em"]} borderRadius={"full"} bgColor={"white"}></Center>
                </Center>
                <Text textAlign={"justify"}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium voluptatum ipsum expedita sunt beatae quo, atque molestiae, esse rem sapiente mollitia ab iste quisquam facere perferendis laborum nobis libero dicta
                  tenetur eum. Numquam eaque laudantium reprehenderit tenetur cupiditate hic ex omnis iure quam, natus error nulla minima? Nam nisi unde asperiores fugiat. Nesciunt quam laboriosam voluptatum iure doloribus architecto dicta
                  explicabo alias et, sint quo neque rerum? Quasi sed impedit, omnis cumque asperiores, quod aliquid assumenda hic fugit facilis earum maiores ab molestiae? Officia autem odio cum doloremque earum ullam accusantium
                  repellendus aliquam praesentium placeat cupiditate facilis dolorem pariatur veritatis, ad quo cumque minima voluptatem, quas et? Dolorem repellat quasi sint, accusamus officiis explicabo natus reprehenderit voluptas amet,
                  eos rerum id.
                  <br />
                  <br />
                  Error expedita quos laudantium veritatis corrupti, nisi officia cumque perspiciatis, possimus rem ducimus repellat quod quibusdam dolore pariatur delectus tenetur perferendis accusamus adipisci, necessitatibus laborum
                  deserunt repudiandae eveniet illum. Nobis dolorum accusantium eligendi, a repellat possimus cum quam quas culpa maiores laboriosam odio quidem nulla dicta similique voluptatibus odit, eos nemo perferendis! Voluptatum
                  aspernatur architecto nulla. Quam eos odit eum architecto consectetur perferendis repellat quidem similique exercitationem debitis a laboriosam possimus minus at saepe ad dolores nobis cupiditate, incidunt accusamus br
                  necessitatibus maxime ducimus esse numquam! Laborum delectus nam aspernatur quas vero, iusto natus aperiam accusamus, minus architecto repudiandae, rem possimus non cum ducimus cumque ad! Repellat maxime eveniet earum ex
                  rerum quis corrupti nihil aliquid tempora deserunt tempore fuga odit quibusdam nulla, iure architecto tenetur excepturi dignissimos sapiente dolorum? Quod autem fuga illum cupiditate qui deserunt, officia provident, a in
                  voluptatibus doloribus itaque quisquam consequuntur perspiciatis! Unde soluta consectetur error vitae hic harum quis quas sequi ullam enim! Repudiandae consectetur sequi ex debitis accusamus quasi recusandae aspernatur
                  quisquam alias doloribus adipisci qui quod exercitationem, reiciendis possimus cupiditate amet perspiciatis.
                </Text>
              </Box>
            </Center>
          </Stack>
          <Carousel>
            {[...new Array(CARDS)].map((_, i) => (
              <Card key={i} images={images[i]} />
            ))}
          </Carousel>
          <SocialMedia />
        </Box>
      </Center>
    );
  };

  const images = ["/organization/BEM/Bem2.png", "/organization/BEM/Bem1.png", "/organization/BEM/Bem3.png"];
  const CARDS = images.length;
  const MAX_VISIBILITY = 2;

  const Card = ({ images }: any) => (
    <Center>
      <Box w={"100%"} h={"100%"} padding={"2rem"} borderRadius={"1rem"} color={"grey"} textAlign={"justify"} transition={"all 0.3 ease-out"}>
        <Img src={images} shadow={"0px 8px 8px rgb(0,0,0,0.25)"} borderRadius={["2xl", "2.5em"]} />
      </Box>
    </Center>
  );

  const Carousel = ({ children }: any) => {
    const [active, setActive] = useState(1);
    const count = React.Children.count(children);
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
      const interval = setInterval(() => {
        setActive((active + 1) % count);
      }, 4000);
      return () => clearInterval(interval);
    }, [active, count]);

    return (
      <Box mt={"5em"}>
        <Center>
          <Text fontSize={"2xl"} color={"#062D5F"} fontWeight={"extrabold"}>
            Galeri Kami
          </Text>
        </Center>
        <Flex justifyContent={"center"} alignItems={"center"} overflow={"hidden"}>
          <Center flex={1}>
            {active > 0 && (
              <Button variant={"none"} onClick={() => setActive((i) => i - 1)} zIndex={"1"}>
                <Img src={"/organization/expand_left.svg"} display={["none", "block"]} w={["40px", "40px", "35px", "40px", "56px"]} />
              </Button>
            )}
          </Center>
          <Center mx={["7em", "7em", "2em", "5em", "7em"]}>
            <Box position={"relative"} w={["18rem", "30rem", "22rem", "30rem", "35rem"]} h={["11em", "22em", "14em", "19em", "22em"]} style={{ perspective: "500px", transformStyle: "preserve-3d" }} flex={1}>
              {React.Children.map(children, (child, i) => (
                <Box
                  className={"carousel"}
                  cursor={active === i ? "zoom-in" : "default"}
                  style={{
                    "--active": i === active ? 1 : 0,
                    "--offset": (active - i) / 3,
                    "--direction": Math.sign(active - i),
                    "--abs-offset": Math.abs(active - i) / 3,
                    "pointer-events": active === i ? "auto" : "none",
                    opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
                    display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
                  }}
                  transition={"all 0.3s ease-out"}
                  onClick={() => {
                    if (active === i) {
                      onOpen();
                    }
                  }}
                >
                  {child}
                  <Modal size={["xs", "3xl"]} onClose={onClose} isOpen={isOpen} isCentered>
                    <ModalOverlay />
                    <ModalContent borderRadius={"2.5em"}>
                      <Img src={images[active]} />
                    </ModalContent>
                  </Modal>
                </Box>
              ))}
            </Box>
          </Center>
          <Center flex={1}>
            {active < count - 1 && (
              <Button variant={"none"} onClick={() => setActive((i) => i + 1)} zIndex={"1"}>
                <Img src={"/organization/expand_right.svg"} display={["none", "none", "block", "block", "block"]} w={["40px", "40px", "35px", "40px", "56px"]} />
              </Button>
            )}
          </Center>
        </Flex>
        <Box textAlign={"center"} mt={"0em"}>
          {[...new Array(CARDS)].map((_, i) => (
            <Box
              key={i}
              display={"inline-block"}
              w={"1em"}
              h={"1em"}
              borderRadius={"50%"}
              cursor={"pointer"}
              margin={"15px 7px 0px"}
              bgColor={active === i ? "#F7B70C" : "#D9D9D9"}
              onClick={() => {
                setActive(i);
              }}
            ></Box>
          ))}
        </Box>
      </Box>
    );
  };

  const SocialMedia = () => {
    const SocialMediaData = [
      {
        icon: "/organization/facebook.svg",
        link: "https://www.facebook.com/",
      },
      {
        icon: "/organization/twitter.svg",
        link: "https://www.twitter.com/",
      },
      {
        icon: "/organization/linkedin.svg",
        link: "https://www.linkedin.com/",
      },
      {
        icon: "/organization/youtube.svg",
        link: "https://www.youtube.com/",
      },
      {
        icon: "/organization/instagram.svg",
        link: "https://www.instagram.com/",
      },
      {
        icon: "/organization/google.svg",
        link: "https://www.google.com/",
      },
      {
        icon: "/organization/tiktok.svg",
        link: "https://www.tiktok.com/",
      },
      // {
      //   icon: "/organization/line.svg",
      //   link: "https://www.line.com/",
      // },
    ];

    return (
      <Box mt={"6em"}>
        <Center mb={"2em"}>
          <Text fontSize={"2xl"} color={"#062D5F"} fontWeight={"extrabold"}>
            Temukan Kami di
          </Text>
        </Center>
        <Center>
          <Wrap w={"full"} justify={"center"} spacing={["0.5em", "2em"]}>
            {SocialMediaData.map((socialMedia: any, key: any) => (
              <Center key={key} w={["2em", "3.5em"]} h={["2em", "3.5em"]}>
                <Img src={socialMedia.icon} />
              </Center>
            ))}
          </Wrap>
        </Center>
      </Box>
    );
  };

  const Footer = () => {
    const router = useRouter();
    return (
      <>
        <Flex m={["3.7rem 0rem", "3rem 1rem"]} position={"fixed"} alignItems={"center"} left={0} bottom={0} right={0} zIndex={"99"}>
          <Button
            variant={"none"}
            onClick={() => {
              router.back();
            }}
          >
            <Center
              w={["2.5rem", "5rem", "4rem", "4rem", "4rem"]}
              h={["2.5rem", "5rem", "4rem", "4rem", "4rem"]}
              mt={["0rem", "0rem", "0rem", "0rem", "0rem"]}
              bgColor={"#D01E20"}
              border={["5px solid white", "5px solid white", "4px solid white", "4px solid white", "4px solid white"]}
              borderRadius={"full"}
              shadow={"0px 4px 4px rgba(0,0,0,0.25)"}
            >
              <Img src={"/expandLeft.svg"} w={["1rem", "2rem", "2rem", "2rem", "2rem"]} h={["1rem", "2rem", "2rem", "2rem", "2rem"]} />
            </Center>
          </Button>
        </Flex>
        <Flex w={"full"} h={["5em", "8em"]} justifyContent={"center"} alignItems={"center"} bgColor={"#062D5F"}>
          <Center>
            <Text color={"white"} fontSize={"md"} textAlign={"center"} fontWeight={"extrabold"}>
              HoME MAXIMA 2022
            </Text>
          </Center>
        </Flex>
      </>
    );
  };

  return (
    <Layout>
      <Navbar />
      <Flex
        position={["relative", "relative"]}
        mt={["0vh", "-55vh"]}
        h={["100vh", "220vh"]}
        bgImage={["/organization/organizationDescLs.png", "/organization/organizationDescLs.png"]}
        bgPosition={"center"}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
      >
        <Box w={"full"} zIndex={"0"}>
          <Header />
          <Body />
          <Footer />
        </Box>
      </Flex>
    </Layout>
  );
};

export default OrganizationDesc;
