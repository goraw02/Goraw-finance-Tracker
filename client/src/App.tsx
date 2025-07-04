import "./App.css";
import { Routes, Route, Link, Navigate, useLocation } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { Auth } from "./pages/auth";
import { FinancialRecordsProvider } from "./contexts/financial-record-context";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

function App() {
  const location = useLocation();
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route
        path="/*"
        element={
          <div className="app-container">
            <div className="navbar">
              <Link to="/"> Dashboard</Link>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <SignedIn>
                      <FinancialRecordsProvider>
                        <Dashboard />
                      </FinancialRecordsProvider>
                    </SignedIn>
                    <SignedOut>
                      <Navigate to="/auth" state={{ from: location }} replace />
                    </SignedOut>
                  </>
                }
              />
            </Routes>
          </div>
        }
      />
    </Routes>
  );
}

export default App;