import MainPage from './Content/MainPage';
import { TranslationProvider } from "./shared/context/TranslationContext";

function App() {
  return (
      <div className="App">
          <TranslationProvider>
            <MainPage/>
          </TranslationProvider>
      </div>
  );
}

export default App;