import arrowIcon from '../../../img/Arrow 5.svg';
import github from '../../../img/github.svg';
import telegram from '../../../img/telegram.svg'
import linkedin from '../../../img/icons8-linkedin-circled.svg'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__about-me'>
        <h6>About me</h6>
        <p>art direction, experience and interface design (ux-ui), product design, design systems and component
          libraries,
          branding and identities, motion design, and more.</p>
      </div>
      <div className='footer__contacts'>
        <h6>Contacts</h6>
        <div className='footer__contacts__items-container'>
          <div className='footer__contacts__item'>
            <img src={github} alt='github icon' className='footer__contacts__item__icon' />
            <a className='link' href='#'>GitHub</a>
            <img src={arrowIcon} alt='arrow icon' className='footer__contacts__item__arrow top-right-arrow' />
          </div>
          <div className='footer__contacts__item'>
            <img src={telegram} alt='telegram icon' className='footer__contacts__item__icon' />
            <a className='link' href='#'>Telegram</a>
            <img src={arrowIcon} alt='arrow icon' className='footer__contacts__item__arrow top-right-arrow' />
          </div>
          <div className='footer__contacts__item'>
            <img src={linkedin} alt='linkedin icon' className='footer__contacts__item__icon' />
            <a className='link' href='#'>LinkedIn</a>
            <img src={arrowIcon} alt='arrow icon' className='footer__contacts__item__arrow top-right-arrow' />
          </div>
          <div className='footer__contacts__item'>
            <a className='link' href='#'>Resume</a>
            <img src={arrowIcon} alt='arrow icon' className='footer__contacts__item__arrow' />
          </div>
          <div className='footer__contacts__item'>
            <a className='link' href='tel:+79805263597' style={{whiteSpace: 'nowrap'}}>+7 (980) 526 35 97</a>
          </div>
          <div className='footer__contacts__item'>
            <a className='link' href='mailto:lavrovslava207@gmail.com'>lavrovslava207@gmail.com</a>
          </div>
        </div>
      </div>
    </footer>
  )
}