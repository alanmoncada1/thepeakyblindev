import {postsMock, sectionsMock} from "./DataBlogApiMock";
import ApiResponseDto from "../model/ApiResponseDTO";

/**
 * DataBlogApi Class: This class handle the data api requests.
 *
 */
export default class DataBlogApi {
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