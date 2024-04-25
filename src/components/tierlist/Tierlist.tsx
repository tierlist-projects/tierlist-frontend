/* eslint-disable no-useless-return */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react'
import * as S from '@styles/tierlist/Tierlist.style'
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from 'react-beautiful-dnd'
import { colors } from '@constants/colors'
import { images } from '@constants/images'
import CButton from '@components/common/CButton'
import useModal from '@hooks/useModal'
import ItemRegistModal from './ItemRegistModal'

const Tierlist = () => {
  const lankList = [
    {
      lank: 'S',
      color: colors.tierlist.lank.S,
      key: 'tierS',
      list: [],
    },
    {
      lank: 'A',
      color: colors.tierlist.lank.A,
      key: 'tierA',
      list: [
        {
          url: images.cat,
          key: 'cat',
        },
      ],
    },
    {
      lank: 'B',
      color: colors.tierlist.lank.B,
      key: 'tierB',
      list: [],
    },
    {
      lank: 'C',
      color: colors.tierlist.lank.C,
      key: 'tierC',
      list: [],
    },
    {
      lank: 'D',
      color: colors.tierlist.lank.D,
      key: 'tierD',
      list: [],
    },
    {
      lank: 'F',
      color: colors.tierlist.lank.F,
      key: 'tierF',
      list: [],
    },
  ]

  const itemList = [{ url: images.cat, key: 'waitingCat' }]

  const onDragEnd = (result: DropResult) => {
    console.log(result)
  }

  const { Modal, isOpen, openModal, closeModal } = useModal()
  const [isActive] = useState(false)

  return (
    <S.Container>
      <DragDropContext onDragEnd={onDragEnd}>
        <S.Table>
          <tbody>
            {lankList.map((lank) => (
              <S.Tr key={lank.key}>
                <S.Lank backgroundColor={lank.color}>{lank.lank}</S.Lank>
                <Droppable droppableId={lank.lank} direction="horizontal">
                  {(provided) => (
                    <S.LankCotent
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                    >
                      {lank.list.map((item) => (
                        <Draggable
                          draggableId={item.key}
                          key={item.key}
                          index={0}
                        >
                          {(dragProvided) => (
                            <S.Item
                              src={item.url}
                              title="고양이"
                              alt="고양이"
                              ref={dragProvided.innerRef}
                              {...dragProvided.dragHandleProps}
                              {...dragProvided.draggableProps}
                            />
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </S.LankCotent>
                  )}
                </Droppable>
              </S.Tr>
            ))}
          </tbody>
        </S.Table>
        <S.ItemSearch>
          <p>아이템 검색</p>
          <S.InputWithDrop>
            <img src={images.common.searchBar.search} alt="아이템 검색" />
            <S.Search type="text" placeholder="검색어를 입력하세요." />
            {isActive && (
              <S.SearchResultContainer>gkdlgkdl</S.SearchResultContainer>
            )}
          </S.InputWithDrop>
        </S.ItemSearch>
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
            <ItemRegistModal closeModal={closeModal} />
          </Modal>
        </S.ButtonBlock>
        <Droppable droppableId="waitingItem" direction="horizontal">
          {(provided) => (
            <S.WaitingItemBlock
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {itemList.map((item, index) => (
                <Draggable draggableId={item.key} key={item.key} index={index}>
                  {(dragProvided) => (
                    <S.Item
                      src={item.url}
                      title="고양이"
                      alt="고양이"
                      ref={dragProvided.innerRef}
                      {...dragProvided.dragHandleProps}
                      {...dragProvided.draggableProps}
                    />
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
