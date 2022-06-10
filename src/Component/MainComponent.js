import IPSForm from "./Routes/Form/IPSForm";
import SignUp from "./Routes/Account/SignUp";
import Login from "./Routes/Account/Login";
import ProtectedRoutes from "../middleWare/ProtectedRouting/ProtectedRute";
import { Routes, Switch, Route, Navigate } from 'react-router-dom'
import SentEmail from "./Routes/Account/SentEmail";
import EmailVerified from "./Routes/Account/EmailVerified";
import ForgotPass from "./Routes/Account/ForgotPassword/ForgotPass";
import PasswordResetForm from "./Routes/Account/ForgotPassword/PasswordResetForm";
import IPSFormSubmitted from "./Routes/Form/FormSubmitted";
import ForgotPassApplied from "./Routes/Account/ForgotPassword/ForgotPassApplied";
import SuccessPasswordReset from "./Routes/Account/ForgotPassword/SuccessPasswordReset";



const MainComponent = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/Signup' element={<SignUp />} />
            <Route path='/SentEmail' element={<SentEmail />} />
            <Route path='/EmailVerified' element={<EmailVerified />} />
            <Route path='/ForgotPass' element={<ForgotPass />} />
            <Route path='/ProvideNewPass/:uid/:email' element={<PasswordResetForm />} />
            <Route path='/Email_sent_for_new_password/:email' element={<ForgotPassApplied />} />
            <Route path='/PasswordReset_Successfully' element={<SuccessPasswordReset />} />
            <Route element={<ProtectedRoutes />}>
                <Route path="/IPSForm" element={<IPSForm />} />
                <Route path="/FormSubmitted" element={<IPSFormSubmitted />} />
            </Route>
            <Route
                path="*"
                element={<Navigate to="/IPSForm" replace />}
            />
        </Routes>
    );
}

export default MainComponent;