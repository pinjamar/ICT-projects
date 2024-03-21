import './App.css';
import Email from './components/Email';
import Contact from './components/Contact';
import Payment from './components/Payment';
import Terms from './components/Terms';

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h1>Račun --&gt; Plaćanje</h1>
      <Email />
      <Contact />
      <Payment />
      <Terms />
      <button type="submit">Naruči</button>
    </form>
  );
}

export default App;
