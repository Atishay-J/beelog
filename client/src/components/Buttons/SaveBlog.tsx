import { CheckIcon } from '@chakra-ui/icons';
import ButtonBase from './ButtonBase';

export default function SaveBlog() {
  return (
    <ButtonBase
      callback={() => {}}
      icon={<CheckIcon />}
      text="Save Blog"
      variant="success"
    />
  );
}
