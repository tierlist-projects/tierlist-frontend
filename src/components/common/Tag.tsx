import * as S from '@styles/common/Tag.style'
import { useCallback } from 'react'

type Props = {
  type: string
  categoryId: number
  topicId?: number
  name: string
}

const Tag = ({ type, categoryId, topicId, name }: Props) => {
  const onClick = useCallback((e: React.MouseEvent<Element, MouseEvent>) => {
    e.stopPropagation()
  }, [])

  return (
    <S.Container
      to={
        type === 'category'
          ? `/tierlist/${categoryId}`
          : `/tierlist/${categoryId}/${topicId}`
      }
      onClick={onClick}
      type={type}
    >
      {name}
    </S.Container>
  )
}

export default Tag
