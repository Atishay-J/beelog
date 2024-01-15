import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState
} from 'react';

interface BlogContextProps {
  blog: { title: string; content: string };
  setBlog: Dispatch<SetStateAction<{ title: string; content: string }>>;
}

const initialBlogState = {
  title: '',
  content: ''
};

const CreateBlogContext = createContext<BlogContextProps>({
  blog: initialBlogState,
  setBlog: () => {} // Placeholder function
});

export const CreateBlogProvider = ({ children }: { children: ReactNode }) => {
  const [blog, setBlog] = useState({
    title: '',
    content: ''
  });

  return (
    <CreateBlogContext.Provider value={{ blog, setBlog }}>
      {children}
    </CreateBlogContext.Provider>
  );
};

export const useCreateBlog = () => {
  return useContext(CreateBlogContext);
};
