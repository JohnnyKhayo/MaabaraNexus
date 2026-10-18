import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import SampleList from "./pages/SampleList";

import NotFound from "./pages/NotFound";
import AddSample from "./pages/AddSample";
import SampleDetail from "./pages/SampleDetail";


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/samples" element={<SampleList />} />
          <Route path="/samples/new" element={<AddSample />} />
          <Route path="/samples/:id" element={<SampleDetail />} />


        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App