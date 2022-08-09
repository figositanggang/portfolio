import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

// Routes
import HomeRoute from "./routes/home_route";
import AboutRoute from "./routes/about_route";
import GallerytRoute from "./routes/gallery_route";
import UnkownRoute from "./routes/unknown_route";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<HomeRoute />} />
        <Route path="about" element={<AboutRoute />} />
        <Route path="gallery" element={<GallerytRoute />} />
      </Route>
      <Route path="*" element={<UnkownRoute />} />
    </Routes>
  </BrowserRouter>
);
