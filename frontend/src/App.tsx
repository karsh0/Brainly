import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Homepage } from "./Pages/Homepage"
import { AddContent } from "./components/ui/AddContent"

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Homepage/>} />
    <Route path="/addcontent" element={<AddContent/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
