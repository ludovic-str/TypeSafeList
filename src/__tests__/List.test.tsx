import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import List from "../components/List";

test("Render empty list cimponent", () => {
  render(<List items={[]} />);

  const cards = document.getElementsByClassName("list-card");
  expect(cards.length).toBe(0);
});
