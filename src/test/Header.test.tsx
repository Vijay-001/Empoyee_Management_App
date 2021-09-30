import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Header from "../component/header/appBar";
import renderer from "react-test-renderer";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<Appbar/>", () => {
  const Component = () => (
    <Provider store={store}>
      <Header />
    </Provider>
  );

  it("renders correctly", () => {
    const tree = renderer.create(<Component />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
