
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import {Container} from 'react-bootstrap';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Header />
      <Container fluid style={{
        width: '100%',
        height: 500,
        backgroundColor: 'blue'
      }}>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
