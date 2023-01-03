import arrowIcon from '../../../assets/img/Arrow 5.svg';
import github from '../../../assets/img/github.svg';
import telegram from '../../../assets/img/telegram.svg'
import linkedin from '../../../assets/img/icons8-linkedin-circled.svg'
import { FormattedMessage, useIntl } from 'react-intl';

export default function Footer() {
  const Intl = useIntl()

  return (
    <footer className="footer">
      <div className="footer__about-me">
        <h6><FormattedMessage id="about_me_title" /></h6>
        <p><FormattedMessage
          id="about_me_text"
          values={{
            school_name: <a
              href="https://academy.yandex.ru/schools/frontend"
              target="_blank"
              rel="noreferrer">{Intl.formatMessage({ id: 'yandex_school_name' })}
            </a>
          }} />
        </p>
      </div>
      <div className="footer__contacts">
        <h6><FormattedMessage id="contacts" /></h6>
        <div className="footer__contacts__items-container">
          <a href="#" className="footer-link footer__contacts__item">
            <img src={github} alt="github icon" className="footer__contacts__item__icon" />
            <p className="link">GitHub</p>
            <img src={arrowIcon} alt="arrow icon" className="footer__contacts__item__arrow top-right-arrow" />
          </a>
          <a href="#" className="footer-link footer__contacts__item">
            <img src={telegram} alt="telegram icon" className="footer__contacts__item__icon" />
            <p className="link"><FormattedMessage id="telegram" /></p>
            <img src={arrowIcon} alt="arrow icon" className="footer__contacts__item__arrow top-right-arrow" />
          </a>
          <a href="#" className="footer-link footer__contacts__item">
            <img src={linkedin} alt="linkedin icon" className="footer__contacts__item__icon" />
            <p className="link">LinkedIn</p>
            <img src={arrowIcon} alt="arrow icon" className="footer__contacts__item__arrow top-right-arrow" />
          </a>
          <a href={Intl.formatMessage({ id: 'resume_href' })} className="footer-link footer__contacts__item">
            <p className="link"><FormattedMessage id="resume" /></p>
            <img src={arrowIcon} alt="arrow icon" className="footer__contacts__item__arrow" />
          </a>
          <a href="tel:+79805263597" className="footer-link footer__contacts__item">
            <p className="link" style={{ whiteSpace: 'nowrap' }}>+7 (980) 526 35 97</p>
          </a>
          <a href="mailto:lavrovslava207@gmail.com" className="footer-link footer__contacts__item">
            <p className="link">lavrovslava207@gmail.com</p>
          </a>
        </div>
      </div>
    </footer>
  )
}