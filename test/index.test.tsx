import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  test("renders a heading", async () => {
    render(<Home />);
    const element = await screen.findByText("Comienza a crear");
    // const element = screen.getByText("for testing");
    expect(element).toHaveTextContent("comenzar a crear");
  });
});
