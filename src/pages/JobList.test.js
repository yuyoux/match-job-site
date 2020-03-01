import React from "react";
import JobList from "./JobList";
import { render, waitForElement, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { job } from "../common/testdata";

afterEach(cleanup);

const mockAxios = {
  get: jest.fn().mockResolvedValue({ data: {} })
};

describe("test suite: Check list page", () => {
  test("case: correcting getting jobs data", async () => {
    const { getAllByTestId } = render(<JobList />);
    mockAxios.get.mockResolvedValueOnce({
      data: {
        jobs: [job]
      }
    });
    const resolvedSpan = await waitForElement(() =>
      getAllByTestId("job-fetch")
    );
    expect(resolvedSpan).toHaveLength(2);
  });
});
