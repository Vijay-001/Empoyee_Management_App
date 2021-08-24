import { QueryClient, QueryClientProvider } from 'react-query';
import Navigation from './Navigation/Navigation';
import { Provider } from 'react-redux';
import Appbar from './Component/Appbar';
import { HashRouter } from 'react-router-dom';
import { store } from './Store/store';
import { StylesProvider } from "@material-ui/core/styles";

const queryClient = new QueryClient();


const App: React.FC<{}> = props => {
    return (
        <HashRouter>
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                  <StylesProvider injectFirst>
                   <div>
                    <Appbar />
                    <Navigation />
                  </div>
                  </StylesProvider>
                </QueryClientProvider>
            </Provider>
        </HashRouter>
      )
}


export default App;
