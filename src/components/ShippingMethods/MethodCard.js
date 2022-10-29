import React from 'react';
import {Box, Heading, Text, Flex} from 'native-base'

const MethodCard = ({ shipMethod, index }) => {
  return (
    <Box
        w={150}
        h={150}
        bg={index % 2 === 0 ? 'gray.200': 'lime.200'}
        mr={5}
        borderRadius={25}
        p={4}
    >
        <Heading size="sm" color="gray.700" mt={60} mb={1}>{shipMethod.title}</Heading>
        <Flex direction="row" alignItems="center">
            <Heading size="lg">{shipMethod.price}</Heading>
            <Text color="gray.700"> $/kg</Text>
        </Flex>
    </Box>
  )
}

export default MethodCard