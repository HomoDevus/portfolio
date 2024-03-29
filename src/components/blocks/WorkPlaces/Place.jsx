export default function Place({
  companyName,
  position,
  description,
  websiteHref,
  startRow,
  descriptionSpan,
}) {
  return (
    <>
      <p className='work-place__position' style={{ gridRow: startRow }}>
        {position}
      </p>
      <h3 className='work-place__company-name'>
        <a className='link' href={websiteHref} target='_blank' rel='noreferrer'>
          {companyName}
        </a>
      </h3>
      <p
        className='work-place__description'
        style={descriptionSpan && { gridRow: `span ${descriptionSpan}` }}
      >
        {description}
      </p>
    </>
  )
}
