import logo from './logo.svg';
import './App.css';
import MyButton from './components/MyButton';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  const navHeading = "Navigation Bar"
  const navText = "Sosmed"

  const clicked =() => {
    return alert("button di pencet");
  }

  const paragraf = () => {
    return(
      <div>
        <h3>mantap bang</h3>
        <i>horee</i>
        <marquee>jos gandos</marquee>
      </div>
    ); 
  };

  return (
    <div className="App">
      <header className="App-header">
        <Navbar text={navText} heading={navHeading}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          HALO CUY
        </p>
        <MyButton click={clicked}/>
        <Footer paragrf={paragraf}/>
      </header>
    </div>
  );
}
export default App;
