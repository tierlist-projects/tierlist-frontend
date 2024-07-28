import styled from '@emotion/styled'

export const Container = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(206, 206, 206, 0.5);
  margin-bottom: 20px;
  background-color: white;
  padding: 0px 20px;

  position: sticky;
  top: 0;
  z-index: 5;
`

export const Logo = styled.div`
  font-size: 20px;
  font-weight: bold;
`

export const IconBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 24px;
      height: 24px;
    }
  }
`

export const SidebarContainer = styled.div`
  height: 100vh;
  width: 280px;
  background-color: white;
`
