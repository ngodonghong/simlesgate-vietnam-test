import ImagesGallery from "../features/ImagesGallery";
import Button from "../shared/Button";
import styles from "./mainLayout.module.scss";
import logo from "@assets/images/logo.png";

const MainLayout = () => {
  return (
    <div className={styles.mainLayout}>
      <header>
        <nav className={styles.topNavBar}>
          <div className={styles.heading}>
            <a href="/#">
              <img src={logo} alt="logo" height={20} />
            </a>
            <h2>Hong Ngo</h2>
          </div>
          <div className={styles.topBarAction}>
            <Button>Indie Game</Button>
            <Button>Entry Game</Button>
            <Button variant="outlined">Community</Button>
          </div>
        </nav>
      </header>
      <main className={styles.mainContent}>
        <ImagesGallery />
      </main>
    </div>
  );
};

export default MainLayout;
