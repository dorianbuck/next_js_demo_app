import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import Loader from "../components/Loader";

export default function Home() {
  return (
    <div>
      <Loader show={true} />
      <Link
        prefetch={false}
        href={{
          pathname: "/[username]",
          query: { username: "dorianbuck" },
        }}
      >
        <a>Dorian's profile page</a>
      </Link>
    </div>
  );
}
