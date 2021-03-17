import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from './App';
import Main from './components/main/main'


let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
