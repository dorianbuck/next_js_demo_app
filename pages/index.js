import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import toast from "react-hot-toast";
import Loader from "../components/Loader";

export default function Home() {
  return (
    <div>
      <button onClick={() => toast.success("Success!")}>Toast Me!</button>
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
