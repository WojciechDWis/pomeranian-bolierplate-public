import { Button } from '../../Components';
import { useState } from 'react';
import './styles.css';

export function HighScore(props) {
  const [score, time] = props;
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="memo-high-score">
      <div className="memo-congrats">
        Gratulacje pobiłeś rekord twoje punkty to 60 x {score} / {time} czas w
        sekundach - XX poprzedni rekord to YY
      </div>
      <div>
        <Button
          value={isVisible ? 'Hide High Score' : 'Show High Score'}
          variant={isVisible ? 'primary' : 'secondary'}
          onClick={() => setIsVisible((prev) => !prev)}
        ></Button>
        {isVisible && <div>High Score List</div>}
      </div>
    </div>
  );
}
