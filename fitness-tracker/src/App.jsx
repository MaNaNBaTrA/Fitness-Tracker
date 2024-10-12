// src/App.js
import React from "react";
import Auth from "./components/Auth";
import WorkoutLog from "./components/WorkoutLog";
import ProgressChart from "./components/ProgressChart";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebaseConfig";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {!user ? (
        <Auth />
      ) : (
        <div className="flex-grow p-8">
          <WorkoutLog />
          <ProgressChart />
        </div>
      )}
    </div>
  );
}

export default App;
