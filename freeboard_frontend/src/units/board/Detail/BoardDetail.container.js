import { useQuery, gql, useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import BoardDetailUI from './BoardDetail.presenter.js'
import { FETCH_BOARD, DELETE_BOARD } from './BoardDetail.queries'

const BoardDetail = () => {
  const router = useRouter()
  const { data } = useQuery(FETCH_BOARD, {
    variables: {boardId: router.query.boardId}
  })
  const [ deleteBoard ] = useMutation(DELETE_BOARD)
  
  console.log(data)
  const date = data?.fetchBoard.createdAt.split('T')[0]

  function handleClickShow(event) {
    if(event.target.previousSibling.style.display === 'none') {
      event.target.previousSibling.style.display = 'flex'
    } else {
      event.target.previousSibling.style.display = 'none'
    }
  }

  async function handleDeleteBoard() {
    try {
      const result = await deleteBoard({
        variables:{boardId: router.query.boardId}
      })
      alert('게시물을 삭제했습니다.')
      router.push(`/boards/List`)
    } catch(error) {
      alert(`게시물 삭제에 실패했습니다 ${error.message}`)
    }
  }

  function handleList() {
    router.push(`/boards/List`)
  }

  return (
    <BoardDetailUI date = {date} addressShow = {handleClickShow} data = {data} handleDeleteBoard={handleDeleteBoard} handleList={handleList}/>
  )

}

export default BoardDetail