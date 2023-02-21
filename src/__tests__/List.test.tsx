import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import List from "../components/List";
import listItemsReducer from "../utils/listItemsReducer";

import quotes from "../_mock/quotes";
import users from "../_mock/users";
import brands from "../_mock/brands";
import complexUsers from "../_mock/complexUsers";
import { objectWithErrorClass, nonConstantNonFormatedObjects } from "../_mock/errorObjects";

test("Render empty list component", () => {
  render(<List items={[]} />);

  const cards = document.getElementsByClassName("list-card");
  expect(cards.length).toBe(0);
});

test("Render list component with an object with only string values", () => {
  render(<List items={listItemsReducer(quotes, "author", "content")} />);

  const cards = document.getElementsByClassName("list-card");
  expect(cards.length).toBe(quotes.length);
  expect(cards[0]).toHaveTextContent(quotes[0].author);
});

test("Render list component with an object with string and number values", () => {
  render(<List items={listItemsReducer(users, "username", "age")} />);

  const cards = document.getElementsByClassName("list-card");
  expect(cards.length).toBe(users.length);
  expect(cards[0]).toHaveTextContent(users[0].username);
});

test("Render list component with an object with array values", () => {
  render(<List items={listItemsReducer(brands, "name", "sells")} />);

  const cards = document.getElementsByClassName("list-card");
  expect(cards.length).toBe(brands.length);
  expect(cards[0]).toHaveTextContent(brands[0].name);
});

test("Render list component with an object with object values", () => {
  render(<List items={listItemsReducer(complexUsers, "username", "address")} />);

  const cards = document.getElementsByClassName("list-card");
  expect(cards.length).toBe(complexUsers.length);
  expect(cards[0]).toHaveTextContent(complexUsers[0].username);
  expect(cards[0]).toHaveTextContent("[object Object]");
});

test("Render list component with an object with class values", () => {
  render(<List items={objectWithErrorClass} />);

  const cards = document.getElementsByClassName("list-card");
  expect(cards.length).toBe(objectWithErrorClass.length);
  expect(cards[0]).toHaveTextContent(objectWithErrorClass[0].label);
});

test("Render list component with an object with non constant and non formated values", () => {
  render(<List items={listItemsReducer(nonConstantNonFormatedObjects, "id", "name")} />);

  const cards = document.getElementsByClassName("list-card");
  expect(cards.length).toBe(nonConstantNonFormatedObjects.length);
  expect(cards[0]).toHaveTextContent(String(nonConstantNonFormatedObjects[0].id));
  expect(cards[0]).toHaveTextContent(nonConstantNonFormatedObjects[0].name);
});

test("Render list component with empty array in function call", () => {
  render(<List items={listItemsReducer([], "id", "name")} />);

  const cards = document.getElementsByClassName("list-card");
  expect(cards.length).toBe(0);
});
