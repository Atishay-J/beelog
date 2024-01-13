import { EditIcon } from '@chakra-ui/icons';
import ButtonBase from './ButtonBase';

export default function CreateBlog() {
  return (
    <ButtonBase callback={() => {}} icon={<EditIcon />} text="Create Blog" />
  );
}
