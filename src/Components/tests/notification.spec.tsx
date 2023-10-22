import { renderComponentSetup } from "./utils-test/RenderComponent";
import './config/matchMedia.mock';
import '@testing-library/jest-dom';
import { fireEvent, screen, waitFor, getByText, createEvent, getByLabelText } from "@testing-library/react";
import Sidebar from "../Sidebar/Sidebar";
import { clickByText } from "./utils-test/utilsTests"

describe("Notifications", () => {
  it("should render correctly", async () => {

    renderComponentSetup(<Sidebar />)

    clickByText('Notifications')

    await waitFor(() => {
      expect(screen.getByText("this week")).toBeTruthy();
      expect(screen.getByText("Subscriptions")).toBeTruthy();
      expect(screen.getByText("Subscribe")).toBeTruthy();
    })
  })

})
