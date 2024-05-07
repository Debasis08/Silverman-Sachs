import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import './App.css'
import AppHeader from './Components/AppHeader';
import AppHero from './Components/Hero';
import AppAbout from './Components/AppAbout';
import AppServices from './Components/AppServices';
import AppWork from './Components/AppWork';
import AppTeams from './Components/AppTeams';
import AppTestimonials from './Components/AppTestimonials';
import AppPricing from './Components/AppPricing';
import AppBlog from './Components/AppBlog';
import AppContact from './Components/AppContact';
import AppFooter from './Components/AppFooter';

function App() {

  return (
    <>
      <div className='App'>
        <header id='header'>
          <AppHeader />
        </header>
        <main className='w-100 h-auto d-flex flex-column'>
          <AppHero />
          <AppAbout />
          <AppServices />
          <AppWork />
          <AppTeams />
          <AppTestimonials />
          <AppPricing />
          <AppBlog />
          <AppContact />
        </main>
        <footer id='footer'>
          <AppFooter />
        </footer>
      </div>
    </>
  )
}

export default App
