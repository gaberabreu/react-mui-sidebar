import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import SideBar from "./SideBar";

describe("SideBar", () => {
  it("should render children properly when open", () => {
    const { getByText } = render(<SideBar open>Help</SideBar>);

    expect(getByText("Help")).toBeInTheDocument();
  });

  it("should render children properly when closed", () => {
    const { getByText } = render(<SideBar open={false}>Help</SideBar>);

    expect(getByText("Help")).toBeInTheDocument();
  });
});
