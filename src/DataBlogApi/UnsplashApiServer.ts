import ApiResponseDto from "../model/ApiResponseDTO";
import { UnsplashResponse } from "../model/Types";

/**
 * UnsplashApiServer Class: This class handle the data api requests from Unsplash.
 *
 */
export default class UnsplashApiServer {
    static unsplashURL = "https://api.unsplash.com";
    
     /**
     * Get One Random Image: Returns just one image from unsplash.
     * @return Promise<ApiResponseDto>
     */
     static getRandomImage(): Promise<ApiResponseDto> {
        const url = `${this.unsplashURL}/photos/random/?client_id=vG3Tmw_Cjy0DJJweu9LmY1VflnNZh-kOI-WjHIpGgfs`;
        
        return fetch(url).then(async (response: any) => {
            // Replace this for a generic validator function 
            if (!response.ok)
                throw new Error("Unsplash network error.")

            const image = await response.json() as UnsplashResponse


            const resultFormatter = {
                id: image.id,
                color: image.color,
                description: image.description,
                altDescription: image.alt_description,
                urls: image.urls
            };

            return Promise.resolve({
                success: true,
                message: "Unsplash request Successful.",
                data: resultFormatter
            })
        })
     }
}