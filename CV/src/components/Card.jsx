/* eslint-disable react/prop-types */
function Card(props) {
  return (
    <div className="card">
      <h3 className="card-title">{props.title}</h3>
      <hr />
      {props.children}
    </div>
  );
}
export default Card;
