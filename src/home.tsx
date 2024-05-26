import { Link } from 'react-router-dom';
import logo from './logo.svg';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Link
          to='/login'
          className="App-link">
          Login
        </Link>
      </header>
    </div>
  );
}

export default Home;
