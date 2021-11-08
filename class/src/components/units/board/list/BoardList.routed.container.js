import { useRouter } from "next/router"
import BoardListRoutedUI from "./BoardList.routed.present"

const BoardListRouted = () => {
  const router = useRouter()

  return (
    <BoardListRoutedUI number={router.query.number}/>
  )
}

export default BoardListRouted