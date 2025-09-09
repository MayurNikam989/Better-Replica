import styles from "@styles/footer.module.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className={styles.grid}>
          <div>
            <div className={styles.brand}>
              <span className={styles.dot} /> Better Replica
            </div>
            <p className={styles.muted}>
              Educational project inspired by Better.com. No affiliation. No
              trademarks or brand assets used.
            </p>
          </div>
          <div>
            <h4 className="h4">Company</h4>
            <ul className="ul">
              <li className="li">
                <Link href="/about-us">About</Link>
              </li>
              <li className="li">
                <Link href="/start">Get started</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="h4">Tools</h4>
            <ul className="ul">
              <li className="li">
                <Link href="/mortgage-calculator">Mortgage Calculator</Link>
              </li>
            </ul>
          </div>
        </div>
        <p className={styles.legal}>
          © {new Date().getFullYear()} Better Replica. For learning/demo use
          only.
        </p>
      </div>
    </footer>
  );
}
