"use client";
import Image from "next/image";
import Link from "next/link";
import style from "./index.module.css";
import { useState } from "react";
export default function Header() {
  const [active, setActive] = useState(false);
  return (
    <header className={style.header}>
      <Link href="/">
        <Image
          src="./icon/devchallenges.svg"
          alt="brand"
          width={150}
          height={50}
        />
      </Link>
      <div className={style.profileNavContainer}>
        <button
          className={style.dropdownbtn}
          onClick={() => setActive(!active)}
        >
          <Image src="/icon/avatar.jpg" alt="profile" width={30} height={30} />
                <span className={style.username}>Xanthe Neal</span>
          <span
            className="material-symbols-rounded"
            style={{ transform: active ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            arrow_drop_down
          </span>
        </button>
        {active && <ul className={style.dropdown}>
          <li>
            <Link href="#">
              <span className="material-symbols-rounded">account_circle</span>
              <span>My Profile</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="material-symbols-rounded">group</span>
              <span>Group Chat</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="material-symbols-rounded">logout</span>
              <span>Logout</span>
            </Link>
          </li>
        </ul>}
      </div>
    </header>
  );
}
