import Layout from "./components/Layout";
import ContactForm from "./components/sections/ContactForm";
import Brand from "./components/sections/Brand";
import { Hero } from "./components/sections/Hero";
import { Product } from "./components/sections/Product";

function App() {
  return (
    <Layout title="landing page">
      <Hero />
      <Brand />
      <Product />
      <ContactForm />
    </Layout>
  );
}

export default App;
