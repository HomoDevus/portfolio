import Place from "./Place";

export default function WorkPlaces() {
  return (
    <div className='work-places'>
      <div className='work-places__timing__left-padding'/>
      <h2 className='work-places__timing__year timing__item' style={{gridRow: '2 / span 2'}}>2021</h2>
      <h4 className='timing__item' style={{gridRow: 4}}>August</h4>
      <div style={{gridRow: 'span 2'}} className='timing__months-container'>
        <p className='timing__item'>September</p>
        <p className='timing__item'>October</p>
        <p className='timing__item'>November</p>
      </div>
      <h4 className='timing__item'>December 🎄</h4>
      <div className='timing__months-container'>
        <h2 className='work-places__timing__year timing__item'>2022</h2>
        <p className='timing__item'>January 😷</p>
        <p className='timing__item'>February</p>
        <p className='timing__item'>March</p>
        <p className='timing__item'>April</p>
        <p className='timing__item'>May</p>
        <p className='timing__item'>June</p>
      </div>
      <div className='work-places__time-line'/>
      <Place
        startRow={3}
        companyName={'Yandex'}
        position={'Tester Accessor'}
        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
          ' Etiam imperdiet malesuada metus, tempus scelerisque ligula eleifend ' +
          'eget. Proin in sollicitudin lacus. Sed eu feugiat risus. Pellentesque e' +
          'u consequat turpis. '}
        websiteHref={'https://yandex.ru'}
      />
      <Place
        companyName={'Lexicom'}
        position={'Web Developer'}
        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
          ' Etiam imperdiet malesuada metus, tempus scelerisque ligula eleifend ' +
          'eget. Proin in sollicitudin lacus. Sed eu feugiat risus. Pellentesque e' +
          'u consequat turpis. '}
        websiteHref={'https://lexicom.ai'}
      />
      <div className='work-places__timing__right-padding'/>
    </div>
  )
}