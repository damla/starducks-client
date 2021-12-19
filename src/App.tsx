import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemProvider, FilterProvider } from './contexts';
import { Home, Error } from './pages/';

function App() {
  return (
    <ItemProvider>
      <FilterProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </FilterProvider>
    </ItemProvider>
  );
}

export default App;
