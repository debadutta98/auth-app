import Card from "../components/Card";
import { Noto_Sans } from "next/font/google";
import Image from "next/image";

const notoSans = Noto_Sans({
  style: "normal",
  preload: false,
  weight: ["600", "500", "400", "300"],
});

/**
 * @type {import('next').Metadata}
 */
export const metadata = {
  title: "Login",
  description: "User Login",
};

export default function LoginLayout({ children }) {
  return (
    <html lang="en">
      <body className={notoSans.className}>
        <Card width="40%">
          <Image
            src="/icon/devchallenges.svg"
            alt="brand"
            width={120}
            height={40}
          />
          {children}
        </Card>
      </body>
    </html>
  );
}
