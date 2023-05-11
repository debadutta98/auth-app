import Card from "../components/Card";
import { Noto_Sans } from "next/font/google";
import Header from "../components/Header";

const notoSans = Noto_Sans({
  style: "normal",
  preload: false,
  weight: ["600", "500", "400", "300"],
});

/**
 * @type {import('next').Metadata}
 */
export const metadata = {
  title: "Edit",
  description: "User Profile Edit",
};

export default function EditLayout({ children }) {
  return (
    <html lang="en">
      <body className={notoSans.className}>
        <Header/>
        {/* <button>
          <span
            className="material-symbols-rounded"
            style={{ textAlign: "center", marginTop: "4%" }}
          >
            arrow_back_ios
          </span>
          Back
        </button> */}
        <Card width="60%">{children}</Card>
      </body>
    </html>
  );
}
