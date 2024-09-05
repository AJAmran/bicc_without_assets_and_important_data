import { RouterProvider } from "react-router-dom";
import Loader from "./components/loader/Loader";
import { router } from "./routes/Routes";
import { useState } from "react";
import { useEffect } from "react";
import { Suspense } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
