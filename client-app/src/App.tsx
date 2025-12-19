import MainPage from './Content/MainPage';
import { TranslationProvider } from "./shared/context/TranslationContext";
import CardPage from "./External Pages/Id/CardPage";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

function App() {
  return (
      <div className="App">
          <TranslationProvider>
              <Router>
                  <Routes>
                      <Route path="/" element={<MainPage />} />
                      <Route path="/card" element={<CardPage />} />
                      <Route path="/projects" element={<MainPage />} />
                      <Route path="/projects/:projectId" element={<MainPage />} />
                  </Routes>
              </Router>
          </TranslationProvider>
      </div>
  );
}

export default App;
