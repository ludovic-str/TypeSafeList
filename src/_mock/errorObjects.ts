const objectWithErrorClass = [
  {
    label: "Error",
    value: new Error("Error"),
  },
];

const nonConstantFormatedObjects = [
  {
    label: "test",
    value: {
      test: "test",
    },
  },
  {
    label: "test 2",
    value: 12,
  },
];

const nonConstantNonFormatedObjects = [
  {
    id: "1",
    name: "Name",
  },
  {
    id: 2,
    name: "Name 2",
  },
];

export { objectWithErrorClass, nonConstantFormatedObjects, nonConstantNonFormatedObjects };
