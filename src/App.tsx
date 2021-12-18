import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemProvider } from './contexts';
import { Home, Error } from './pages/';

function App() {
  return (
    <ItemProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </ItemProvider>
  );
}

export default App;
