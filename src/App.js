
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import './App.css';
import { ChatAppProvider } from './Context/chatAppContext';
import {Filter, Friend, Navbar} from './components/index';
import AllUser from './components/AllUser/AllUser';



function App() {
  return (
    <div className="App">
      <ChatAppProvider>
        <BrowserRouter>
        <Routes>
        <Route path='all_user' element={<AllUser/>} />
        </Routes>
      </BrowserRouter>
      
      <Navbar/>
      <Filter/>
      <Friend/>
      </ChatAppProvider>

    </div>
  );
}

export default App;
