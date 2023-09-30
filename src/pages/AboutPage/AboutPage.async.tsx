import {lazy} from "react";

// const AboutPageAsync = lazy(() => import("./AboutPage"));
const AboutPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    setTimeout(() => resolve(import("./AboutPage")), 1500)
}));

export default AboutPageAsync;