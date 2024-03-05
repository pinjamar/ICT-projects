/* eslint-disable react/prop-types */
function Skills(props) {
  return (
    <div className="skill-card">
      <p className="skill-name">{props.skill}</p>
      <div className="progress">
        <div className="level" style={{ width: `${props.width}%` }}>
          {props.percentage}
        </div>
      </div>
    </div>
  );
}
export default Skills;
