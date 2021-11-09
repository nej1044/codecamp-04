import BoardListUI from "./BoardList.presenter"
import { FETCH_BOARDS, FETCH_BEST } from "./BoardList.queries"
import { useQuery } from "@apollo/client"
import { useState } from "react"


const BoardList=()=> {
  const { data : first } = useQuery(FETCH_BOARDS, {
    variables: {page: 1 },
    refetchQueries: [{ query: FETCH_BOARDS }]  })
  const { data : second } = useQuery(FETCH_BEST)
  const [pageNumber, setPageNumber] = useState(1)

  async function hanldePage(event) {
    setPageNumber(Number(event.target.innerText))
    first?.fetchBoards.refetchQueries
  }

  return(
    <>
      <BoardListUI first={first} second={second} hanldePage={hanldePage}/>
    </>
  )
}

export default BoardList