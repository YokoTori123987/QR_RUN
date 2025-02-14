import { Link, routes } from '@redwoodjs/router'

import Scanners from 'src/components/Admin/Scanner/Scanners'

export const QUERY = gql`
  query FindScanners {
    scanners {
      id
      parkId
      longitude
      latitude
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No scanners yet. '}
      <Link to={routes.newScanner()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ scanners }) => {
  return <Scanners scanners={scanners} />
}
