import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Provider} from 'react-redux'
import {store} from './redux/store'
import HomePage from './pages/HomePage/HomePage';
import SignIn from './pages/SignIn/SignIn'
import User from './pages/User/User'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import './App.css';

function App() {
  return (
    <Router>
      {/* <Provider store={store}> */}
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />  
          <Route path="/sign-in" element={<SignIn />} /> 
          <Route path="/user" element={<User />} />
        </Routes>
        <Footer />
      {/* </Provider> */}
    </Router>
  )
}

export default App;
