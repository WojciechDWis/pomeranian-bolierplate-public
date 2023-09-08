import './styles.css';
import jsSvg from '../../Images/tech-stack/js.svg';
import reactSvg from '../../Images/tech-stack/react.svg';
import vscSvg from '../../Images/tech-stack/vscode-alt 1.png';

export const TechStack = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-tech-stack-container">
        <p>
          Poniżej znajdziesz tech stack oraz narzędzia jakie nauczysz sie
          podczas kursu
        </p>

        <div className="dashboard-tech-stack-flex">
          <img src={jsSvg} alt="javascript" />
          <img src={reactSvg} alt="react" />
          <img src={vscSvg} alt="VSC" />
        </div>
      </div>
    </div>
  );
};
