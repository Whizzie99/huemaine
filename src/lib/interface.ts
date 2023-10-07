export interface Project {
  title: string;
  subtitle: string;
  image: any;
  url: string;
  _id: string;
}

export interface Post {
  title: string;
  image: string;
  content: any;
  _id: string;
  slug: {
    current: string;
  };
  _createdAt: Date;
}
