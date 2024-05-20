import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { NutriPage } from './pages/nutri1';
import { Nutri2Page } from './pages/nutri2';
import {Navigations} from './components/Navigation'
function App(){
  return (
    <BrowserRouter>
    <Navigations/>
      <Routes>
        <Route path="/" element={<Navigate to="/nutritec"/>} />
        <Route path="/nutritec" element={<NutriPage />} />
        <Route path="/nutritec-create" element={<Nutri2Page />} />
        <Route path="/nutritec/:id" element={<Nutri2Page />} />
      </Routes>
    </BrowserRouter>
  ) 
}
export default App