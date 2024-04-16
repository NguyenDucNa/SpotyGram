import SignInForm from "./_auth/forms/SignInForm";
import SignUpForm from "./_auth/forms/SignUpForm";
import { Home } from "./_root/pages";
import { Routes, Route } from "react-router-dom";
import "./global.css";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";

const App = () => {
  return (
    <main className="flex h-screen ">
      <Routes>
        {/* Public: sign up and sign in  */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
        </Route>

        {/* Private : sign in only */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
