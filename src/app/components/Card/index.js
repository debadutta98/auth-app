import Link from "next/link";
import style from "./index.module.css";
export default function Card({ children, width }) {
  return (
    <>
      <div className={style.card} style={{ width }}>
        {children}
      </div>
      <footer style={{ width }} className={style.footer}>
        <span>
          created by{" "}
          <Link
            href="#"
            style={{ textDecoration: "underline", fontWeight: "500" }}
          >
            debadutt98
          </Link>
        </span>
        <Link href="#">devChallenges.io</Link>
      </footer>
    </>
  );
}
