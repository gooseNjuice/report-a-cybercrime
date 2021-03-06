import { Route } from 'react-router-dom'
import React from 'react'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { Lead } from './components/paragraph'
import { Layout } from './components/layout'
import { LocationInfoForm } from './forms/LocationInfoForm'
import { TrackPageViews } from './TrackPageViews'
import { BackButton } from './components/backbutton'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from './utils/state'

export const LocationPage = () => {
  const [data, dispatch] = useStateValue()
  const { doneForms } = data

  return (
    <Route
      render={({ history }) => (
        <Layout>
          <TrackPageViews />

          <Stack spacing={10} shouldWrapChildren>
            <BackButton route="/evidence">
              <Trans id="locationPage.backButton" />
            </BackButton> 
              <H1 >
                <Trans id="locationPage.title" />
              </H1>
            <Lead>
              <Trans id="locationPage.intro" />
            </Lead>

            <LocationInfoForm
              onSubmit={data => {
                dispatch({ type: 'saveFormData', data: { location: data } })
                history.push(doneForms ? '/confirmation' : '/contactinfo')
              }}
            />
          </Stack>
        </Layout>
      )}
    />
  )
}
