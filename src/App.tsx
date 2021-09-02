import { QueryClient, QueryClientProvider } from 'react-query';
import Navigation from './navigation/navigation';
import { Provider } from 'react-redux';
import Header from './component/Headers/Headers';
import { HashRouter } from 'react-router-dom';
import { store } from './store/index';
import { StylesProvider } from "@material-ui/core/styles";

const queryClient = new QueryClient();


const App: React.FC<{}> = props => {
    return (
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
      )
}


export default App;
