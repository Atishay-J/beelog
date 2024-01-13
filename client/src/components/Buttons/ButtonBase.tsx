import { Button } from '@chakra-ui/react';
import { buttonVariants } from './buttonVariants';

interface ButtonBaseProps {
  text: string;
  icon: React.ReactElement<
    unknown,
    string | React.JSXElementConstructor<unknown>
  >;
  variant?: 'primary' | 'success';
  callback: () => void;
}

export default function ButtonBase({
  text,
  icon,
  variant = 'primary',
  callback
}: ButtonBaseProps) {
  const { background, color } = buttonVariants[variant];

  return (
    <Button
      onClick={callback}
      leftIcon={icon}
      background={background}
      color={color}
      fontSize="0.95rem"
    >
      {text}
    </Button>
  );
}
