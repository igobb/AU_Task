import "./App.scss";

import { Suspense } from "react";
import Header from "./components/Header/Header";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Routes from "./routes/Routes";
import Loading from "./components/Loading/Loading";

function App() {
  return (
    <div className="app__wrapper">
      <ErrorBoundary>
        <Header />
        <Suspense fallback={<Loading />}>
          <Routes />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
