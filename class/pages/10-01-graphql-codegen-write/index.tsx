import { useMutation, gql } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { IMutation, IMutationCreateProductArgs } from '../../src/commons/types/generated/types'
import { ChangeEvent } from 'react'

const CREATE_PRODUCT = gql`
  mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
	createProduct(seller: $seller, createProductInput: $createProductInput) {
    _id
    number
    message
    }
  }
`

 
export default function DynamicProductWrite() {
  // 구조분해할당/비구조할당
  const router = useRouter()
  const [ createProduct ] = useMutation<Pick<IMutation, 'createProduct'>, IMutationCreateProductArgs>(CREATE_PRODUCT)
  const [ mySeller, setMySeller] = useState('')
  const [ myName, setMyName] = useState('')
  const [ myDetail, setMyDetail] = useState('')
  const [ myPrice, setMyPrice] = useState(0)

  function onChangeMySeller(event: ChangeEvent<HTMLInputElement>) {
    setMySeller(event.target.value)
  }

  function onChangeMyName(event: ChangeEvent<HTMLInputElement>) {
    setMyName(event.target.value)
  }

  function onChangeMyDetail(event: ChangeEvent<HTMLInputElement>) {
    setMyDetail(event.target.value)
  }

  function onChangeMyPrice(event: ChangeEvent<HTMLInputElement>) {
    setMyPrice(Number(event.target.value))
  }

  // 함수
  async function zzz() {
    try {
      const result = await createProduct({
        variables: {
          seller: mySeller, 
          createProductInput: {
            name: myName, 
            detail: myDetail, 
            price: Number(myPrice)
            }
        } 
      })
      console.log(result)
      
      router.push(`05-08-dynamic-product-read/${result.data?.createProduct?._id}`)
    } catch(error: any) {
      alert(error.message)
    }
  }

  return (
    <>
      판매자: <input type="text" onChange={onChangeMySeller}/><br />
      상품명: <input type="text" onChange={onChangeMyName}/><br />
      상품내용: <input type="text" onChange={onChangeMyDetail}/><br />
      상품가격: <input type="text"  onChange={onChangeMyPrice}/><br />
      <button onClick={zzz}>게시물 등록</button>
    </>
  )
}
