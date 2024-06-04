import { ImagePath } from "./image-path.model";

export interface CarouselItemsModel{
    imagePath: ImagePath,
    alternativeDescription?: string,
    isActive?: boolean
}