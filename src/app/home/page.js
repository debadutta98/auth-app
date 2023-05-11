import Image from "next/image";
import Link from "next/link";
import style from "./home.module.css";

export default function Home() {
  return (
    <div className={style.informationContainer}>
      <div className={style.containerRows}>
        <div>
          <h2 className={style.title}>Profile</h2>
          <h6 className={style.subtitle}>
            Some info may be visible to other people
          </h6>
        </div>
        <Link href="/" className={style.editBtn}>
          Edit
        </Link>
      </div>
      <div className={style.containerRows}>
        <span className={style.label}>Photo</span>
        <Image
          src="/icon/avatar.jpg"
          width={72}
          height={72}
          alt="avatar"
          style={{ borderRadius: "8px" }}
          className={style.value}
        />
      </div>
      <div className={style.containerRows}>
        <span className={style.label}>Name</span>
        <span className={style.value}>Xanthe Neal</span>
      </div>
      <div className={style.containerRows}>
        <span className={style.label}>Bio</span>
        <p className={style.value}>
          I am a software developer and a big fan of devchallenges...
        </p>
      </div>
      <div className={style.containerRows}>
        <span className={style.label}>Phone</span>
        <span className={style.value}>908249274292</span>
      </div>
      <div className={style.containerRows}>
        <span className={style.label}>Email</span>
        <span className={style.value}>xanthe.neal@gmail.com</span>
      </div>
      <div className={style.containerRows}>
        <span className={style.label}>Password</span>
        <span className={style.value}>************</span>
      </div>
    </div>
  );
}
