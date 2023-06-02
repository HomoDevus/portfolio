import { FormattedMessage } from 'react-intl'
import { TOOLS } from '../../../constants'

export default function Tools() {
  return (
    <div className='tools'>
      <div className='tools__heading'>
        <div className='tools__heading-line' />
        <div className='tools__heading-text'>
          <FormattedMessage id='technologies' />
        </div>
        <div className='tools__heading-line' />
      </div>
      <div className='tools__text wrapper'>
        <div className='tools__text-inner marquee'>
          <p>
            {TOOLS.map(
              (tool, index) =>
                tool + (index !== TOOLS.length - 1 ? ' / ' : ' /'),
            )}
            &nbsp;
          </p>
          <p>
            {TOOLS.map(
              (tool, index) =>
                tool + (index !== TOOLS.length - 1 ? ' / ' : ' /'),
            )}
            &nbsp;
          </p>
        </div>
      </div>
    </div>
  )
}
