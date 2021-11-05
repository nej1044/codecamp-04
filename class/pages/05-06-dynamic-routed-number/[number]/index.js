import { useRouter } from "next/router"

export default function DynamicRoutedNumberPage() {
  const router = useRouter()

  return (
    <div>{router.query.number}번 게시글 이동완료</div>
  )
}