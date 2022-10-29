import React from 'react';
import {ScrollView} from 'react-native'
import {Box, Heading, Flex, Button} from 'native-base';
import MethodCard from './MethodCard';

const ShippingMethods = () => {
    const methodsArr = [
        {
            title: 'Truck',
            price: '4.0',
        },
        {
            title: 'Mini Van',
            price: '8.0',
        },
        {
            title: 'Train',
            price: '12.0',
        },
    ]
    return (
        <Box py={6}>
            <Heading px={4} size="md" mb={4}>Shipping Methods</Heading>
            <Box mb={4}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <Flex direction='row' px={4}>
                        {
                            methodsArr.map((shipMethod, index) => <MethodCard key={shipMethod.title} index={index} shipMethod={shipMethod} />)
                        }
                    </Flex>
                </ScrollView>
            </Box>
            <Box px={4}>
                <Button _pressed={{bg:"red.100"}} borderRadius={10} p={4} bg="black">Quick Order</Button>
            </Box>
        </Box>
    )
}

export default ShippingMethods