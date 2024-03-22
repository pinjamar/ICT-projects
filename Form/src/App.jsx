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
      <div className="title">
        <h1>
          <span className="invoice-title">Račun --&gt; </span>Plaćanje
        </h1>
      </div>
      <Email />
      <Contact />
      <Payment />
      <Terms />
      <div className="button">
        <button type="submit">Naruči</button>
      </div>
    </form>
  );
}

export default App;
