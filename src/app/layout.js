import Header from "./components/Header";
import "./globals.css";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  style: "normal",
  preload: false,
  weight: ["600", "500", "400", "300"],
});

export const metadata = {
  title: "Auth App",
  description: "A Authentication App build with nodejs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={notoSans.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
