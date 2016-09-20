##Interval usage
use npm install react-timer-mixin
```
npm i -S react-timer-mixin
```

```
import TimerMixin from 'react-timer-mixin';
//use
componentDidMount() {
  this.timer = setTimeout(() => {
    console.log('I do not leak!');
  }, 5000);
}
//clear
componentWillUnmount() {
  clearTimeout(this.timer);
}
```
