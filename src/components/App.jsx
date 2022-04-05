import Favicon from "react-favicon";

import GlobalStyles from "../theme/globalStyles";

export default function App() {
    return (
        <>
            <Favicon url='https://bit.ly/driven-favicon'/>
            <GlobalStyles />
            <h1>App</h1>
        </>
    )
};