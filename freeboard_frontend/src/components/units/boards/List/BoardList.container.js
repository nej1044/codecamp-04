import BoardListUI from "./BoardList.presenter"
import { FETCH_BOARDS, FETCH_BEST, FETCH_PAGES } from "./BoardList.queries"
import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { useState } from "react"

const BoardList=()=> {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState('')
  const { data : first, refetch } = useQuery(FETCH_BOARDS, {variables: {
    search: searchValue, 
    page: startPage
  }})
  const { data : second } = useQuery(FETCH_BEST)
  const { data : third } = useQuery(FETCH_PAGES)
  const [startPage, setStartPage] = useState(1)
  const [current, setCurrent] = useState(1)
  const lastPage = Math.ceil(third?.fetchBoardsCount / 10)

  const handleCreate=()=>{
    router.push('/boards/new')
  }

  const getDetail=(event)=>{
    try{
      router.push(`/boards/${event.target.id}`)
    } catch (error) {
      alert(error.message)
    }
  }

  const changeSearchValue=(event)=>{
    setSearchValue(event.target.value)
    // first.fetchBoards.filter((el) => {
    //   return el.title.includes('1')} )
  }

  const onClickPage=(event)=> {
    refetch({
      page: Number(event.target.id)
    })
    setCurrent(Number(event.target.id))
  }
  return(
    <>
      <BoardListUI startPage={startPage} current={current} lastPage={lastPage} onClickPage={onClickPage} changesearchValue={changeSearchValue} first={first} second={second} handleCreate={handleCreate} getDetail={getDetail} />
    </>
  )
}

export default BoardList