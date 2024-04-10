import { useState } from 'react';

function NewClothes() {
  const [odjecaPodaci, postaviPodatke] = useState({
    vrsta: '',
    velicina: '',
    marka: '',
    boja: '',
    slika: '',
    opcije: '',
  });

  const saljiPodatke = (event) => {
    event.preventDefault();
    console.log(odjecaPodaci);
  };

  function promjenaUlaza(event) {
    const { name, value } = event.target;
    postaviPodatke({ ...odjecaPodaci, [name]: value });
  }

  return (
    <form onSubmit={saljiPodatke} className="form">
      <h3>Dodaj novu odjecu 👕</h3>
      <div className="form-element">
        <label>
          Vrsta:
          <input
            type="text"
            name="vrsta"
            value={odjecaPodaci.vrsta}
            onChange={promjenaUlaza}
            required
          />
        </label>
      </div>
      <div className="form-element">
        <label>
          Velicina:
          <input
            type="text"
            name="velicina"
            value={odjecaPodaci.velicina}
            onChange={promjenaUlaza}
            required
          />
        </label>
      </div>
      <div className="form-element">
        <label>
          Marka:
          <input
            type="text"
            name="marka"
            value={odjecaPodaci.marka}
            onChange={promjenaUlaza}
            required
          />
        </label>
      </div>
      <div className="form-element">
        <label>
          Boja:
          <input
            type="text"
            name="boja"
            value={odjecaPodaci.boja}
            onChange={promjenaUlaza}
            required
          />
        </label>
      </div>
      <div className="form-element">
        <label>
          Slika:
          <input
            type="text"
            name="velicina"
            value={odjecaPodaci.slika}
            onChange={promjenaUlaza}
            required
          />
        </label>
      </div>
      <button type="submit" className="submit-button">
        Spremi ✓
      </button>
    </form>
  );
}

export default NewClothes;
