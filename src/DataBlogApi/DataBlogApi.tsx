import {postsMock, sectionsMock, getUnsplashServerData} from "./DataBlogApiMock";
import ApiResponseDto from "../model/ApiResponseDTO";
import UnsplashApiServer from "./UnsplashApiServer";
import { UnsplashResponseInterface } from "../model/Types";

/**
 * DataBlogApi Class: This class handle the data api requests.
 *
 */
export default class DataBlogApi {
    /**
     * Get Cover Image: Returns the cover image for the blog post.
     * @return ApiResponseDto
     */
    static getCoverImage(): Promise<ApiResponseDto> {
        return UnsplashApiServer.getRandomImage();
    }

    /**
     * GetSections: Returns the main sections to navigate through the secondary sections.
     * @return Promise<ApiResponseDto>
     */
    static getSections(): Promise<ApiResponseDto> {
        return Promise.resolve({
            success: true,
            message: "Mock Sections Successful.",
            data: sectionsMock.data
        });
    }

    /**
     * GetPost: Returns the posts to navigate through the explore section.
     * @return Promise<ApiResponseDto>
     */
    static getPost(): Promise<ApiResponseDto> {
        return Promise.resolve({
            success: true,
            message: "Mock Posts Successful.",
            data: postsMock.data
        });
    }
}