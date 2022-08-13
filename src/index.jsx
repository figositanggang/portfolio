import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

// Routes
import HomeRoute from "./routes/Home Route/home_route";
import AboutRoute from "./routes/About Route/about_route";
import WorkRoute from "./routes/Work Route/work_route";
import UnkownRoute from "./routes/Unknown Route/unknown_route";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<HomeRoute />} />
        <Route path="about" element={<AboutRoute />} />
        <Route path="work" element={<WorkRoute />} />
      </Route>
      <Route path="*" element={<UnkownRoute />} />
    </Routes>
  </BrowserRouter>
);
