import { Center, Square, Circle, AbsoluteCenter } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Flex, Spacer } from '@chakra-ui/react'


export const DrinkItem = ({ drink, clickFn }) => {
  return (
    <>
 
        <Flex bg="white" h="80px" w="200px" color="black" cursor="pointer"onClick={() => clickFn(drink)} mb="4">
          <Image src={drink.imgUrl} alt={drink.alt} boxSize="80px" objectFit="cover" mr="6" />
          <Spacer />
          <Text fontweight='450'>{drink.name}</Text>
        </Flex>

    </>
  );
};
