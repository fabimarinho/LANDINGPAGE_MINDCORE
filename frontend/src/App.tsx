import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Differentials } from "./components/Differentials";
import { CTABanner } from "./components/CTABanner";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <a
        href="#conteudo"
        className="fixed -top-20 left-4 z-[60] rounded bg-white px-4 py-3 text-sm font-semibold text-mind-dark shadow-lg focus:top-4 focus:outline-none focus:ring-2 focus:ring-mind-blue focus:ring-offset-2"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <Services />
        <Process />
        <Differentials />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}

export default App;
