import React from "react";
import { observer } from "mobx-react";

const TimerView = observer(({ appState }) => (
  <button onClick={appState.reset}>Seconds passed: {appState.timer}</button>
));

export default TimerView;
