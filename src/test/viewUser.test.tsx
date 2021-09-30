import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import ViewEmployeeDetails from "../containers/viewUser/view";
import renderer from "react-test-renderer";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<ViewEmployee/>", () => {
  const Component = () => (
    <Provider store={store}>
      <ViewEmployeeDetails />
    </Provider>
  );

  it("renders correctly", () => {
    const tree = renderer.create(<Component />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders default state values", () => {
    const { getByTestId } = render(<Component />);
    const addUser = getByTestId("addUserDetails");
    fireEvent.click(addUser);
    expect(addUser).not.toHaveClass("Mui-disabled");
  });
});
