import Head from "next/head";
import NavbarSection from "../sections/navbar";
import BodySection from "../sections/body";

export default function Home() {
  return (
    <div>
      <NavbarSection />
      <BodySection />
    </div>
  );
}
