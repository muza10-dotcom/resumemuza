
import './App.css'
import Navbar from './assets/components/Navbar/Navbar'
import Homepage from './assets/components/Homepage/Homepage'
import TechStack from './assets/components/TechStack/TechStack'
import Experience from './assets/components/Experience/Experience'
import Projects from './assets/components/Projects/Projects'

function App() {
 

  return (
    <div className='app'>
      <Navbar/>
      <Homepage/>
      <TechStack/>
      <Experience/>
      <Projects/>
    </div>
    )
}

export default App
