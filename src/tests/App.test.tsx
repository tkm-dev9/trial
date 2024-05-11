import { render, screen } from "@testing-library/react";
import App from "../App";

test("render text", () => {
  render(<App />);
  screen.debug();
  expect(screen.getByText("App")).toBeInTheDocument();
});
