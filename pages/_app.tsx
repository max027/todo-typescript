import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import ContextProvider from "@/context/ContextProvider";
import { useRouter } from "next/router";
import Protected from "@/components/Protected";

const notRequired=['/','/login','/Register']
export default function App({ Component, pageProps }: AppProps) {
  const router=useRouter()
  return (
    <div className="text-white flex flex-col min-h-screen relative">

      <ContextProvider>
        <Header/>
         <main className="flex-1 flex-col flex p-4">

        {notRequired.includes(router.pathname)?(
          <Component {...pageProps} />
          ):(
            <Protected>
            <Component {...pageProps} />
          </Protected>
        )}

        </main>

      </ContextProvider>

      <Footer />
    </div>
  );
}
