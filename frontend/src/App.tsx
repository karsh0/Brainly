import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Homepage } from "./Pages/Homepage"
import { Signin } from "./Pages/Signin"
import { Signup } from "./Pages/Signup"
import { DocumentPage } from "./Pages/DocumentPage"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/dashboard" element={<Homepage/>}/>
      <Route path="/documents" element={<DocumentPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
