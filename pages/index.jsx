
import Form from "@/components/Form";
import Formone from "@/components/Formone";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {

  return (
    <>
      <Head>
        <title>Boilerplate</title>
      </Head>

      <main>
       <Form/>
       {/* <Formone/> */}
      

      </main>
    </>
  );
}
