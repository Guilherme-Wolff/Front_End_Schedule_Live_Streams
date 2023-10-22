import '@testing-library/jest-dom';
import "whatwg-fetch";

import { server } from "./Components/tests/server/server"

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers())

afterAll(() => server.close());
