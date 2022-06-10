import Place from "./Place";
import { FormattedDate, useIntl } from "react-intl";

export default function WorkPlaces() {
  const Intl = useIntl()

  return (
    <div className='work-places'>
      <div className='work-places__timing__left-padding' />
      <h2 className='work-places__timing__year timing__item' style={{ gridRow: '2 / span 2' }}>
        <FormattedDate
          value={new Date('2021')}
          year="numeric"
        />
      </h2>
      <h4 className='timing__item' style={{ gridRow: 4 }}>
        <FormattedDate
          value={new Date('2021 august')}
          month='long'
        />
      </h4>
      <div style={{ gridRow: 'span 2' }} className='timing__months-container'>
        <p className='timing__item'>
          <FormattedDate
            value={new Date('2021 september')}
            month='long'
          />
        </p>
        <p className='timing__item'>
          <FormattedDate
            value={new Date('2021 october')}
            month='long'
          />
        </p>
        <p className='timing__item'>
          <FormattedDate
            value={new Date('2021 november')}
            month='long'
          />
        </p>
      </div>
      <h4 className='timing__item'>
        <FormattedDate
          value={new Date('2021 december')}
          month='long'
        /> 🎄</h4>
      <div className='timing__months-container'>
        <h2 className='work-places__timing__year timing__item'>
          <FormattedDate
            value={new Date('2022')}
            year="numeric"
          />
        </h2>
        <p className='timing__item'>
          <FormattedDate
            value={new Date('2022 january')}
            month='long'
          /> 😷</p>
        <p className='timing__item'>
          <FormattedDate
            value={new Date('2022 february')}
            month='long'
          />
        </p>
        <p className='timing__item'>
          <FormattedDate
            value={new Date('2022 march')}
            month='long'
          />
        </p>
        <p className='timing__item'>
          <FormattedDate
            value={new Date('2022 april')}
            month='long'
          />
        </p>
        <p className='timing__item'>
          <FormattedDate
            value={new Date('2022 may')}
            month='long'
          />
        </p>
        <p className='timing__item'>
          <FormattedDate
            value={new Date('2022 june')}
            month='long'
          />
        </p>
      </div>
      <div className='work-places__time-line' />
      <Place
        startRow={3}
        companyName={Intl.formatMessage({id: 'yandex_title'})}
        position={Intl.formatMessage({id: 'yandex_position'})}
        description={Intl.formatMessage({id: 'yandex_description'})}
        websiteHref={Intl.formatMessage({id: 'yandex_href'})}
      />
      <Place
        companyName={Intl.formatMessage({id: 'lexicom_title'})}
        position={Intl.formatMessage({id: 'lexicom_position'})}
        description={Intl.formatMessage({id: 'lexicom_description'})}
        websiteHref={Intl.formatMessage({id: 'lexicom_href'})}
      />
      <div className='work-places__timing__right-padding' />
    </div>
  )
}