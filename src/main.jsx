import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";

// import App from "./App.jsx";
import HomePage from "./routes/HomePage.jsx";
import PostListPage from "./routes/PostListPage.jsx";
import SinglePostPage from "./routes/SinglePostPage.jsx";
import LoginPage from "./routes/LoginPage.jsx";
const Writer = lazy(() => import("./routes/Writer.jsx"));
import RegisterPage from "./routes/RegisterPage.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";

import MainLayout from "./layouts/MainLayout.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
const queryClient = new QueryClient();
// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/posts",
        element: <PostListPage />,
      },
      {
        path: "/:slug",
        element: <SinglePostPage />,
      },

      {
        path: "/writer",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Writer />
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </QueryClientProvider>
    </ClerkProvider>
  </StrictMode>
);
