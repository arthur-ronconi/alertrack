import Head from "next/head";
import NavbarSection from "../sections/navbar";
import BodySection from "../sections/body";
// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <NavbarSection />
      <BodySection />
    </div>
  );
}
