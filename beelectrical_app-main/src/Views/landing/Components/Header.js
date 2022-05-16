import React from 'react';
import { Image, Box, Heading} from '@chakra-ui/core';

const Header = () => {
  return (
    <Box> 
      <Image src="./public/LOOGO_BELECTRICAL_NETWORK.png "
         height={300}
         width= "100%"
         objectFit = "cover"
         alt= "Beelectrical"
         ></Image>
    </Box>
  );
};
export default Header; 
