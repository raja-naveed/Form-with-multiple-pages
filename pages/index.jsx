
import Form from "@/components/Form";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <Head>
        <title>Boilerplate</title>
      </Head>

      <main>
       <Form/>
      

      </main>
    </>
  );
}
