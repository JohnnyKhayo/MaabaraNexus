import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import SampleList from "./pages/SampleList";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import AddSample from "./pages/AddSample";
import SampleDetail from "./pages/SampleDetail";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./pages/Register";


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/samples"
            element={
              <ProtectedRoute>
                <SampleList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/samples/new"
            element={
              <ProtectedRoute>
                <AddSample />
              </ProtectedRoute>
            }
          />
          <Route
            path="/samples/:id"
            element={
              <ProtectedRoute>
                <SampleDetail />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;