export interface LoginModel {
  email: string,
  password: string
}

export interface LoginResponseModel {
  'access-token': string
  user: {
    id: string
    name: string
    email: string
  };
}

