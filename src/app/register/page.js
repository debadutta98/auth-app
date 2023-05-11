"use client";
import Link from 'next/link';
import style from './register.module.css';
import Image from 'next/image';
export default function Register() {
    return <>
        <h2>Join thousands of learners from around the world </h2>
        <p>Master web development by making real-life projects. There are multiple paths for you to choose</p>
        <form className={style.loginForm}>
            <div className={style.field}>
                <span className="material-symbols-rounded" style={{ color: '#828282' }}>
                    mail
                </span>
                <input type='email' required={true} placeholder='Email' />
            </div>
            <div className={style.field}>
                <span className="material-symbols-rounded" style={{ color: '#828282' }}>
                    lock
                </span>
                <input type="password" required={true} placeholder='Password' />
            </div>
            <button type="submit" className={style.submitBtn}>Start coding now</button>
        </form>
        <span className={style.separator}>or continue with these social profile</span>
        <div className={style['auth-providers']}>
            <Link href='#'><Image src="./icon/Google.svg" alt="google" width={50} height={50} /></Link>
            <Link href='#'><Image src="./icon/Facebook.svg" alt="facebook" width={50} height={50} /></Link>
            <Link href='#'><Image src="./icon/Twitter.svg" alt="twitter" width={50} height={50} /></Link>
            <Link href='#'><Image src="./icon/Gihub.svg" alt="github" width={50} height={50} /></Link>
        </div>
        <span className={style.foot}>Don’t have an account yet? <Link href='#' style={{ color: '#2D9CDB' }}>Register</Link></span>
    </>
}