interface TegsNews {
  tags: []
}
interface Lines {
  lines: Line[]
}
interface Line {
  img: string
  text: string
}
interface LinesRss {
  rss: []
}


export const BlockNews = () => {
  /** Верхний блок новостей */
  return (
    <>
      <Tags tags={[]} />
      <div>Дата, день недели, время</div>
      <ListNews lines={[]} />
      <RSS rss={[]} />
    </>
  )
}

export const WidgetNewsRight = () => {
  /** Виджет справа от списка новостей */
  return (
    <>
    <img />
    <a></a>
    <div>text</div>
    </>
  )
}

const Tags = ({tags}: TegsNews) => {
  /** В блоке новостей верхняя строка с тегами */
  return (
    <div>
      {tags.map(tag => 
        <>
        <a></a>
        </>
        )}
    </div>
  )
}

const ListNews = ({lines}: Lines) => {
  /** В блоке новостей список новостей */
  return (
    <div>
      {lines.map(item => 
        <>
        <img />
        <a></a>
        </>
        )}
    </div>
  )
}

const RSS = ({rss}: LinesRss) => {
  /** Лента котировок */
  return (
    <></>
  )
}
