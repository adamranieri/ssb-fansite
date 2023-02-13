import { render, screen } from "@testing-library/react"
import App from "../App"


test("Github action works correctly", async () =>{
    render(<App/>)
    const heading = await screen.findByText(/SSBU/);// just check that the element is there
})