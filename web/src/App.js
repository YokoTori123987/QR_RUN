import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import * as theme from 'config/chakra.config'

import { AuthProvider } from '@redwoodjs/auth'
import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './scaffold.css'
import './index.css'
const extendedTheme = extendTheme(theme)
const schedule = require('node-schedule')

// const { resetRun } = require('../../api/src/services/users/users.js')
const rule = new schedule.RecurrenceRule()
rule.second = 1
rule.tz = 'Asia/Bangkok'
const job = schedule.scheduleJob(rule, function () {
  console.log('A new day has begun in the UTC timezone!')
  // resetRun()
})
// console.log(resetRun)
console.log(job)
const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <ColorModeScript />
      <ChakraProvider theme={extendedTheme}>
        <AuthProvider type="dbAuth">
          <RedwoodApolloProvider>
            <Routes />
          </RedwoodApolloProvider>
        </AuthProvider>
      </ChakraProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
