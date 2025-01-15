import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Contact from "./contact";
import { ClerkProvider } from "@clerk/clerk-react";

import AddListing from "./add-listing";
import SeachBycategory from "./search/[category]";
import { Toaster } from "@/components/ui/toaster";
import SearchByTarget from "./SearchByTarget";
import CarDetails from "./CarDetails/[id]/CarDetails";
import Profile from "./profile";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/contact", element: <Contact /> },
  { path: "/profile", element: <Profile /> },
  { path: "/add-listing", element: <AddListing /> },
  { path: "/searching", element: <SearchByTarget /> },
  { path: "/search/:category", element: <SeachBycategory /> },
  { path: "/car-details/:id", element: <CarDetails /> }, // New Route
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
      <Toaster />
    </ClerkProvider>
  </StrictMode>
);
