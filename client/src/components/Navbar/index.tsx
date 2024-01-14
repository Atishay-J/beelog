import { HStack, Image } from '@chakra-ui/react';
import Buttons from '../Buttons';
import { Link } from 'react-router-dom';

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
      justifyContent="center"
      padding="0.7rem 3rem"
    >
      <HStack
        w="100%"
        alignItems="center"
        justifyContent="space-between"
        maxW="1920px"
      >
        <Link to="/">
          {' '}
          <Image src="/assets/beelog.png" alt="Bee.log" w="6.5rem" h="auto" />
        </Link>
        {variant === 'CREATE' ? <Buttons.CreateBlog /> : <Buttons.SaveBlog />}
      </HStack>
    </HStack>
  );
}
