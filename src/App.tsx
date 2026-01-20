import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./features/auth/LoginPage";
import ShipmentsList from "./features/shipments/ShipmentsList";
import ProtectedRoute from "./features/auth/ProtectedRoute";
import { isAuthenticated } from "./utils/auth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Root */}
        <Route
          path='/'
          element={
            isAuthenticated() ?
              <Navigate
                to='/dashboard'
                replace
              />
            : <Navigate
                to='/login'
                replace
              />
          }
        />

        <Route
          path='/login'
          element={<LoginPage />}
        />

        <Route
          path='/dashboard'
          element={
            <ProtectedRoute>
              <ShipmentsList />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
