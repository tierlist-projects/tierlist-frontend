import { RefObject, useEffect, useState } from 'react'

type ReturnType = [boolean, React.Dispatch<React.SetStateAction<boolean>>]

const useDetectClose = (
  elem: RefObject<HTMLDivElement>,
  initialState: boolean,
) => {
  const [isDrop, setIsDrop] = useState<boolean>(initialState)
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (elem.current !== null && !elem.current.contains(e.target as Node)) {
        setIsDrop(!isDrop)
      }
    }

    if (isDrop) {
      window.addEventListener('click', onClick)
    }

    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [isDrop, elem])
  return [isDrop, setIsDrop] as ReturnType
}

export default useDetectClose
