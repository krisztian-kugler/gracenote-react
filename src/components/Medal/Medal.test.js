import React from "react";
import { shallow } from "enzyme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Medal from "./Medal";

let wrapper, props;

beforeEach(() => {
  props = {
    counter: 3,
    color: "gold"
  };
  wrapper = shallow(<Medal {...props} />);
});

it("applies the correct color to the medal icon", () => {
  expect(wrapper.find(FontAwesomeIcon).hasClass(props.color)).toBeTruthy();
});

it("shows the correct amount of medals", () => {
  expect(wrapper.find(".counter").text()).toEqual(props.counter.toString());
});
