/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { Trans } from '@lingui/macro'
import { I18n } from '@lingui/react'
import { ApolloConsumer } from 'react-apollo'
import { H2 } from '../components/header'
import { Text } from '../components/text'
import { Link } from '../components/link'
import { getWhatHappened } from '../utils/queriesAndMutations'

const SectionHeader = props => (
  <H2
    fontSize={[3, null, 4]}
    marginTop={[2, null, 3]}
    marginBottom={[1, null, 1]}
    {...props}
  />
)

const EditButton = props => (
  <Link type="button" color="black" textAlign="center" {...props}>
    <Trans>Edit</Trans>
  </Link>
)

const timeFrameSummary = () => {
  let timeFrame
  return (
    <React.Fragment>
      <SectionHeader>
        <Trans>Timeframe</Trans>{' '}
        <I18n>
          {({ i18n }) => (
            <EditButton
              aria-label={i18n._('Edit timeframe')}
              to="/p2/timeframe"
            />
          )}
        </I18n>
      </SectionHeader>
      {timeFrame ? (
        <Text>{timeFrame}</Text>
      ) : (
        <Text>
          <Trans>
            When the scam took place is crucial information for police to be
            able to investigate.
          </Trans>
        </Text>
      )}
    </React.Fragment>
  )
}

const whatHappenedSummary = client => {
  let { whatHappened } = getWhatHappened(client)

  return (
    <React.Fragment>
      <SectionHeader>
        <Trans>Scam</Trans>{' '}
        <I18n>
          {({ i18n }) => (
            <EditButton
              aria-label={i18n._('Edit what happened')}
              to="/p2/whathappened"
            />
          )}
        </I18n>
      </SectionHeader>
      {whatHappened ? (
        <Text>{whatHappened}</Text>
      ) : (
        <Text>
          <Trans>
            Knowing what made this illegal is critical for police to be able to
            investigate.
          </Trans>
        </Text>
      )}
    </React.Fragment>
  )
}

const scammerSummary = () => {
  let scammerInfo
  return (
    <React.Fragment>
      <SectionHeader>
        <Trans>Scammer</Trans>{' '}
        <I18n>
          {({ i18n }) => (
            <EditButton
              aria-label={i18n._('Edit scammer information')}
              to="/p2/scammerinfo"
            />
          )}
        </I18n>
      </SectionHeader>
      {scammerInfo ? (
        <Text>{scammerInfo}</Text>
      ) : (
        <Text>
          <Trans>
            Any clues about the scammer’s identity or proof from supporting
            documents helps police.
          </Trans>
        </Text>
      )}
    </React.Fragment>
  )
}

const impactSummary = () => {
  let impact
  return (
    <React.Fragment>
      <SectionHeader>
        <Trans>Impact</Trans>{' '}
        <I18n>
          {({ i18n }) => (
            <EditButton aria-label={i18n._('Edit impact')} to="/p2/impact" />
          )}
        </I18n>
      </SectionHeader>
      {impact ? (
        <Text>{impact}</Text>
      ) : (
        <Text>
          <Trans>
            Understanding the impact of these crimes helps us better support
            people affected.
          </Trans>
        </Text>
      )}
    </React.Fragment>
  )
}

const contactSummary = () => {
  let contact
  return (
    <React.Fragment>
      <SectionHeader>
        <Trans>Contact</Trans>{' '}
        <I18n>
          {({ i18n }) => (
            <EditButton
              aria-label={i18n._('Edit contact information')}
              to="/p2/contact"
            />
          )}
        </I18n>
      </SectionHeader>
      {contact ? (
        <Text>{contact}</Text>
      ) : (
        <Text>
          <Trans>This gives police a way to reach you, if needed.</Trans>
        </Text>
      )}
    </React.Fragment>
  )
}

export const ConfirmationSummary = () => (
  <ApolloConsumer>
    {client => {
      client.writeData({
        data: { doneForms: true },
      })
      return (
        <React.Fragment>
          {timeFrameSummary(client)}
          {whatHappenedSummary(client)}
          {scammerSummary(client)}
          {impactSummary(client)}
          {contactSummary(client)}
        </React.Fragment>
      )
    }}
  </ApolloConsumer>
)