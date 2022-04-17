import { MoonIcon, SunIcon } from "@chakra-ui/icons";
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
import { Navigate, useNavigate } from "react-router-dom";
import "./Sidebar.css";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Logo } from "../../Icons/logo/logo";

interface SidebarProps {
  onClose: Function;
  isOpen: any;
  variant: "drawer" | "sidebar";
  onNightToggle?: any;
  showMoon?: any;
  showSun? : any;
}

const SidebarContent = ({ onClose, onNightToggle, showSun, showMoon }: any) => {
  const navigate = useNavigate();

  
  return (
    <VStack>
      <Button
        onClick={() => {
          navigate("/");
          onClose();
        }}
        w="100%"
      >
        Home
      </Button>
      <Button onClick={() => {}} w="100%">
        About
      </Button>
      <Button
        onClick={() => {
          navigate("/learn");
          onClose();
        }}
        w="100%"
      >
        Learn Kanji
      </Button>
      <Button onClick={() => {}} w="100%">
        Contacts
      </Button>
      {showMoon && <MoonIcon onClick={onNightToggle} />}
      {showSun && <SunIcon onClick={onNightToggle} />}
    </VStack>
  );
};

const Sidebar = ({ onClose, isOpen, variant, onNightToggle, showMoon, showSun }: SidebarProps) => {
  let navigate = useNavigate();
 
  const goHomepage = () => {
    navigate("/");
    onClose()
  };
  
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
      <SidebarContent />
    </Box>
  ) : (
    <Drawer isOpen={isOpen} placement="right" onClose={() => onClose()}>
      <DrawerOverlay>
        <DrawerContent background="crimson" maxW={"350px"}>
          <DrawerCloseButton />
          <DrawerHeader >
            <div className="logo-container">
              <Logo className="logo-sidebar" onClick={() => goHomepage()} />
              <span>LearnKanji <small>漢字</small></span>
            </div>
          </DrawerHeader>
          <DrawerBody>
            <SidebarContent onClose={onClose} onNightToggle={onNightToggle} showMoon={showMoon} showSun={showSun}/>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default Sidebar;
