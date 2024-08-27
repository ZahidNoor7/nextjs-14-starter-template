"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";

/**
 * StoreProvider Component:
 * Provides the Redux store and persistence using Redux-Persist's PersistGate.
 * @param children The child components to render within the provider.
 * @returns The Provider component wrapped with PersistGate for Redux store persistence.
 */

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Use useRef to ensure store and persistor are created only once
  const storeRef = useRef<AppStore | null>(null);

  // If the store is not initialized, create it using makeStore
  if (!storeRef.current) {
    const { store, persistor } = makeStore(); // Destructure store and persistor
    storeRef.current = { store, persistor };
  }

  // Render the Provider and PersistGate components
  return (
    <Provider store={storeRef.current?.store}>
      {/* PersistGate to persist and rehydrate the store */}
      <PersistGate
        // loading={"Loading..."}
        loading={
          <div className="h-screen flex items-center justify-center">
            <span className="text-2xl">Loading...</span>
          </div>
        }
        persistor={storeRef.current?.persistor}
      >
        {/* Render children only after persistence is complete */}
        {/* {() => children} */}
        {children}
      </PersistGate>
    </Provider>
  );
}
