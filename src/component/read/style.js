import styled from 'styled-components'

export const BookCon = styled.div`
  display: flex;
  flex-direction: column;
`

export const TopCon = styled.div`
  width: 100%;
  height: 144px;
  margin-bottom: 100px;
  .book {
    width: 111px;
    height: 144px;
    float: left;
    margin-left: 28px;
  }
  .info {
    width: 183px;
    float: right;
    margin-right: 39px;
    .title {
      margin-bottom: 10px;
    }
    dd {
     margin: 0;
     font-size: 10px;
     //color: #999;
    }
  }
`

export const BottomCon = styled.div`
  width: 100%;
  height: 149px;
  .book {
    width: 105px;
    height: 149px;
    float: right;
    margin-right: 38px;
  }
  .info {
    width: 181px;
    margin-left: 33px;
    .title {
      margin-bottom: 10px;
    }
    dd {
     margin: 0;
     font-size: 10px;
     //color: #999;
    }
  }
`
