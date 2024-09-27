import React from "react";
import ReactDOM from "react-dom/client"
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import BookstoreService from "./services/book-store";
import { BookstoreServiceProvider } from "./components/bookstore-service-context";
import store from './store';

const booktoreService = new BookstoreService();

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <ErrorBoundry>
      <BookstoreServiceProvider value={booktoreService}>
        <Router>
          <App />
        </Router>
      </BookstoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  // </React.StrictMode>,
)
