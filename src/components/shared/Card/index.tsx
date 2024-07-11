import styles from "./styles.module.scss";
import landscapeImage from "@assets/images/landscape.jpg";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardMedia}>
        <img src={landscapeImage} />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <p className={styles.title}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
