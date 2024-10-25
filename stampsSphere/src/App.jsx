import { Route, Routes } from 'react-router-dom';
import Livebid from './pages/Livebid';
import Dashboard from './pages/Dashboard.jsx';
import Categories from './pages/Categories';
import AdminDashboard from './pages/AdminDashboard.jsx';
import Footer from './components/Footer.jsx';
import Sidebar from './components/Sidebar.jsx';
import Header from './components/Header.jsx';
import Login from './pages/login.jsx';
import Register from './pages/Register.jsx';
import { store } from './store';
import { Provider } from 'react-redux';
import HeroSection from './components/HeroSection.jsx';
const App = () => {
  return (
    <div className="h-screen flex overflow-hidden">
      <Provider store={store}>
        {/* Sidebar - Fixed on the Left */}
        <div className="fixed left-0 top-0 h-full w-72 bg-custom-red">
          <Sidebar />
        </div>

        {/* Main Content - Adjusted for Sidebar */}
        <div className="ml-72 flex-1 flex flex-col">
          {/* Fixed Header */}
          <div className="fixed top-0 left-72 right-0 h-16 bg-white shadow z-50">
            <Header />
          </div>
          
          {/* Main Content - Below Header */}
          <div className="flex-1 overflow-auto pt-16">
            <Routes>
              <Route path="/" element={<HeroSection/>} />
              <Route path="/livebid" element={<Livebid />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/categories/:id" element={<Categories />} />
              <Route path="/dashboard/admin" element={<AdminDashboard />} />
            </Routes>
          </div>

          {/* Footer - Below Main Content */}
            <Footer />
        </div>


      </Provider>
    </div>
  );
};

export default App;
