import { Button } from "@material-ui/core";
import { mount, shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import ViewEmployeeDetails from "../containers/viewUser/view";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<ViewEmployee/>", () => {
  let wrapper = beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <ViewEmployeeDetails />
      </Provider>
    );
  });

  it("should match the snapshot", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  const Component = () => (
    <Provider store={store}>
      <ViewEmployeeDetails />
    </Provider>
  );

  it("render <Button /> component with Button", () => {
    const Wrapper = mount(<Component />);
    expect(Wrapper.find(Button)).toHaveLength(1);
  });
});
