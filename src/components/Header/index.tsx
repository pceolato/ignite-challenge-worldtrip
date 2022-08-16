import { Flex, Grid, Icon } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image"
import { useRouter } from "next/router";
import Link from "next/link";
import { RiArrowLeftSLine } from 'react-icons/ri'

export function Header () {
    const { asPath } = useRouter();
    const notHomePage = asPath !== "/"

    return (
        <Flex 
            bg="white" 
            w="100%" 
            as="header" 
            mx="auto" 
            px="1rem"
            h={["50px", "100px"]} 
            align="center" 
            justify="center"
        >
            <Grid 
                h="100%"
                mx="auto"
                w="100%"
                maxW="1160px"
                templateColumns="repeat(3, 1fr)"
                alignItems="center"
                justifyContent="center"
            >

                {notHomePage && (
                    <Link href="/">
                        <a>
                            <Icon as={RiArrowLeftSLine} fontSize={[20, 40]} justifySelf="start"/>
                        </a>
                    </Link>
                )}

                <Image 
                    w={["81px", "184px"]}
                    src="/logo.svg"
                    alt="Logo"
                    justifySelf="center"
                    gridColumn="2"
                />
   
            </Grid>    

        </Flex>
    )
}