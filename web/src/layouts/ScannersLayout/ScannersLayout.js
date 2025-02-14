import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const ScannersLayout = ({ children }) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.scanners()} className="rw-link">
            Scanners
          </Link>
        </h1>
        <Link to={routes.newScanner()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Scanner
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default ScannersLayout
