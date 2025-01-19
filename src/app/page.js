import styles from "./page.module.css";
import Banner from "./components/banner/Banner";
import Group from "./components/Group/Group";
import Filter from "./components/filter/Filter";
import Products from "./components/products/Products";
import { ContextProvider } from "./components/Context";


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section id="banner">
          <Banner />
        </section>
        <ContextProvider>
          <div className={styles.container}>
            <Group />
            <div style={{ display: "flex" }}>
            <Filter />
            <Products />
            </div>
          </div>
        </ContextProvider>
      </main>
    </div>
  );
}
