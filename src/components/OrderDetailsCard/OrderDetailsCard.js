import React from 'react';
import { Box, Flex, Heading, Text, Center } from 'native-base'

const OrderDetailsCard = () => {
  return (
      <Box p={5} borderRadius={15} borderWidth={1} borderColor="gray.500" mb={4}>
        <Box mb={4}>
          <Flex direction='row' justifyContent="space-between">
            <Heading size="md">1157 8444 7889</Heading>
            <Heading size="xs" color="lime.600">In Transit</Heading>
          </Flex>
          <Text color="gray.600">Track Number</Text>
        </Box>
        <Box mb={4}>
          <Center>
            <Text>--------------------------------------------------</Text>
          </Center>
        </Box>
        <Box>
          <Flex direction='row' justifyContent="space-between">
            <Box>
              <Text color="gray.600">12 June, 2022</Text>
              <Heading size="sm">Delhi</Heading>
            </Box>
            <Box>
              <Text color="gray.600">15 June, 2022</Text>
              <Heading size="sm">Banglore</Heading>
            </Box>
          </Flex>
        </Box>
      </Box>
  )
}

export default OrderDetailsCard