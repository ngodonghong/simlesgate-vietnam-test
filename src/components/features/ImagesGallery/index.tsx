import Card from "@/components/shared/Card";
import styles from "./styles.module.scss";
import { useGetListImagesGallery } from "./hooks";

const ImagesGallery = () => {
    const { listImages } = useGetListImagesGallery();

    return (
        <>
            <h1>Photo Cards</h1>
            <section className={styles.imagesGallery}>
                {listImages.map((image) => (
                    <Card
                        key={image.id}
                        title={image.title}
                        imageUrl={image.imageUrl}
                    />
                ))}
            </section>
        </>
    );
};

export default ImagesGallery;
