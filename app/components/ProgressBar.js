import '../styles/progressbar.css';

const ProgressBar = ({ step, totalSteps }) => {
  const progressPercentage = (step / totalSteps) * 100;

  return (
    <div className="progressBackground">
      <div
        className="progressFill"
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
