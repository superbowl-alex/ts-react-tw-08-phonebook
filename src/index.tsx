import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import App from '../src/components/App';
import { store, persistor } from './redux/store';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as HTMLElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/ts-react-tw-08-phonebook">
            <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
