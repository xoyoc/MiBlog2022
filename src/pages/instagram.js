import React from "react";

import BioInstagram from "../components/bioinstagram"
import Layout from "../components/layout"
import Seo from "../components/seo"

const instagram = ({ location })=> {
    return (
        <Layout location={location} title="Xoyoc.Net || Instagram">
            <BioInstagram />
        </Layout>
    )
}

export default instagram

export const Head = () => <Seo title="Xoyoc.Net || Instagram" />