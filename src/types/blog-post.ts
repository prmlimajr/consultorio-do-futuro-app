export type BlogPostType = {
  id?: string;
  title: string;
  content: string;
  link?: string;
  file?: {
    path: string;
  };
  isDetails?: boolean;
};
