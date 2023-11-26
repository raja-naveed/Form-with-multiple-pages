import store from "@/src/store";
import { Provider } from "react-redux";
import "@/styles/globals.scss";
import GetVisitor from "@/components/GetVisitor";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <GetVisitor/>
      <Component {...pageProps} />
    </Provider>
  );
}
