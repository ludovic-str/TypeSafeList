import React from "react";

import "./App.css";
import List from "./components/List";
import listItemsReducer from "./utils/listItemsReducer";

import quotes from "./_mock/quotes";
import users from "./_mock/users";
import brands from "./_mock/brands";
import complexUsers from "./_mock/complexUsers";
import { objectWithErrorClass, nonConstantNonFormatedObjects } from "./_mock/errorObjects";

const App = () => {
  return (
    <div className="App">
      <List items={listItemsReducer(quotes, "author", "title")} />
      <List items={listItemsReducer(users, "username", "email")} />
      <List items={listItemsReducer(brands, "name", "sells")} />
      <List items={listItemsReducer(complexUsers, "username", "address")} />
      <List items={listItemsReducer(nonConstantNonFormatedObjects, "id", "name")} />
      <List items={objectWithErrorClass} />
    </div>
  );
};

export default App;
