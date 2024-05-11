/* eslint-disable react/no-array-index-key */
/* eslint-disable no-else-return */
/* eslint-disable no-useless-return */
/* eslint-disable react/jsx-props-no-spreading */
import * as S from '@styles/tierlist/Tierlist.style'
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from 'react-beautiful-dnd'
import { RANKSTR, RankType } from 'types/tierlist/tierlist.type'
import { colors } from '@constants/colors'
import CButton from '@components/common/CButton'
import { StringToRank } from '@utils/tierlist/tierlistUtil'
import useModal from '@hooks/useModal'
import ItemRegistModal from './ItemRegistModal'
import Item from './Item'

type Props = {
  ranks: RankType
  setRanks: React.Dispatch<React.SetStateAction<RankType>>
}

const Tierlist = ({ ranks, setRanks }: Props) => {
  const onDragEnd = (result: DropResult) => {
    console.log(result)

    if (!result.destination) return null

    const curRanks = { ...ranks }
    const draggingRank = result.source.droppableId as RANKSTR
    const draggingItemIndex = result.source.index
    const dropRank = result.destination.droppableId as RANKSTR
    const dropItemIndex = result.destination.index

    // 드래그 한 요소를 기존 배열에서 삭제
    const removedItem = curRanks[draggingRank].splice(draggingItemIndex, 1)
    // 드롭한 위치에 드래그한 요소를 추가
    curRanks[dropRank].splice(dropItemIndex, 0, removedItem[0])
    setRanks(curRanks)
  }

  const { Modal, isOpen, openModal, closeModal } = useModal()

  return (
    <S.Container>
      <DragDropContext onDragEnd={onDragEnd}>
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
                    <Droppable droppableId={rank} direction="horizontal">
                      {(provided) => (
                        <S.RankCotent
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                        >
                          {list.map((item, idx) => (
                            <Draggable
                              draggableId={rank + idx}
                              key={rank + idx}
                              index={idx}
                            >
                              {(dragProvided) => (
                                <div
                                  ref={dragProvided.innerRef}
                                  {...dragProvided.dragHandleProps}
                                  {...dragProvided.draggableProps}
                                >
                                  <Item
                                    itemRankImage={item.itemRankImage}
                                    name={item.name}
                                  />
                                </div>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </S.RankCotent>
                      )}
                    </Droppable>
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
            text="아이템 삭제"
            backgroundColor={colors.error}
            medium
            hPadding={8}
            vPadding={12}
            radius={5}
          />
          <Modal isOpen={isOpen} closeModal={closeModal}>
            <ItemRegistModal
              closeModal={closeModal}
              ranks={ranks}
              setRanks={setRanks}
            />
          </Modal>
        </S.ButtonBlock>
        <Droppable droppableId="noneRanks" direction="horizontal">
          {(provided) => (
            <S.WaitingItemBlock
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {ranks.noneRanks.map((item, index) => (
                <Draggable
                  draggableId={item.rank + index}
                  key={item.rank + index}
                  index={index}
                >
                  {(dragProvided) => (
                    <div
                      ref={dragProvided.innerRef}
                      {...dragProvided.dragHandleProps}
                      {...dragProvided.draggableProps}
                    >
                      <Item
                        itemRankImage={item.itemRankImage}
                        name={item.name}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </S.WaitingItemBlock>
          )}
        </Droppable>
      </DragDropContext>
    </S.Container>
  )
}

export default Tierlist
