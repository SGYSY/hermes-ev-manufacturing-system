// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import DatabasePage from './pages/DatabasePage';
// import VehiclePage from './pages/VehiclePage';
// import Dashboard from './components/dashboard/Dashboard'; // 导入 Dashboard 组件
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <nav className="sidebar">
//           <ul>
//             <li><Link to="/">Database Management</Link></li>
//             <li><Link to="/vehicle">Vehicle Customization</Link></li>
//             <li><Link to="/dashboard">Dashboard</Link></li> {/* 添加新的 Dashboard 链接 */}
//           </ul>
//         </nav>

//         <div className="content">
//           <Routes>
//             <Route path="/" element={<DatabasePage />} />
//             <Route path="/vehicle" element={<VehiclePage />} />
//             <Route path="/dashboard" element={<Dashboard />} /> {/* 添加新的 Dashboard 路由 */}
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SignInSide from './templates/sign-in-side/SignInSide'; // 导入 SignInSide 组件
import SignUp from './templates/sign-up/SignUp'; // 导入 SignUp 组件
import Dashboard from './templates/dashboard/Dashboard'; // 导入 Dashboard 组件
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignInSide />} /> {/* 默认显示 SignInSide 页面 */}
          <Route path="/signup" element={<SignUp />} /> {/* 路由到 SignUp 页面 */}
          <Route path="/dashboard" element={<Dashboard />} /> {/* 添加新的 Dashboard 路由 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

