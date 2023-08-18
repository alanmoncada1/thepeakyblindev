export interface PostsInterface {
    id: number
    title: string,
    description: string,
    date: Date,
    topics: string[],
    contentTypeId: number,
}

export interface PostsScrollInterface {
    id: number
    title: string,
    description: string,
    date: Date,
    topics: string[],
    contentTypeId: number,
}

export interface UnsplashURLs {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  }
  
  export interface UnsplashResponse {
    id: string;
    color: string;
    description: string | null;
    alt_description: string | null;
    urls: UnsplashURLs;
  }
  
  export interface ApiResponseDto {
    success: boolean;
    message: string;
    data: any;
  }