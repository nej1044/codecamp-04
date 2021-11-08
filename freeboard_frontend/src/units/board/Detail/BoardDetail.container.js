import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'
import BoardDetailUI from './BoardDetail.presenter.js'
import { FETCH_BOARD } from './BoardDetail.queries'

const BoardDetail = () => {
  const router = useRouter()
  const { data } = useQuery(FETCH_BOARD, {
    variables: {boardId: router.query.boardId}
  })
  
  console.log(data)
  const date = data?.fetchBoard.createdAt.split('T')[0]

  function handleClickShow(event) {
    if(event.target.previousSibling.style.display === 'none') {
      event.target.previousSibling.style.display = 'flex'
    } else {
      event.target.previousSibling.style.display = 'none'
    }
    
  }
  return (
    <BoardDetailUI date = {date} addressShow = {handleClickShow} data = {data} />
  )

}

export default BoardDetail