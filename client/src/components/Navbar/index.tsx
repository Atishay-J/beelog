import { HStack } from '@chakra-ui/react';
import Buttons from '../Buttons';

interface NavbarProps {
  variant?: 'CREATE' | 'SAVE';
}

export default function Navbar({ variant = 'CREATE' }: NavbarProps) {
  return (
    <HStack
      as="nav"
      w="100%"
      boxShadow="0px 0px 10px 2px rgba(230,230,230,0.4)"
      alignItems="center"
      justifyContent="flex-end"
      padding="0.5rem 1rem"
    >
      {variant === 'CREATE' ? <Buttons.CreateBlog /> : <Buttons.SaveBlog />}
    </HStack>
  );
}
