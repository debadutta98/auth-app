'use client';
import Image from 'next/image';
import style from './edit.module.css';
export default function EditProfile() {
    return <>
        <div>
            <h2 className={style.title}>Change Info</h2>
            <h6 className={style.subtitle}>Changes will be reflected to every services</h6>
        </div>
        <form className={style.editform}>
            <div className={style.field}>
                <label htmlFor='photo'>
                    <div className={style.imageContainer}>
                        <div className={style.imageOverlay}>
                            <span className="material-symbols-rounded" style={{ color: '#FFFFFF' }}>
                                photo_camera
                            </span>
                        </div>
                        <Image src="/icon/avatar.jpg" width={72} height={72} alt="avatar"/>
                    </div>
                    <span>CHANGE PHOTO</span>
                </label>
                <input type="file" style={{display:'none'}} name='photo' id='photo'/>
            </div>
            <div className={style.field}>
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="Enter your name..." name="name" id='name'/>
            </div>
            <div className={style.field}>
                <label htmlFor="bio">Bio</label>
                <textarea placeholder="Enter your bio..." name="bio" id='bio' rows={4} cols={5} />
            </div>
            <div className={style.field}>
                <label htmlFor="phone">Phone</label>
                <input type="tel" placeholder="Enter your phone..." id='phone' name='phone'/>
            </div>
            <div className={style.field}>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Enter your email..." id='email' name='email'/>
            </div>
            <div className={style.field}>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Enter your new password..." id='password' name='password'/>
            </div>
            <button type='submit' className={style.submitBtn}>Save</button>
        </form>
    </>
}