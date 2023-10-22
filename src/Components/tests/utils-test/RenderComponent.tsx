
import '../config/matchMedia.mock';
import '@testing-library/jest-dom';
import { store, persistor } from '../../../redux/store';
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query"

import { render, screen } from "@testing-library/react"

const queryClient = new QueryClient();


export const renderSimpleComponent = (Component: JSX.Element) => {
    render(
        Component,
        { wrapper: BrowserRouter }
    )
}

export const renderComponentSetup = (Component: JSX.Element) => {
    render(
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                {Component}
            </Provider>
        </QueryClientProvider>,
        { wrapper: BrowserRouter }
    )
}

const setupRenderGetObject = (Component: JSX.Element) => {
    const utils = render(
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                {Component}
            </Provider>
        </QueryClientProvider>,
        { wrapper: BrowserRouter }
    )
    const input: HTMLInputElement = screen.getByLabelText('cost-input')
    return {
        input,
        ...utils,
    }
}

export default renderComponentSetup;