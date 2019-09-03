import React from 'react'
import ReactGA from 'react-ga'
import Component from '@reach/component-component'
import { Location } from '@reach/router'

const GA = process.env.RAZZLE_GOOGLE_ANALYTICS_ID

ReactGA.initialize(GA, {
  testMode: process.env.NODE_ENV === 'production' ? false : true,
})
ReactGA.set({ anonymizeIp: true })

const logPageView = path => {
  if (typeof window === 'object') {
    ReactGA.pageview(path)
  }
}

export const TrackPageViews = () => (
  <Location>
    {({ location }) => (
      <Component
        didMount={() => logPageView(location.pathname)}
        didUpdate={() => logPageView(location.pathname)}
      />
    )}
  </Location>
)
