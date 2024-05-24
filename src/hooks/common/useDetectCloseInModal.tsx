import { RefObject, useEffect, useState } from 'react'

type ReturnType = [boolean, React.Dispatch<React.SetStateAction<boolean>>]

const useDetectCloseInModal = (
  elem: RefObject<HTMLDivElement>,
  initialState: boolean,
) => {
  const [isDrop, setIsDrop] = useState<boolean>(initialState)
  useEffect(() => {
    const onClick = (e: Event) => {
      const event = e as MouseEvent
      if (
        elem.current !== null &&
        !elem.current.contains(event.target as Node)
      ) {
        setIsDrop(!isDrop)
      }
    }

    const modalArea = document.querySelector('#portal')
    if (!modalArea) return

    if (isDrop) {
      modalArea.addEventListener('click', onClick)
    }

    return () => {
      modalArea.removeEventListener('click', onClick)
    }
  }, [isDrop, elem])
  return [isDrop, setIsDrop] as ReturnType
}

export default useDetectCloseInModal
