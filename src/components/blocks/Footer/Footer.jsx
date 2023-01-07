import arrowIcon from '../../../assets/img/Arrow 5.svg'
import github from '../../../assets/img/github.svg'
import telegram from '../../../assets/img/telegram.svg'
import linkedin from '../../../assets/img/icons8-linkedin-circled.svg'
import { FormattedMessage, useIntl } from 'react-intl'

export default function Footer() {
  const Intl = useIntl()

  return (
    <footer className="footer" id="about">
      <div className="footer__about-me">
        <h6>
          <FormattedMessage id="about_me_title" />
        </h6>
        <p>
          <FormattedMessage
            id="about_me_text"
            values={{
              school_name: (
                <a
                  href="https://academy.yandex.ru/schools/frontend"
                  target="_blank"
                  rel="noreferrer"
                >
                  {Intl.formatMessage({ id: 'yandex_school_name' })}
                </a>
              ),
            }}
          />
        </p>
      </div>
      <div className="footer__contacts">
        <h6>
          <FormattedMessage id="contacts" />
        </h6>
        <div className="footer__contacts__items-container">
          <div>
            <a
              href="https://github.com/HomoDevus"
              className="footer-link footer__contacts__item"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="github icon" className="footer__contacts__item__icon" />
              <p>GitHub</p>
              <img
                src={arrowIcon}
                alt="arrow icon"
                className="footer__contacts__item__arrow top-right-arrow"
              />
            </a>
          </div>
          <div>
            <a
              href="https://t.me/Its_Eternity"
              className="footer-link footer__contacts__item"
              target="_blank"
              rel="noreferrer"
            >
              <img src={telegram} alt="telegram icon" className="footer__contacts__item__icon" />
              <p>
                <FormattedMessage id="telegram" />
              </p>
              <img
                src={arrowIcon}
                alt="arrow icon"
                className="footer__contacts__item__arrow top-right-arrow"
              />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/slava-lavrov-879089230/"
              className="footer-link footer__contacts__item"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="linkedin icon" className="footer__contacts__item__icon" />
              <p>LinkedIn</p>
              <img
                src={arrowIcon}
                alt="arrow icon"
                className="footer__contacts__item__arrow top-right-arrow"
              />
            </a>
          </div>
          <div>
            <a
              href={Intl.formatMessage({ id: 'resume_href' })}
              className="footer-link footer__contacts__item"
            >
              <p>
                <FormattedMessage id="resume" />
              </p>
              <img src={arrowIcon} alt="arrow icon" className="footer__contacts__item__arrow" />
            </a>
          </div>
          <div>
            <a href="tel:+79805263597" className="footer-link footer__contacts__item">
              <p style={{ whiteSpace: 'nowrap' }}>+7 (980) 526 35 97</p>
            </a>
          </div>
          <div>
            <a href="mailto:lavrovslava207@gmail.com" className="footer-link footer__contacts__item">
              <p>lavrovslava207@gmail.com</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
