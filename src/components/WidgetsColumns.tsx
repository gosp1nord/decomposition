interface Sundries {
  sundries: []
}

export const BlockColumn = () => {
  /** Блок с тремя колонками, под блоком с рекламой */
  return (
    <>
    <div>
      <div>Погода</div>
      <WidgetSundries />
    </div>
    <div>
      <WidgetSundries />
      <WidgetSundries />
    </div>
    <div>
      <WidgetSundries />
      <WidgetSundries />
    </div>
    </>
  )
}

const WidgetSundries = () => {
  /** Блок со всякой всячиной - заголовок и список всего */
  return (
    <>
    <div>Title</div>
    <Lines sundries={[]} />
    </>
  )
}

const Lines = ({sundries}: Sundries) => {
  /** Список всякого... */
  return (
    <div>
      {sundries.map(s => 
        <>
        <a></a>
        </>
        )}
    </div>
  )
}

