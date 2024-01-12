import React from 'react';
import ReactDOM from 'react-dom';
import StopwatchApp from './StopwatchApp';

const App = () => {
  return (
    <div>
      <StopwatchApp />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
export default App