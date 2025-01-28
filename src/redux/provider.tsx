"use client"
import React, { useEffect, useState } from 'react';
import store, { persistor } from '../redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Preloader from '@/components/common/Preloader';

const ReduxProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {
          isLoading ?
            <>
              <Preloader />
            </>
            :
            <>
              {children}
            </>
        }

      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
