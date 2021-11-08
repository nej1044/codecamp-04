import { useRouter } from 'next/router'
import { useState } from 'react'
import BoardListUI from './BoardList.presenter'

const BoardList = () => {
  const router = useRouter()
  const [input, setInput] = useState('')
  const [myBoolean, setMyBoolean] = useState(true)

  router.query = {
   
  }

  function handleChangeInput(event) {
    setInput(event.target.value)
    if(input !== '') {
      setMyBoolean(false)
    }
  }

  function onClickMove1() {
    router.push('/quiz/06-02-BoardList-routed/1')
  }
  function onClickMove2() {
    router.push('/quiz/06-02-BoardList-routed/2')
  }
  function onClickMove3() {
    router.push('/quiz/06-02-BoardList-routed/3')
  }
  return (
    <BoardListUI move1={onClickMove1} move2={onClickMove2} move3={onClickMove3} buttonabled={handleChangeInput} boolean={myBoolean}/>
  )

}

export default BoardList