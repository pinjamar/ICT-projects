/* eslint-disable react/prop-types */
function Info(props) {
  return (
    <div className="info">
      <span className="question">{props.question}</span>
      <span className="answer">{props.answer}</span>
    </div>
  );
}
export default Info;
