import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/auth";
import SignIn from "./pages/auth/signin";
import SignUp from "./pages/auth/signup";
import HomePage from "./pages/home";
import ThemeProvider from "./lib/theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />

            {/* auth routes */}
            <Route path="auth" element={<Auth />}>
              <Route path="signin" element={<SignIn />} />
              <Route path="signup" element={<SignUp />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
