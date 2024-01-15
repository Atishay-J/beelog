import { Button, ButtonProps } from '@chakra-ui/react';
import { buttonVariants } from './buttonVariants';

interface ButtonBaseProps {
  text: string;
  icon: React.ReactElement<
    unknown,
    string | React.JSXElementConstructor<unknown>
  >;
  variant?: 'primary' | 'success';
  callback: () => void;
  isLoading?: boolean;
  props?: ButtonProps;
}

export default function ButtonBase({
  text,
  icon,
  variant = 'primary',
  callback,
  isLoading = false,
  props
}: ButtonBaseProps) {
  const { background, color } = buttonVariants[variant];

  return (
    <Button
      onClick={callback}
      leftIcon={icon}
      background={background}
      color={color}
      fontSize={['0.85rem', '0.95rem']}
      size={['sm', 'md']}
      isLoading={isLoading}
      _hover={{
        background: 'rgba(100,100,100)'
      }}
      {...props}
    >
      {text}
    </Button>
  );
}
