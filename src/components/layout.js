import { Helmet } from "react-helmet"
import Header from "./header"

const Layout = ({ children }) => (
  <>
    <Helmet>
      <title>Movie App</title>
    </Helmet>

    <Header />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      <div className="max-w-3xl mx-auto">{children}</div>
    </div>
  </>
)

export default Layout
