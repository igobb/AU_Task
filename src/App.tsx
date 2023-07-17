import "./App.scss";

import { Suspense } from "react";
import Header from "./components/Header/Header";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Routes from "./routes/Routes";
import Loading from "./components/Loading/Loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="app__wrapper">
      <ErrorBoundary>
        <Header />
        <Suspense fallback={<Loading />}>
          <Routes />
        </Suspense>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </ErrorBoundary>
    </div>
  );
}

export default App;
