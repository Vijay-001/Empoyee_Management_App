import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import UserEditModal from "../containers/editUser/edit";
import { fireEvent, render } from "@testing-library/react";

const mockStore = configureMockStore();
const store = mockStore({});

describe("<editUser/>", () => {
  const fieldprops = {
    first_name: "",
    id: "",
    last_name: "",
    email: "",
    avatar: "",
    password: "",
  };

  const EditComponent = () => (
    <Provider store={store}>
      <UserEditModal
        show
        onClose={() => false}
        mode="Edit"
        userInfo={fieldprops as any}
      />
    </Provider>
  );

  it("disabled submit for invalid emailId and password", async () => {
    const { getByTestId } = render(<EditComponent />);
    const firstname = getByTestId("firstname") as HTMLInputElement;
    const email = getByTestId("email") as HTMLInputElement;
    const lastname = getByTestId("lastname") as HTMLInputElement;
    const saveButton = await getByTestId("saveButton");
    expect(firstname.value).toBe("");
    expect(lastname.value).toBe("");
    expect(email.value).toBe("");
    fireEvent.click(saveButton);
    expect(saveButton).not.toHaveClass("Mui-disabled");
  });
});
