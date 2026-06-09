import { useLocation, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Blog from '../pages/Blog'
import Projects from '../pages/Projects'

const PAGE_ANIMATIONS = {
  '/': 'page-anim--home',
  '/blog': 'page-anim--blog',
  '/projects': 'page-anim--projects',
}

function PageTransition() {
  const location = useLocation()
  const animClass = PAGE_ANIMATIONS[location.pathname] ?? 'page-anim--home'

  return (
    <div key={location.pathname} className={`page-transition ${animClass}`}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  )
}

export default PageTransition
