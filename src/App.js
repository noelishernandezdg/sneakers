// import logo from './logo.svg';
import './App.css';
import Info from './components/Info';
import Nav from './components/Nav';
import Sample from './components/Sample';
import ShoppingCart from './components/ShoppingCart';
import User from './components/User';

function App() {
  return (
    <div className='App'>
      <div className='contentNavCartUser'>
        <Nav />
        <ShoppingCart />
        <User />
      </div>
      <div className='contentSampleInfo'>
        <Sample />
        <Info />
      </div>
    </div>
  );
}

export default App;
