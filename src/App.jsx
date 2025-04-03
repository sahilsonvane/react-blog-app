import { useEffect } from "react"
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import {login,logout} from "./store/authSlice"
import { Outlet } from "react-router-dom";
import {Header, Footer} from "./components/index"

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if (userData) {
        dispatch(login({userData}))
      } else{
        dispatch(logout())
      }
    })
  },[])

  return (

    <>
      <Header />
        <main>
          <Outlet />
        </main>
      <Footer/>     
    </>
  )
 
}

export default App
