import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  test("renders a heading", () => {
    render(<Home />);
    const element = screen.getByText("for testing");
    expect(element).toHaveTextContent("for testing");
  });
});
