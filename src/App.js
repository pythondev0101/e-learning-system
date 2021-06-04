
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import {Container} from 'react-bootstrap';

function App() {
  const onChangePage = value => {
    alert('this is the value: '+ value);
  }

  return (
    <div>
      <Header onChangePage={onChangePage}/>
      <Container style={{height: 100}}></Container>
      <HomePage />
      <Container style={{height: 100}}></Container>
      <Footer />
    </div>
  );
}

export default App;
