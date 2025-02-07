import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { GithubProvider } from './context/github/GithubContext';
import Alert from './components/layout/Alert';
import User from './pages/User';
import { AlertProvider } from './context/alert/alertContext';
function App() {
  return (
    <AlertProvider>
        <GithubProvider>
          <Router>
            <div className='flex flex-col justify-between h-screen text-white'>
              <Navbar />
              <main className='container mx-auto px-3 pb-12'>
                <Alert/>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/user/:login' element={<User/>} />
                  <Route path='/notfound' element={<NotFound />} />
                  <Route path='/*' element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </GithubProvider>
    </AlertProvider>
  );
}

export default App;
