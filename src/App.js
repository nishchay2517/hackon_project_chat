
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import './App.css';
import { ChatAppProvider } from './Context/chatAppContext';
import {Filter, Friend, Navbar} from './components/index';
import AllUser from './components/AllUser/AllUser';



function App() {
  return (
    <div className="App">
            <BrowserRouter>
      <ChatAppProvider>
      <Navbar/>
      <Filter/>
      <Friend/>
        <Routes>
        <Route path='all_user' element={<AllUser/>} />
        </Routes>



      </ChatAppProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
