import React from "react";
import { shallow } from "enzyme";
import { NOCMedals } from "./NOCMedals";
import Medal from "../Medal/Medal";

let wrapper, props;

beforeEach(() => {
  props = {
    NOCMedals: {
      NOC: {
        c_Name: "country"
      },
      Medals: {
        n_Gold: 3,
        n_Silver: 5,
        n_Bronze: 9
      }
    }
  };
  wrapper = shallow(<NOCMedals {...props} />);
});

it("renders the country name in the header", () => {
  const country = props.NOCMedals.NOC.c_Name;

  expect(wrapper.find(".country").text()).toEqual(country);
});

it("renders the correct number of medal types in the header", () => {
  let numberOfMedalTypes = 0;

  for (let key in props.NOCMedals.Medals) {
    if (props.NOCMedals.Medals[key] > 0) {
      numberOfMedalTypes++;
    }
  }

  expect(wrapper.find(Medal).length).toEqual(numberOfMedalTypes);
});
