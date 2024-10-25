import { Route, Routes } from 'react-router-dom'
import Livebid from './pages/Livebid'
import Dashboard from './pages/Dashboard'
import Categories from './pages/Categories'
import AdminDashboard from './pages/AdminDashboard.jsx'

const App = () => {
  return (
    <div>
        <Routes>
			<Route path='/livebid' element={<Livebid/>}/>
			<Route path='/dashboard' element={<Dashboard/>}/>
			<Route path='/categories/:id' element={<Categories/>}/>
			<Route path='/dashboard/admin' element={<AdminDashboard/>}/>
		</Routes>
    </div>
  )
}

export default App