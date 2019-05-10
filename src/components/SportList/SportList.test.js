import React from "react";
import { shallow } from "enzyme";
import { SportList } from "./SportList";
import Sport from "../Sport/Sport";

let wrapper, props;

beforeEach(() => {
  props = {
    sportList: [
      {
        Sport: {
          n_ID: 1
        }
      },
      {
        Sport: {
          n_ID: 2
        }
      }
    ]
  };
  wrapper = shallow(<SportList {...props} />);
});

it("should render the correct number of Sport components", () => {
  expect(wrapper.find(Sport).length).toEqual(props.sportList.length);
});
