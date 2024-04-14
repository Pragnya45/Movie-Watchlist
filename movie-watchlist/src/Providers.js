import { store } from "./Redux";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "sonner";
import { ThemeProvider } from "./Components/ThemeProvider";

export const persistor = persistStore(store);

export default function Providers({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={false} persistor={persistor}>
        <Toaster position="top-center" richColors />
        <ThemeProvider>
          <Router>{children}</Router>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
