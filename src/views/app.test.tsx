import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

describe("App", () => {
  test("renders correct title with React Router", () => {
    render(
      <Router>
        <App />
      </Router>,
    );

    // Check if the title is rendered correctly
    const titleElement = screen.getByText(/Canine Classifier V2/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders correct link with React Router", () => {
    render(
      <Router>
        <App />
      </Router>,
    );

    // Check if the link is rendered correctly
    const linkElement = screen.getByRole("link", { name: /Upload doggo/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/results"); // Ensure link leads to 'results' route

    // Simulate a click event on the link
    fireEvent.click(linkElement);

    // Check if the URL changes to the expected value
    expect(window.location.pathname).toBe("/results");
  });
});
