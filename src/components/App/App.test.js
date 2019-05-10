import React from "react";
import { mount } from "enzyme";
import Root from "../../Root";
import App from "./App";
import { NOCMedals } from "../NOCMedals/NOCMedals";
import { SportList } from "../SportList/SportList";

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Root>
      <App />
    </Root>
  );
});

afterEach(() => {
  wrapper.unmount();
});

it("creates the App component succesfully", () => {
  expect(wrapper).toBeTruthy();
});

it("renders the NOCMedals component", () => {
  expect(wrapper.find(NOCMedals).length).toEqual(1);
});

it("renders the SportList component", () => {
  expect(wrapper.find(SportList).length).toEqual(1);
});
