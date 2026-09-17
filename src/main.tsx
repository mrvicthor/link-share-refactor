import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.tsx";
import Layout from "./components/layout.tsx";
import { UserContextProvider } from "./context/userProvider.tsx";
import WelcomeScreen from "./pages/welcomeScreen.tsx";
import Profile from "./pages/profile.tsx";
import Preview from "./pages/preview.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route element={<Layout />}>
              <Route index element={<WelcomeScreen />} />
              <Route path="profile" element={<Profile />} />
            </Route>
            <Route path="preview/:id" element={<Preview />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  </StrictMode>,
);
