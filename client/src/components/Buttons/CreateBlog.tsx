import { EditIcon } from '@chakra-ui/icons';
import ButtonBase from './ButtonBase';
import { useNavigate } from 'react-router-dom';

export default function CreateBlog() {
  const navigate = useNavigate();

  return (
    <ButtonBase
      callback={() => navigate('/write-blog')}
      icon={<EditIcon />}
      text="Create Blog"
    />
  );
}
