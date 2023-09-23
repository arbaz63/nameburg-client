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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/Sign-in" element={<SignIn />} />
      <Route path="/Sign-up" element={<SignUp />} />
      <Route path="/DomainDetails/:id" element={<DomainDetails />} />
      <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
      <Route path="/PaymentDetails" element={<PaymentDetails />} />
      <Route path="ContactUs" element={<ContactUs />} />
      <Route path="/AllDomains" element={<AllDomains />} />
      <Route path="/AllDomains/:id" element={<AllDomainsId />} />
      <Route path="/UserSettings" element={<UserSettings />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route
        path="/AdminPannel-AllDomains"
        element={<AdminPannelAllDomains />}
      />
      {/* <Route path="/AdminPannel-Login" element={<AdminPannelLogin />} /> */}
      <Route
        path="AdminPannel-ViewDomain/:id"
        element={<AdminPannelViewDomain />}
      />
      <Route
        path="AdminPannel-EditDomain/:id"
        element={<AdminPannelEditDomain />}
      />
      <Route path="/AdminPannel" element={<AdminPannel />} />
      <Route path="/Settings" element={<AdminPannelSettings />} />
      <Route path="/purchaseHistory" element={<PurchaseHistory />} />
      <Route path="/AllPurchases" element={<AllPurchases />} />
    </Routes>
  );
}

export default App;
