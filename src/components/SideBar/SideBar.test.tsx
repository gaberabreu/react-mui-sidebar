import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import SideBar from "./SideBar";

describe("SideBar", () => {
  it("should render children when open", () => {
    const { getByText } = render(<SideBar open>MyContent</SideBar>);

    const children = getByText(/MyContent/i);
    expect(children).toBeInTheDocument();
  });

  it("should not render children when not open", () => {
    const { queryByText } = render(<SideBar>MyContent</SideBar>);

    const children = queryByText(/MyContent/i);
    expect(children).not.toBeInTheDocument();
  });
});
