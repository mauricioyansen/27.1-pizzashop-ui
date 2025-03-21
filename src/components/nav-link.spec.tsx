import { render } from "@testing-library/react";
import { NavLink } from "./NavLink";
import { MemoryRouter } from "react-router";

describe("Nav Link", () => {
  it("should highlight the nav link who is currently active", () => {
    const wrapper = render(
      <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </>,
      {
        wrapper: ({ children }) => {
          return (
            <MemoryRouter initialEntries={["/about"]}>{children}</MemoryRouter>
          );
        },
      }
    );

    expect(wrapper.getByText("Home").dataset.current).toEqual("false");
    expect(wrapper.getByText("About").dataset.current).toEqual("true");
  });
});
