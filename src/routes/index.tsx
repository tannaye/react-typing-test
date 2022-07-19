import { Routes, Route } from "react-router-dom";

//404 page
import NotFound from "pages/notFound";

import Home from "pages/home/Home";

const Router = () => {
  return (
    <Routes>
      {/* home  */}
      <Route path="/" element={<Home />} />

      {/* not found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
