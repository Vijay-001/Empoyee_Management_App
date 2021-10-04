import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import { fireEvent, render } from "@testing-library/react";
import AdminLogin from "../containers/userLogin/login";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<AdminLogin/>", () => {
  const fieldprops = {
    first_name: "",
    id: "",
    last_name: "",
    email: "",
    avatar: "",
    password: "",
  };

  const LoginComponent = () => (
    <Provider store={store}>
      <AdminLogin userInfo={fieldprops} />
    </Provider>
  );

  it("renders default state values", () => {
    const { getByTestId } = render(<LoginComponent />);
    const password = getByTestId("userAccountPassword") as HTMLInputElement;
    const email = getByTestId("userAccountEmail") as HTMLInputElement;
    const submit = getByTestId("submitUserDetails");
    fireEvent.click(submit);
    expect(password.value).toBe("");
    expect(email.value).toBe("");
    expect(submit).toHaveClass("Mui-disabled");
  });

  it("disabled submit for invalid emailId and password", () => {
    const { getByTestId } = render(<LoginComponent />);
    const email = getByTestId("userAccountEmail");
    const password = getByTestId("userAccountPassword");
    const button = getByTestId("submitUserDetails");
    fireEvent.keyUp(email, { target: { value: "vkooogmail" } });
    fireEvent.keyUp(password, { target: { value: "data100" } });
    expect(button).not.toHaveClass("Mui-disabled");
  });
});
