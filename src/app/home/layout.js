import Card from "../components/Card";
import style from "./home.module.css";

export const metadata = {
  title: "Home",
  description: "User profile information",
};

export default function HomeLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <h1 className={style.pagetitle}>Personal info</h1>
        <h3 className={style.pagesubtitle}>
          Basic info, like your name and photo
        </h3>
        <Card width="60%">{children}</Card>
      </body>
    </html>
  );
}
