//const API :string = "http://localhost:8080"
export const API:string = process.env.REACT_APP_BACKAND_URL || "not-found"
export default {API}