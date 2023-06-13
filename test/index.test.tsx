import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  test("renders a heading", async () => {
    render(<Home />);
    const elements = await screen.findAllByText("Comienza a crear");
    const element = elements[0];
    expect(element).toBeVisible();
  });
});
