import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import SignIn from "./components/Sign-in/SignIn";
import SignUp from "./components/Sign-up/SignUp";
import DomainDetails from "./components/DomainDetails/DomainDetails";
import TermsAndConditions from "./components/TermsAndConditions/TermsAndConditions";
import PaymentDetails from "./components/PaymentDetails/PaymentDetails";
import ContactUs from "./components/ContactUs/ContactUs";
import AllDomains from "./components/AllDomains/AllDomains";
import UserSettings from "./components/UserSettings/UserSettings";
import AboutUs from "./components/AboutUs/AboutUs";
import AdminPannelAllDomains from "./components/AdminPannelAllDomains/AdminPannelAllDomains";
import AdminPannelViewDomain from "./components/AdminPannel-ViewDomain/AdminPannelViewDomain";
import AdminPannel from "./components/AdminPannel/AdminPannel";
import AdminPannelSettings from "./components/AdminPannelSettings/AdminPannelSettings";
import AllDomainsId from "./components/AllDomains/AllDomainsId";
import { PurchaseHistory } from "./components/PaymentDetails/PurchaseHistory";
import AdminPannelEditDomain from "./components/AdminPannel/AdminPannel-EditDomain";
import { AllPurchases } from "./components/AllDomains/AllPurchases";
import ProtectedRoute from "./ProtectedRoutes";
import ProtectedRouteUser from "./ProtectedRoutesUser";
import React, { useEffect } from "react";
import NotFound from "./NotFound";
import AllDomainsPremium from "./components/AllDomains/AllDomainsPremium";
import AllCategories from "./components/AllDomains/AllCategories";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/Sign-in" element={<SignIn />} />
      <Route path="/Sign-up" element={<SignUp />} />
      <Route path="/DomainDetails/:id" element={<DomainDetails />} />
      <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/AllDomains" element={<AllDomains />} />
      <Route path="/AllDomainsPremium" element={<AllDomainsPremium />} />
      <Route path="/AllCategories" element={<AllCategories />} />
      <Route path="/AllDomains/:id" element={<AllDomainsId />} />
      <Route path="/AboutUs" element={<AboutUs />} />

      {/* <Route path="/UserSettings" element={<UserSettings />} /> */}
      {/* <Route path="/purchaseHistory" element={<PurchaseHistory />} /> */}
      {/* <Route path="/PaymentDetails" element={<PaymentDetails />} /> */}

      <Route element={<ProtectedRouteUser />}>
        <Route element={<UserSettings />} path="/UserSettings" />
      </Route>
      <Route element={<ProtectedRouteUser />}>
        <Route element={<PurchaseHistory />} path="/purchaseHistory" />
      </Route>
      <Route element={<ProtectedRouteUser />}>
        <Route element={<PaymentDetails />} path="/PaymentDetails" />
      </Route>
      {/* <Route
        path="/AdminPannel-AllDomains"
        element={<AdminPannelAllDomains />}
      /> */}
      {/* <Route path="/AdminPannel-Login" element={<AdminPannelLogin />} /> */}
      {/* <Route
        path="AdminPannel-ViewDomain/:id"
        element={<AdminPannelViewDomain />}
      /> */}
      {/* <Route
        path="AdminPannel-EditDomain/:id"
        element={<AdminPannelEditDomain />}
      /> */}
      {/* <Route path="/AdminPannel" element={<AdminPannel />} /> */}
      {/* <Route path="/Settings" element={<AdminPannelSettings />} /> */}
      {/* <Route path="/AllPurchases" element={<AllPurchases />} /> */}

      {/* <Route path="/" element={<Dashboard />}>
        <Route
          path="/AdminPannel-AllDomains"
          element={
            <ProtectedRoute>
              <AdminPannelAllDomains />
            </ProtectedRoute>
          }
        />
      </Route> */}
      <Route element={<ProtectedRoute />}>
        <Route
          element={<AdminPannelAllDomains />}
          path="/AdminPannel-AllDomains"
        />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route
          element={<AdminPannelViewDomain />}
          path="/AdminPannel-ViewDomain/:id"
        />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route
          element={<AdminPannelEditDomain />}
          path="/AdminPannel-EditDomain/:id"
        />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route element={<AdminPannel />} path="/AdminPannel" />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route element={<AdminPannelSettings />} path="/Settings" />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route element={<AllPurchases />} path="/AllPurchases" />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
