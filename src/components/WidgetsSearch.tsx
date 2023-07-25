interface TegsSearch {
  tags: []
}

export const BlockSearch = () => {
  /** Виджет поиска */
  return (
    <>
    <TagsSearch tags={[]} />
    <div>
      <input />
      <button></button>
    </div>
    <div>
      <div>Найдется все...</div>
      <a></a>
    </div>
    </>
  )
}

const TagsSearch = ({tags}: TegsSearch) => {
  /** В блоке поиска верхняя строка с тегами */
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

