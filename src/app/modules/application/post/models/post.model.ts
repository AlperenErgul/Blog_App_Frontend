export interface PostInterface {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

export interface findAllPostApiResponse {
  data: PostInterface[];
  meta: {
    itemsPerPage: number;
    totalItems: number;
    currentPage: number;
    totalPages: number;
    sortBy: [string, string][];
    search: string;
    searchBy: string[];
  };
  links: {
    current: string;
  };
}


export interface getOnePostInterface {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreatePostModel {
  title: string;
  content: string;
}

export interface CreatePostResponseModel {
  id: string;
  title: string;
  content: string;
  user: {
    id: string;
  }
  createdAt: string;
  updatedAt: string;
}

export interface UpdatePostModel {
  title?: string;
  content?: string;
}

export interface UpdatePostResponseModel {
  id: string;
  title: string;
  content: string;
  user: {
    id: string;
    email: string;
  }
  createdAt: string;
  updatedAt: string;
}


