import './config/matchMedia.mock';
import '@testing-library/jest-dom';
import axios, { AxiosResponse } from "axios"
import { QueryClient, QueryClientProvider } from "react-query"
import { fireEvent, render, waitFor, getByLabelText } from "@testing-library/react"
import { screen } from '@testing-library/react'
import Search from "../search/Search"
import userEvent from '@testing-library/user-event';
import { InsertInputByPlaceholder } from "./utils-test/utilsTests"
import {renderComponentSetup} from "./utils-test/RenderComponent";

const queryClient = new QueryClient();


describe("Recent Users Search", () => {
  it("should render correctly", async () => {
    renderComponentSetup(<Search />)

    expect(screen.getByText("Recent")).toBeTruthy();

    await waitFor(() => {
      InsertInputByPlaceholder("Search", "test");
      expect(screen.getByText("name1")).toBeTruthy();
    })
  })
  it("request users seacrhed correctly", async () => {
    renderComponentSetup(<Search />)

    expect(screen.getByText("Recent")).toBeTruthy();
    //let responseData:AxiosResponse;

    let responseData: AxiosResponse;


    await waitFor(() => {
      axios.get("http://localhost:8080/recentusers").then((res) => {
        console.log("RESPOSTA TEST SEARCH", res.data)
        return responseData = res
      })

      const status = responseData.status;

      expect(status).toBe(200);

    })
  })


})

