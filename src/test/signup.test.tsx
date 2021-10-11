import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import { fireEvent, render } from "@testing-library/react";
import Signup from "../containers/signUp/signup";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<Signup/>", () => {
  const fieldprops = {
    first_name: "",
    id: "",
    last_name: "",
    email: "",
    avatar: "",
    password: "",
  };

  const SignupComponent = () => (
    <Provider store={store}>
      <Signup userInfo={fieldprops} />
    </Provider>
  );

  it("renders default state values", () => {
    const { getByTestId } = render(<SignupComponent />);
    const password = getByTestId("userAccountPassword") as HTMLInputElement;
    const email = getByTestId("userAccountEmail") as HTMLInputElement;
    const submit = getByTestId("submitUserDetails");
    fireEvent.click(submit);
    expect(password.value).toBe("");
    expect(email.value).toBe("");
    expect(submit).toHaveClass("Mui-disabled");
  });

  it("disabled submit for invalid emailId and password", () => {
    const { getByTestId } = render(<SignupComponent />);
    const email = getByTestId("userAccountEmail");
    const password = getByTestId("userAccountPassword");
    const button = getByTestId("submitUserDetails");
    fireEvent.keyUp(email, { target: { value: "vkooogmail" } });
    fireEvent.keyUp(password, { target: { value: "data100" } });
    expect(button).not.toHaveClass("Mui-disabled");
  });
});
