// 7.React Routing: Set up React Router in an application to navigate between
//  a Home page and a Users page.
// MERN_DEVELOPER_ASSIGNMENT\1.MERN_STACK\7.React_Routing\client\src\App.jsx
// import './App.css'
import { Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';

function App() {
  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </>
  )
}

export default App
