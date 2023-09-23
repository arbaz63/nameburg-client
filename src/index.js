import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { useLocation } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { AuthProvider } from "./AuthContext"; // Import your context

function ConditionalFooter() {
  const location = useLocation();
  // const hideFooterRoutes = [
  //   "/Sign-in",
  //   "/sign-up",
  //   "/AdminPannel-AllDomains",
  //   "/AdminPannel-Login",
  //   "/AdminPannel-ViewDomain/*",
  //   "/AdminPannel-EditDomain/*",
  //   "/AdminPannel",
  //   "/Settings",
  // ];
  const hideFooterRoutes = [
    "/Sign-in",
    "/sign-up",
    "/AdminPannel-AllDomains",
    "/AdminPannel-Login",
    "/AdminPannel",
    "/Settings",
    "/AllPurchases",
  ];
  const shouldHideFooter = hideFooterRoutes.some((route) =>
    location.pathname.startsWith(route)
  );
  return shouldHideFooter ? null : <Footer />;
}

function ConditionalNavbar() {
  const location = useLocation();
  // const routesToHideNavbar = [
  //   "/AdminPannel-AllDomains",
  //   "/AdminPannel-Login",
  //   "/AdminPannel-ViewDomain/*",
  //   "/AdminPannel-EditDomain/*",
  //   "/AdminPannel",
  //   "/Settings",
  // ];
  const routesToHideNavbar = [
    "/AdminPannel-AllDomains",
    "/AdminPannel-Login",
    "/AdminPannel",
    "/Settings",
    "/AllPurchases",
  ];

  const shouldHideNavbar = routesToHideNavbar.some((route) =>
    location.pathname.startsWith(route)
  );
  return shouldHideNavbar ? null : <Navbar />;
}

const stripePromise = loadStripe(
  "pk_test_51NkLyjGAlP2vZLRLClzOe8EsDQeatTduQkIUyIuwRdzB2HdwfuSFQNVnaFw09wsqWLnj6QHUS6gMqGw6M3WnZEO200muuH9yyq"
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <BrowserRouter>
        <AuthProvider>
          <ConditionalNavbar />
          <App />
          <ConditionalFooter />
        </AuthProvider>
      </BrowserRouter>
    </Elements>
  </React.StrictMode>
);

reportWebVitals();
