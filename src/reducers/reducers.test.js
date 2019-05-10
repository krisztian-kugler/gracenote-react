import { dataReducer } from "./reducers";

it("handles actions with type FETCH_DATA", () => {
  const dummyAction = {
    type: "FETCH_DATA",
    payload: "dummy"
  };

  const newState = dataReducer({}, dummyAction);

  expect(newState).toEqual("dummy");
});

it("handles actions with unknown type", () => {
  const newState = dataReducer({}, {});

  expect(newState).toEqual({});
});
