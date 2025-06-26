import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Dashboard } from "./Pages/Dashboard"
import { Signin } from "./Pages/Signin"
import { Signup } from "./Pages/Signup"
import { Landing } from "./Pages/Landing"
import { ThemeProvider, useTheme } from "./hooks/theme-provider"
function App() {


  return (
    <ThemeProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/contents" element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
