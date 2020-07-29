// tslint:disable-next-line:no-console
import * as React from "react";
import { Provider } from "react-redux";
import store from './store';

import { Home } from "./pages";

import "./App.css";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
