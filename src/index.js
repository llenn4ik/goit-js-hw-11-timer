import refs from './js/refs';
import CountdownTimer from './js/count-time';
import './styles.css';

const countdownTimer = new CountdownTimer({
  //   selector: '#timer-1',
  selector: refs.timer,
  targetDate: new Date('Aug, 17, 2020'),
});

countdownTimer.timeUpdate();