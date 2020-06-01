import React from "react";
import { shallow } from "enzyme";
import NotFoundExpensePage from "../../components/NotFoundExpensePage";

test("should render NotFoundExpensePage component", () => {
  const wrapper = shallow(<NotFoundExpensePage />);
  expect(wrapper).toMatchSnapshot();
});
