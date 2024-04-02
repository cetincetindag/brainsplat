import './App.css'
import Content from './ui/Content.tsx'
//import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
//import LandingPage from './pages/LandingPage.tsx'
import TopBar from './ui/TopBar.tsx'
import LeftBar from './ui/LeftBar.tsx'

function App() {

  return (
    <div className="bg-slate-950 max-w-screen overflow-hidden h-full">
      <TopBar />
      <div className="flex flex-row">
        <LeftBar />
        <div className="flex flex-col">
          <Content />
        </div>
      </div>
    </div>
  )
}

export default App
