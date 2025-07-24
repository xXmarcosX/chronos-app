import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import { Home } from "../../Pages/Home/Home";
import { AboutPomodoro } from "../../Pages/AboutPomodor/AboutPomodor";
import NotFound from "../../Pages/NotFound/NotFound";
import { useEffect } from "react";
import History from "../../Pages/History/History";
import Settings from "../../Pages/Settings/Settings";

function ScrollToTop() {
  const {pathname} = useLocation()

  useEffect(() => {
    window.scrollTo({top: 0, behavior: "smooth"})
  }, [pathname])

  return null
}

export default function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-pomodoro' element={<AboutPomodoro />} />
        <Route path='/history' element={<History/>}/>
        <Route path='/config' element={<Settings/>}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <ScrollToTop/>
    </BrowserRouter>
  )
}
