import React from "react";
import { Pressable } from "react-native";
import { Box, Flex, Heading, Image, Input } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";

const HomeHeader = () => {
  return (
    <Box
        bg="lime.400"
        px={4}
        py={10}
        borderBottomRadius={15}
    >
        <Flex direction="row" alignItems="flex-start" justifyContent="space-between">
                <Heading size="xl" color="white" mb={6}>Hello, Ashish!</Heading>
                <Image
                    source={{ uri: "https://cdn-icons-png.flaticon.com/512/219/219983.png"}}
                    h={50}
                    w={50}
                    alt="Profile Image"
                />
        </Flex>
        <Input
            type="text"
            bg="white"
            borderRadius={10}
            InputRightElement={
                <Pressable onPress={() => alert("Button Press")}>
                    <Icon name="search" size={20} />
                </Pressable>
            }
            placeholder="Enter your track number here"
        />
    </Box>
  )
}

export default HomeHeader