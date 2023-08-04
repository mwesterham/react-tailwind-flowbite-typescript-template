import './App.css';
import { Button } from 'flowbite-react';
import { Footer, Header } from './components';

function App() {
  return (
    <div className="App">
      <div>
        <Button>Click me</Button>
      </div>
      <div>
        <Header />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
