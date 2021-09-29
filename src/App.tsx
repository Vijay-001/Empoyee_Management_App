import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";
import Navigation from "./navigation/navigation";
import Header from "./component/header/appBar";
import { store } from "./store/index";

const queryClient = new QueryClient();

const App = () => (
  <HashRouter>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <StylesProvider injectFirst>
          <div>
            <Header />
            <Navigation />
          </div>
        </StylesProvider>
      </QueryClientProvider>
    </Provider>
  </HashRouter>
);

export default App;
