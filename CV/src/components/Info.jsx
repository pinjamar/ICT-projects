/* eslint-disable react/prop-types */
function Info(props) {
  return (
    <div className="info">
      <span>{props.question}</span>
      <span>{props.answer}</span>
    </div>
  );
}
export default Info;
