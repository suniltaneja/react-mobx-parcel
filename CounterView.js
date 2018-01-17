import React from "react";
import { observer } from "mobx-react";

const CounterView = observer(({ store }) => (
  <button onClick={store.increment}>Count: {store.count}</button>
));

export default CounterView;
