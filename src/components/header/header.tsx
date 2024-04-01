import Link from "next/link";
import styles from "../../app/styles.module.css";
// import styles from "./styles.module.css";

const Header = () => {
  return (
    <div className={styles.flexContainer}>
      <Link href="/">Home</Link>
      <Link href="/about">About page</Link>
      <Link href="/docs">Doc page</Link>
      <Link href="/products">Products page</Link>
    </div>
  );
};

export default Header;
