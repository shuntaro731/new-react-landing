import Layout from "./components/Layout";
import { Hero } from "./components/sections/Hero";
import Numbers from "./components/sections/Numbers";

function App() {
  return (
    <Layout title="landing page">
      <Hero />
      <Numbers />
    </Layout>
  );
}

export default App;
