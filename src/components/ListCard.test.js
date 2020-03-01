import React from "react";
import ListCard from "./ListCard";
import { job } from "../common/testdata";
import { render } from "@testing-library/react";

describe("test suite: Check Card Content", () => {
  const selectJob = jest.fn();
  const { getByTestId } = render(<ListCard job={job} selectJob={selectJob} />);

  test("case: info exists", () => {
    expect(getByTestId("info")).toBeTruthy();
  });
});
