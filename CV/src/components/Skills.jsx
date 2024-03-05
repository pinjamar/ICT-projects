/* eslint-disable react/prop-types */
function Skills(props) {
  return (
    <div>
      <p>{props.skill}</p>
      <div className="progress">
        <div className="level"></div>
      </div>
    </div>
  );
}
export default Skills;
