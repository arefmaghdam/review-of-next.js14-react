import NextProvider from "@/components/providers/next-provider";
import styles from "./page.module.css";
import ReactProvider from "@/components/providers/react-provider";

export default function Home() {
  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.homeItems}>
          <h1 className="text-xl">Next.JS 14</h1>
          <NextProvider />
        </div>
        <div className={styles.homeItems}>
          <h1 className="text-xl">React</h1>
          <ReactProvider />
        </div>
      </div>
    </>
  );
}
