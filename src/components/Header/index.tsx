import { Flex, Grid } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image"

export function Header () {
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