import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div onScroll={(e) => e.preventDefault()}>
      <Navbar />
      <HomePage />

      <Footer />
    </div>
  );
}

export default App;
