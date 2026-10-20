import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import SampleList from "./pages/SampleList";
import AddSample from "./pages/AddSample";
import SampleDetail from "./pages/SampleDetail";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>}/>

          <Route
            path="/samples"
            element={
              <ProtectedRoute>
                <SampleList />
              </ProtectedRoute>}/>

          <Route
            path="/samples/new"
            element={
              <ProtectedRoute>
                <AddSample />
              </ProtectedRoute>}/>

          <Route
            path="/samples/:id"
            element={
              <ProtectedRoute>
                <SampleDetail />
              </ProtectedRoute>}/>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;