import { MoonIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";




interface SidebarProps {
  onClose: Function;
  isOpen: any;
  variant: "drawer" | "sidebar";

}



const SidebarContent = ({ onClick: Function }: any) => (
  
  <VStack>
    <Button onClick={() => {}} w="100%">
      Home
    </Button>
    <Button onClick={() => {}} w="100%">
      About
    </Button>
    <Button onClick={() => {}} w="100%">
      Contacts
    </Button>
    <MoonIcon onClick={() => console.log("moon")} />
  </VStack>
);

const Sidebar = ({ onClose, isOpen, variant }: SidebarProps) => {
  
  return variant === "sidebar" ? (
    <Box
      position="fixed"
      right={0}
      p={5}
      w="200px"
      top={0}
      h="100%"
      bg="#dfdfdf"
    >
      <SidebarContent onClick={() => onClose()} />
    </Box>
  ) : (
    <div className="test">
      <Drawer isOpen={isOpen} placement="right" onClose={() => onClose()}>
        <DrawerOverlay>
          <DrawerContent background="crimson" maxW={"350px"}>
            <DrawerCloseButton />
            <DrawerHeader color="white">LearnKanji</DrawerHeader>
            <DrawerBody>
              <SidebarContent onClick={() => onClose} />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </div>
  );
};

export default Sidebar;
