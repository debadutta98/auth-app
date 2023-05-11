"use client";
import Image from "next/image";
import style from "./edit.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
const FILE_SIZE = 160 * 1024;
export default function EditProfile() {
  const [imageURL, setImageURL] = useState("/icon/avatar.jpg");
  const formik = useFormik({
    initialValues: {
      image: null,
      name: "",
      bio: "",
      phone: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      image: Yup.mixed()
        .required()
        .test("fileSize", "File too large", (value) => {
          console.log(value.size);
          return value && value.size <= FILE_SIZE;
        })
        .test(
          "fileFormat",
          "Unsupported Format",
          (value) => value && SUPPORTED_FORMATS.includes(value.type)
        ),
      name: Yup.string().required().ensure().strict(true).min(5).max(30),
      bio: Yup.string().required().ensure().strict(true).min(20).max(100),
      phone: Yup.number().positive().min(10).max(10).required(),
      email: Yup.string().required().ensure().strict(true).email(),
      password: Yup.string().required().ensure().strict(true).min(5).max(12),
    }),
    onSubmit: (value) => {
      console.log(value.image);
    },
  });
  return (
    <>
      <div>
        <h2 className={style.title}>Change Info</h2>
        <h6 className={style.subtitle}>
          Changes will be reflected to every services
        </h6>
      </div>
      <form className={style.editform} onSubmit={formik.handleSubmit}>
        <div className={style.field}>
          <label htmlFor="image">
            <div className={style.imageContainer}>
              <div className={style.imageOverlay}>
                <span
                  className="material-symbols-rounded"
                  style={{ color: "#FFFFFF" }}
                >
                  photo_camera
                </span>
              </div>
              <Image src={imageURL} width={72} height={72} alt="avatar" />
            </div>
            <span>CHANGE PHOTO</span>
          </label>
          <input
            type="file"
            style={{ display: "none" }}
            name="image"
            id="image"
            multiple={false}
            onChange={(event) => {
              event.preventDefault();
              let reader = new FileReader();
              let file = event.target.files[0];
              if (file) {
                reader.onloadend = () => {
                  setImageURL(reader.result);
                };
                reader.readAsDataURL(file);
                formik.setFieldValue("image", file, true);
              }
            }}
            accept={SUPPORTED_FORMATS.join(", ")}
          />
          {formik.errors.image && formik.touched.image && (
            <span className={style.errorMessage}>{formik.errors.image}</span>
          )}
        </div>
        <div className={style.field}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Enter your name..."
            name="name"
            id="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name && formik.touched.name && (
            <span className={style.errorMessage}>{formik.errors.name}</span>
          )}
        </div>
        <div className={style.field}>
          <label htmlFor="bio">Bio</label>
          <textarea
            placeholder="Enter your bio..."
            name="bio"
            id="bio"
            rows={4}
            cols={5}
            onChange={formik.handleChange}
            value={formik.values.bio}
          />
          {formik.errors.bio && formik.touched.bio && (
            <span className={style.errorMessage}>{formik.errors.bio}</span>
          )}
        </div>
        <div className={style.field}>
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            placeholder="Enter your phone..."
            id="phone"
            name="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
          {formik.errors.phone && formik.touched.phone && (
            <span className={style.errorMessage}>{formik.errors.phone}</span>
          )}
        </div>
        <div className={style.field}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter your email..."
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email && (
            <span className={style.errorMessage}>{formik.errors.email}</span>
          )}
        </div>
        <div className={style.field}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter your new password..."
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password && formik.touched.password && (
            <span className={style.errorMessage}>{formik.errors.password}</span>
          )}
        </div>
        <button type="submit" className={style.submitBtn}>
          Save
        </button>
      </form>
    </>
  );
}
