import './App.css';
import MainCarousel from './components/MainCarousel';
import NavBar from './components/NavBar';

function App() {
  return (
    /*     <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<div>HOME</div>} />
        <Route path="/events" element={<div>EVENTS</div>} />
        <Route path="/services" element={<div>SERVICES</div>} />
      </Route>
    </Routes> */
    <>
      <NavBar />
      <MainCarousel />
    </>
  );
}

export default App;
