import React from "react";
import PolicyList from "./PolicyList";
import { render, waitForElement, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { policy } from "../common/testdata";

afterEach(cleanup);

const mockAxios = {
  get: jest.fn().mockResolvedValue({ data: {} })
};

describe("test suite: Check list page", () => {
  test("case: correcting getting policy data", async () => {
    const { getAllByTestId } = render(<PolicyList />);
    mockAxios.get.mockResolvedValueOnce({
      data: {
        policies: [policy]
      }
    });
    const resolvedSpan = await waitForElement(() =>
      getAllByTestId("policy-fetch")
    );
    expect(resolvedSpan).toHaveLength(3);
  });
});
