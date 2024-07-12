import styles from "./styles.module.scss";
interface ICardProps {
    title: string;
    imageUrl: string;
}

const Card = ({ title, imageUrl }: ICardProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardMedia}>
                <img src={imageUrl} alt={title} />
            </div>
            <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                    <p className={styles.title}>{title}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
