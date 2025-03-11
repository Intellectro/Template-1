import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Overview from "./pages/Overview";
import { useEffect, useState } from "react";
import Loading from "./components/temp/Loader";
const App = () => {
  const [pageIsLoading, setPageLoader] = useState<boolean>(true);
  const handlePageLoader = (): void => {
    setTimeout(() => {
      setPageLoader(false);
    },3000);
  }

  useEffect(() => {
    const unsubscribeHandler = handlePageLoader();
    return unsubscribeHandler;
  }, []);
  return(
    <Router>
      <Routes>
        <Route path="/" element={pageIsLoading ? <Loading /> : <Overview />} />
      </Routes>
    </Router>
  );
}

export default App;