/* eslint-disable react/jsx-key */
import { teme } from '../../../../data.json';

const FilterCard = () => {
  return (
    <>
      <h1>Teme</h1>
      <p>
        {teme.map((val) => (
          <p>{val.ime}</p>
        ))}
      </p>
    </>
  );
};

export default FilterCard;
