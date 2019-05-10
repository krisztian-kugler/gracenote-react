import React from "react";
import { shallow } from "enzyme";
import Sport from "./Sport";
import Medal from "../Medal/Medal";
import Participant from "../Participant/Participant";

let wrapper, props;

beforeEach(() => {
  props = {
    sport: {
      Sport: {
        c_Name: "sport"
      },
      Medals: {
        n_Gold: 2,
        n_Silver: 4,
        n_Bronze: 0
      },
      GoldMedalList: [1, 2],
      SilverMedalList: [1, 2, 3, 4],
      BronzeMedalList: []
    }
  };
  wrapper = shallow(<Sport {...props} />);
});

it("renders the name of the sport in the header", () => {
  const sportName = props.sport.Sport.c_Name;

  expect(wrapper.find(".sport-name").text()).toEqual(sportName);
});

it("renders the correct number of medal types in the header", () => {
  let numberOfMedalTypes = 0;

  for (let key in props.sport.Medals) {
    if (props.sport.Medals[key] > 0) {
      numberOfMedalTypes++;
    }
  }

  expect(wrapper.find(Medal).length).toEqual(numberOfMedalTypes);
});

it("renders all medallists in the table body", () => {
  const total = [...props.sport.GoldMedalList, ...props.sport.SilverMedalList, ...props.sport.BronzeMedalList].length;

  expect(wrapper.find(Participant).length).toEqual(total);
});
