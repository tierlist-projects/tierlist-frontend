/* eslint-disable react/no-array-index-key */
/* eslint-disable no-else-return */
/* eslint-disable no-useless-return */
/* eslint-disable react/jsx-props-no-spreading */
import * as S from '@styles/tierlist/Tierlist.style'
import {
  DndContext,
  DragStartEvent,
  closestCorners,
  useSensors,
  useSensor,
  MouseSensor,
  DragEndEvent,
  DragOverlay,
} from '@dnd-kit/core'
import {
  SortableContext,
  horizontalListSortingStrategy,
} from '@dnd-kit/sortable'
import { useCallback, useState } from 'react'
import { ItemType, RANKSTR, RankType } from 'types/tierlist/tierlist.type'
import { colors } from '@constants/colors'
import CButton from '@components/common/CButton'
import { StringToRank } from '@utils/tierlist/tierlistUtil'
import useModal from '@hooks/useModal'
import ItemRegistModal from './ItemRegistModal'
import DraggableItem from './DraggableItem'

type Props = {
  ranks: RankType
  setRanks: React.Dispatch<React.SetStateAction<RankType>>
  categoryId: number
}

/**
 * TODO
 * [x] : 중복된 아이템 등록 거르기(생성말고 배열에 추가)
 * [ ] : 다른 SortableContext로 이동되게 하기(빈 배열의 경우 SortableContext가 잡히지 않는 문제인듯)
 * [x] : dragOverlay 설정
 * [x] : 이미지 등록 실패하면 아이템 추가 안하게
 * [ ] : 드래그할 때 애니메이션뜨면서 아이템 겹쳐보이는 거 해결하기
 */

const Tierlist = ({ ranks, setRanks, categoryId }: Props) => {
  const [activeItem, setActiveItem] = useState<ItemType | null>(null)
  const [activeId, setActiveId] = useState<number>(0)

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
  )

  const [removeMode, setRemoveMode] = useState(false)
  const onClickRemove = useCallback(
    (index: number) => {
      const curRanks = { ...ranks }
      curRanks.noneRanks.splice(index, 1)
      setRanks(curRanks)
    },
    [ranks],
  )

  const { Modal, isOpen, openModal, closeModal } = useModal()

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (!active || !over) return null
    const curRanks = { ...ranks }
    const draggingRank = active.data.current?.sortable.containerId as RANKSTR
    const draggingItemIndex = curRanks[draggingRank].findIndex(
      (item) => item.id === Number(active.id),
    )
    const dropRank = over.data.current?.sortable.containerId as RANKSTR
    const dropItemIndex = curRanks[dropRank].findIndex(
      (item) => item.id === Number(over.id),
    )

    // 드래그 한 요소를 기존 배열에서 삭제
    const removedItem = curRanks[draggingRank].splice(draggingItemIndex, 1)
    // 드롭한 위치에 드래그한 요소를 추가
    curRanks[dropRank].splice(dropItemIndex, 0, removedItem[0])
    setRanks(curRanks)
    setActiveItem(null)
  }

  const onDragStart = ({ active }: DragStartEvent) => {
    setActiveId(Number(active.id))

    const rank = [
      ...ranks[active.data.current?.sortable.containerId as RANKSTR],
    ]

    for (let i = 0; i < rank.length; i += 1) {
      if (active.id === rank[i].id) {
        setActiveItem(rank[i])
        return
      }
    }
  }

  return (
    <S.Container>
      <DndContext
        sensors={sensors}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        collisionDetection={closestCorners}
      >
        <S.Table>
          <tbody>
            {Object.entries(ranks).map(([rank, list], index) => {
              if (index === 0) return null
              else {
                return (
                  <S.Tr key={rank}>
                    <S.Rank backgroundColor={rank as RANKSTR}>
                      {StringToRank(rank)}
                    </S.Rank>
                    <SortableContext
                      id={rank as RANKSTR}
                      items={
                        list.length > 0 ? list : [{ id: `${rank}placeholder` }]
                      }
                      strategy={horizontalListSortingStrategy}
                    >
                      <S.RankCotent>
                        {list.length > 0 ? (
                          list.map((item) => (
                            <DraggableItem
                              key={item.id}
                              id={item.id}
                              item={item}
                              index={index}
                            />
                          ))
                        ) : (
                          <DraggableItem
                            key={1000010000 + index}
                            id={1000010000 + index}
                            item={{ name: '', itemRankImage: '' } as ItemType}
                            index={0}
                          />
                        )}
                      </S.RankCotent>
                    </SortableContext>
                  </S.Tr>
                )
              }
            })}
          </tbody>
        </S.Table>
        <S.ButtonBlock>
          <CButton
            text="아이템 등록"
            backgroundColor={colors.primary[400]}
            hPadding={8}
            vPadding={12}
            radius={5}
            medium
            onClick={openModal}
          />
          <CButton
            text={removeMode ? '아이템 이동' : '아이템 삭제'}
            backgroundColor={removeMode ? colors.grey.primary : colors.error}
            medium
            hPadding={8}
            vPadding={12}
            radius={5}
            onClick={() => setRemoveMode((prev) => !prev)}
          />
          <Modal isOpen={isOpen} closeModal={closeModal}>
            <ItemRegistModal
              closeModal={closeModal}
              ranks={ranks}
              setRanks={setRanks}
              categoryId={categoryId}
            />
          </Modal>
        </S.ButtonBlock>
        <SortableContext
          id={'noneRanks' as RANKSTR}
          items={ranks.noneRanks}
          strategy={horizontalListSortingStrategy}
        >
          <S.WaitingItemBlock>
            {ranks.noneRanks.length > 0 ? (
              ranks.noneRanks.map((item, index) => (
                <DraggableItem
                  key={item.id}
                  item={item}
                  id={item.id}
                  index={index}
                  onClickRemove={onClickRemove}
                  removeMode={removeMode}
                />
              ))
            ) : (
              <DraggableItem
                key={1000010000}
                id={1000010000}
                item={{ name: '', itemRankImage: '' } as ItemType}
                index={0}
              />
            )}
          </S.WaitingItemBlock>
        </SortableContext>
        <DragOverlay>
          {activeItem ? (
            <DraggableItem id={activeId} item={activeItem} index={0} />
          ) : null}
        </DragOverlay>
      </DndContext>
    </S.Container>
  )
}

export default Tierlist
