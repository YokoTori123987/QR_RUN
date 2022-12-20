import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const GovernorPage = () => {
  return (
    <>
      <MetaTags title="Governor" description="Governor page" />

      <h1>GovernorPage</h1>
      <p>
        Find me in <code>./web/src/pages/GovernorPage/GovernorPage.js</code>
      </p>
      <p>
        My default route is named <code>governor</code>, link to me with `
        <Link to={routes.governor()}>Governor</Link>`
      </p>
    </>
  )
}

export default GovernorPage
