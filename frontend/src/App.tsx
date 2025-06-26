import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Dashboard } from "./Pages/Dashboard"
import { Signin } from "./Pages/Signin"
import { Signup } from "./Pages/Signup"
import { Document, DocumentPage } from "./Pages/Document"
import { Landing } from "./Pages/Landing"
import { ThemeProvider, useTheme } from "./hooks/theme-provider"
import { Youtube } from "./Pages/Youtube"
import { Links } from "./Pages/Links"
import { Tweet } from "./Pages/Tweet"

function App() {


  return (
    <ThemeProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/contents" element={<Dashboard/>}/>
      <Route path="/document" element={<Document/>}/>
      <Route path="/youtube" element={<Youtube/>}/>
      <Route path="/links" element={<Links/>}/>
      <Route path="/tweet" element={<Tweet/>}/>
    </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
