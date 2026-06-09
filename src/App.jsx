import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageMeta from './components/PageMeta'
import PageTransition from './components/PageTransition'

function App() {
  return (
    <div className="app">
      <PageMeta />
      <Navbar />
      <main>
        <PageTransition />
      </main>
      <Footer />
    </div>
  )
}

export default App
