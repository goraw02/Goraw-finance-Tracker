import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import "../../pages/auth/auth.css";

export const Auth = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="brand-title">GoRaw Finance</h2>
        <SignedOut>
          <h1>Welcome to Your Own Personal Finance Tracker!</h1>
          <div className="auth-buttons">
            <SignUpButton mode="modal">
              <button>Sign Up</button>
            </SignUpButton>
            <SignInButton mode="modal">
              <button>Sign In</button>
            </SignInButton>
          </div>
        </SignedOut>
        <SignedIn>
          <Navigate to="/" />
        </SignedIn>
      </div>
    </div>
  );
};
