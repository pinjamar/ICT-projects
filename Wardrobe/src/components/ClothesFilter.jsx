import { useState } from 'react';

const ClothesFilter = () => {
  const [selectedClothes, setSelectedClothes] = useState('');

  const handleOptionChange = (event) => {
    setSelectedClothes(event.target.value);
  };
  return (
    <div className="clothes-filter">
      <p className="filter-name">Filter</p>
      <div>
        <label>
          <input
            type="radio"
            value="Majica"
            checked={selectedClothes === 'Majica'}
            onChange={handleOptionChange}
          />
          Majica
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="Suknja"
            checked={selectedClothes === 'Suknja'}
            onChange={handleOptionChange}
          />
          Suknja
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="Jakna"
            checked={selectedClothes === 'Jakna'}
            onChange={handleOptionChange}
          />
          Jakna
        </label>
      </div>
    </div>
  );
};

export default ClothesFilter;
