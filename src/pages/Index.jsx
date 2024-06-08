import { Container, VStack, HStack, Input, Button, Checkbox, Text, IconButton, Box, Heading, Flex } from "@chakra-ui/react";
import { FaTrash, FaUserCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.lg" p={4}>
      {/* Header */}
      <Flex as="header" justify="space-between" align="center" mb={6}>
        <Heading as="h1" size="lg">Todo App</Heading>
        <IconButton aria-label="User Profile" icon={<FaUserCircle />} size="lg" />
      </Flex>

      {/* Main Section */}
      <VStack spacing={4} align="stretch">
        {/* Add Task Section */}
        <HStack>
          <Input placeholder="Add a new task" />
          <Button colorScheme="teal">Add</Button>
        </HStack>

        {/* Task List Section */}
        <VStack spacing={3} align="stretch">
          <HStack>
            <Checkbox />
            <Text flex="1">Sample Task 1</Text>
            <IconButton aria-label="Delete Task" icon={<FaTrash />} />
          </HStack>
          <HStack>
            <Checkbox />
            <Text flex="1">Sample Task 2</Text>
            <IconButton aria-label="Delete Task" icon={<FaTrash />} />
          </HStack>
        </VStack>
      </VStack>

      {/* Footer */}
      <Box as="footer" mt={10} textAlign="center">
        <Text fontSize="sm">© 2023 Todo App. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;