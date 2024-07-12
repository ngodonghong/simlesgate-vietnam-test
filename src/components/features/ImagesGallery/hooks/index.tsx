import landscapeImage from "@assets/images/landscape.jpg";
import portraitImage from "@assets/images/portrait.png";
import { faker } from "@faker-js/faker";

export const useGetListImagesGallery = () => {
    const listImages = Array.from({ length: 48 }, (_, index) => {
        return {
            id: index,
            title: faker.lorem.words(3),
            description: faker.lorem.words(3),
            imageUrl: index % 2 === 0 ? landscapeImage : portraitImage,
        };
    });

    return {
        listImages,
    };
};
