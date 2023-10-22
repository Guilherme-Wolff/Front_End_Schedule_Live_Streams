import './config/matchMedia.mock';
import '@testing-library/jest-dom';
import axios, { AxiosResponse } from "axios"

import { screen ,fireEvent, render,
        waitFor, getByLabelText } 
from "@testing-library/react"

import userEvent from '@testing-library/user-event';
import { InsertInputByPlaceholder } from "./utils-test/utilsTests"
import {renderComponentSetup} from "./utils-test/RenderComponent";

import Stories from "../StoriesBar/Story"

describe("Recent Users Search", () => {
  it("should render correctly", async () => {
    /*const {getByAltText} = render(<Stories />)
    getByAltText("gulherme1");*/
    renderComponentSetup(<Stories />)

    //expect(screen.getByText("gulherme1")).toBeTruthy();

    await waitFor(() => {
      //InsertInputByPlaceholder("Search", "test");
      expect(screen.getByText("gulherme1")).toBeTruthy();
      expect(screen.getByText("gulherme15")).toBeTruthy();
    })
  })
})

