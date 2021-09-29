import Enzyme from "enzyme";
import ReactSixteenAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import "@testing-library/jest-dom/extend-expect";

Enzyme.configure({ adapter: new ReactSixteenAdapter() });
