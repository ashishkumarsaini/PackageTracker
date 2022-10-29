import React from 'react';
import { Box, Heading, Button } from 'native-base';
import OrderDetailsCard from '../../../../components/OrderDetailsCard/OrderDetailsCard';

const PreviousShippment = () => {
  return (
      <Box p={4}>
          <Heading size="md" mb={4}>In Progress</Heading>
          <OrderDetailsCard />
          <Button borderRadius={10} p={4} bg="black">View All</Button>
      </Box>
  )
}

export default PreviousShippment