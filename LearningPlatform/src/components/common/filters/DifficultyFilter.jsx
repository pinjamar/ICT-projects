/* eslint-disable react/jsx-key */
import { tezine } from '../../../../data.json';

const DifficultyFilter = () => {
  return (
    <>
      <h1>Tezine</h1>
      <p>
        {tezine.map((val) => (
          <p>{val.ime}</p>
        ))}
      </p>
    </>
  );
};

export default DifficultyFilter;
