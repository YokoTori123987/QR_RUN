import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const OwnerPage = () => {
  return (
    <>
      <MetaTags title="Owner" description="Owner page" />

      <h1>OwnerPage</h1>
      <p>
        Find me in <code>./web/src/pages/OwnerPage/OwnerPage.js</code>
      </p>
      <p>
        My default route is named <code>owner</code>, link to me with `
        <Link to={routes.owner()}>Owner</Link>`
      </p>
    </>
  )
}

export default OwnerPage
