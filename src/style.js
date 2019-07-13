import styled from 'styled-components'
import ConBg from './images/bg.png'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: url(${ConBg}) no-repeat top left / cover;
`

export const TopWrapper = styled.div`
  width: 100%;
  padding-top: 70px;
  box-sizing: border-box;
  padding-bottom: 103px;
  .logo {
    width: 80px;
    height: 83px;
    margin-left: 38px;
  }
  .search {
    width: 225px;
    height: 53px;
    margin-left: 20px;
  }
`
