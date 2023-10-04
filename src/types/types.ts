export interface SearchedNames {
    user_image: string;
    username: string;
    complete_name: string;
    storie?: boolean;
  }
  
  export interface PropsUserStory {
    storie_id: string | number;
    user_image: string | undefined;
    name: string;
    hasStory: boolean | null;
  }
  
  export interface Comment {
    comment_id?: number;
    userminilogo: string;
    username: string;
    comment: string;
    created_at?: string;
  }
  
  export interface Post {
    post_id?: number;
    date: string;
    userminilogo: string;
    createdby: string;
    url: string[];
    likes: number;
    comments: Comment[];
    bio?: string;
  }
  
  export interface WebcamRec {
    recorder: boolean;
  }
  