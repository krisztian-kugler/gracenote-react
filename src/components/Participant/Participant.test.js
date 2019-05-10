import React from "react";
import { mount } from "enzyme";
import Participant from "./Participant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../fontawesome";

let wrapper, props;

beforeEach(() => {
  props = {
    medal: "medal",
    participant: {
      Participant: {
        c_Participant: "participant"
      },
      Gender: {
        c_Name: "gender"
      },
      Event: {
        c_Name: "event"
      }
    }
  };
  wrapper = mount(
    <table>
      <tbody>
        <Participant {...props} />
      </tbody>
    </table>
  );
});

afterEach(() => {
  wrapper.unmount();
});

it("should render a medal icon with the correct medal color", () => {
  expect(wrapper.find(FontAwesomeIcon).hasClass(props.medal)).toBeTruthy();
});

it("should render the participant's name inside a table cell", () => {
  const participant = props.participant.Participant.c_Participant;

  expect(wrapper.find(".participant").text()).toEqual(participant);
});

it("should render the event type inside a table cell", () => {
  const event = `${props.participant.Gender.c_Name}'s ${props.participant.Event.c_Name}`;

  expect(wrapper.find(".event").text()).toEqual(event);
});
