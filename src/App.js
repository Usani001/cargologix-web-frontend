import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from '../src/pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage';
import OtpVerificationPage from './pages/OtpVerificationPage';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/broker/DashboardPage';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateProfilePage from './pages/broker/CreateProfilePage';
import BrokerUnboardingPage from './pages/broker/BrokerUnboardingPage';
import AddJobPage from './pages/broker/AddJobPage';
import BillingInProgressPage from './pages/broker/BillingInProgressPage';



function App() {
  
  return (
    <div >
    <Router>
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login-user" element={<LoginPage />} />
        <Route path="/register-user" element={<RegistrationPage />} />
        <Route path="/user-otp-verification" element={<OtpVerificationPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/create-profile" element={<CreateProfilePage />} />
        <Route path="/broker-unboarding" element={<BrokerUnboardingPage />} />
        <Route path="/add-job" element={<AddJobPage />} />
        <Route path="/billing-page" element={<BillingInProgressPage />} />
        
    </Routes>
    <ToastContainer />
      </Router>
      
       
    </div>
  );
}

export default App;
