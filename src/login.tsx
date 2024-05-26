import { Link } from "react-router-dom";
import logo from './asset/logo.svg';

const Login = () => {
  return <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Login
      </p>
      <Link
        to='/'
        className="App-link">
        Home
      </Link>
    </header>
  </div>
};

export default Login;
