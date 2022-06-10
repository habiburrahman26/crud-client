import { Route, Routes } from 'react-router-dom';
import AllRecord from './components/Pages/AllRecord';
import EditRecord from './components/Pages/EditRecord';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllRecord />} />
        <Route path="/record/edit/:id" element={<EditRecord />} />
      </Routes>
    </div>
  );
}

export default App;
