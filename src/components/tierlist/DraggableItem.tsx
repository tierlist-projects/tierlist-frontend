/* eslint-disable react/jsx-props-no-spreading */
import { useSortable } from '@dnd-kit/sortable'
import { ItemType } from 'types/tierlist/tierlist.type'
import { CSS } from '@dnd-kit/utilities'
import Item from './Item'

type Props = {
  id: number
  item: ItemType
  onClickRemove?: (index: number) => void
  removeMode?: boolean
  index: number
}

const DraggableItem = ({
  id,
  item,
  onClickRemove,
  removeMode,
  index,
}: Props) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id, disabled: removeMode || false })

  const style = {
    transition: isDragging ? 'none' : transition,
    transform: CSS.Translate.toString(transform),
    zIndex: isDragging ? 100 : 'auto',
    opacity: isDragging ? 0.5 : 1,
  }
  return (
    <div style={style} ref={setNodeRef} {...attributes} {...listeners}>
      <Item
        itemRankImage={item.itemRankImage}
        name={item.name}
        removeMode={removeMode}
        onClickRemove={onClickRemove}
        index={index}
      />
    </div>
  )
}

export default DraggableItem
