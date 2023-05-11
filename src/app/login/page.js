"use client";
import Link from 'next/link';
import style from './login.module.css'
import Image from 'next/image';
export default function Login() {
    return <>
        <p className={style.title}>Login</p>
        <form className={style.loginForm}>
            <div className={style.field}>
                <span className="material-symbols-rounded" style={{ color:'#828282'}}>
                    mail
                </span>
                <input type='email' required={true} placeholder='Email'/>
            </div>
            <div className={style.field}>
                <span className="material-symbols-rounded" style={{ color: '#828282' }}>
                    lock
                </span>
                <input type="password" required={true} placeholder='Password'/>
            </div>
            <button type="submit" className={style.submitBtn}>Login</button>
        </form>
        <span className={style.separator}>or continue with these social profile</span>
        <div className={style['auth-providers']}>
            <Link href='#'><Image src="./icon/Google.svg" alt="google" width={50} height={50}/></Link>
            <Link href='#'><Image src="./icon/Facebook.svg" alt="facebook" width={50} height={50} /></Link>
            <Link href='#'><Image src="./icon/Twitter.svg" alt="twitter" width={50} height={50} /></Link>
            <Link href='#'><Image src="./icon/Gihub.svg" alt="github" width={50} height={50} /></Link>
        </div>
        <span className={style.foot}>Don’t have an account yet? <Link href='#' style={{ color:'#2D9CDB'}}>Register</Link></span>
    </>
};