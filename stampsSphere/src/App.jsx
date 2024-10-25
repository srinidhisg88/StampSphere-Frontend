import { Route, Routes } from 'react-router-dom';
import Livebid from './pages/Livebid';
import Dashboard from './pages/Dashboard';
import Categories from './pages/Categories';
import AdminDashboard from './pages/AdminDashboard.jsx';
import Footer from './components/footer.jsx';
import Sidebar from './components/Sidebar.jsx';
import Header from './components/header.jsx';
const App = () => {
  return (
    <div className="h-screen flex overflow-hidden">
      {/* Sidebar - Fixed on the Left */}
      <div className="fixed left-0 top-0 h-full w-72 bg-red-300">
        <Sidebar />
      </div>

      {/* Main Content - Adjusted for Sidebar */}
      <div className="ml-72 flex-1 flex flex-col">
        <Header />
        <div className="flex-1 overflow-auto">
          <Routes>
            <Route path="/livebid" element={<Livebid />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/categories/:id" element={<Categories />} />
            <Route path="/dashboard/admin" element={<AdminDashboard />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
