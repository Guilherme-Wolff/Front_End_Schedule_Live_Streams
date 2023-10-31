import './config/matchMedia.mock';
import '@testing-library/jest-dom';
import reportWebVitals from '../../reportWebVitals';
import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query"

import { Provider } from "react-redux"
import { store, persistor } from '../../redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { ApiProvider } from "@reduxjs/toolkit/query/react"
import { apiSlice } from "../../redux/api/apiSlice"

import Profile from '../Profile/Profile'
import Explore from '../Explore/Explore'
import Inbox from '../Chat/Inbox'
import Ayub from '../Chat/Chat'
import {Login} from "../../Pages/Registration/Login";
//import Slick from "../Slick";
import {Register} from "../../Pages/Registration/Register";

import { render } from "@testing-library/react"
import { screen } from '@testing-library/dom'
import '@testing-library/jest-dom';
import Sidebar from '../Sidebar/Sidebar'
import Home from "../Home/Home"
import {renderComponentSetup} from "./utils-test/RenderComponent";

const queryClient = new QueryClient();

describe("Sidebar Buttons", () => {
    it("should render correctly", () => {
        
        renderComponentSetup(<Sidebar />)
        /*render(
            <Sidebar />,
            { wrapper: BrowserRouter }
        )*/

        expect(screen.getByText("home")).toBeTruthy();
        expect(screen.getByText("Search")).toBeTruthy();
        expect(screen.getByText("Interesting")).toBeInTheDocument();
        expect(screen.getByText("Reels")).toBeInTheDocument();
        expect(screen.getByText("Messages")).toBeInTheDocument();
        expect(screen.getByText("Messages")).toBeInTheDocument();
        expect(screen.getByText("Notifications")).toBeInTheDocument();
        expect(screen.getByText("Create")).toBeInTheDocument();
        expect(screen.getByText("Profile")).toBeInTheDocument();
        expect(screen.getByText("More")).toBeInTheDocument();
    })
})


/*<QueryClientProvider client={queryClient}>
    <ApiProvider api={apiSlice} >
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <RouterProvider router={router} />
            </PersistGate >
        </Provider>
    </ApiProvider>
</QueryClientProvider>,
*/
