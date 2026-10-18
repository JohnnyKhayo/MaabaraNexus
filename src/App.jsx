import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import SampleList from "./pages/SampleList";

import NotFound from "./pages/NotFound";
import AddSample from "./pages/AddSample";


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/samples" element={<SampleList />} />
          <Route path="/samples/new" element={<AddSample />} />

        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App