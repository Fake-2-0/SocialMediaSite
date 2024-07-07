import Home from "./Pages/Home/Home";
import { Login } from "./Pages/Login/Login";
import {BrowserRouter, Routes, Route, Outlet, Navigate} from "react-router-dom"
import { Register } from "./Pages/Register/Register";
import Navbar from "./components/Navbar/Navbar";
import Leftbar from "./components/Leftbar/Leftbar";
import Rightbar from "./components/Rightbar/Rightbar";
import Profile from "./Pages/Profile/Profile";
import './style.css'
import { useContext } from "react";
import { LoginContext } from "./Context/LoginContext";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()


const Layout = ()=>{
  return (
    <QueryClientProvider client={queryClient}>
    <div>
      <Navbar/>
      <div style={{display: "flex"}}>
        <Leftbar/>
        <div style={{flex: "6"}}>
          <Outlet/>
        </div>
        <Rightbar/>
      </div>
    </div>
    </QueryClientProvider>
  )
}





function App() {

  const {currentUser} = useContext(LoginContext); 

  const ProtectedRoute = ({children}) =>{
    if(!currentUser){
      return <Navigate to="/login"/>
    }
  
    return children
  }
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/'
        element={<ProtectedRoute><Layout/></ProtectedRoute>}
        >
          <Route path="/" element={<Home/>}></Route>
          <Route path="/profile/:id" element={<Profile/>}></Route>
        </Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </BrowserRouter>
    
    // <Home/>
  );
}

export default App;
