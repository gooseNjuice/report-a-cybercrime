import React from 'react'
import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { render, cleanup } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import canada from '../../../theme/canada'
import { MemoryRouter } from 'react-router-dom'
import { NextAndCancelButtons } from '../'
import en from '../../../locales/en.json'

i18n.load('en', { en })
i18n.activate('en')

describe('<NextAndCancelButtons />', () => {
  afterEach(cleanup)

  it('properly renders next button with cancel button beside', () => {
    const { getAllByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider theme={canada}>
          <I18nProvider i18n={i18n}>
            <NextAndCancelButtons button="Next: Confirm information" />
          </I18nProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )
    //There is only one next and one cancel button
    expect(getAllByText(/Next/)).toHaveLength(1)
    expect(getAllByText(/button.cancelReport/)).toHaveLength(1)

    //The cancel button returns to="/"
    expect(document.querySelector('button[to]').getAttribute('to')).toBe(
      '/confirmCancel',
    )
    //The submit button submits
    expect(
      document.querySelector('button[type="submit"]').getAttribute('type'),
    ).toBe('submit')
  })
})
