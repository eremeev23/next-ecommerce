import '~/styles/global.scss';
import type { AppProps } from 'next/app';
import { Provider } from "react-redux";
import { store } from "~/store";
import { TheHeader } from "~/components/base/TheHeader";
import { TheFooter } from "~/components/base/TheFooter";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <TheHeader />
      <div>
        <Component {...pageProps} />
      </div>
      <TheFooter />
    </Provider>
  )
}
