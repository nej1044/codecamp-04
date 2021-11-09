import {gql, useQuery,useMutation } from '@apollo/client'
import styled from '@emotion/styled'


const FETCH_PRODUCTS = gql `
query {
  fetchProducts {
    _id
    seller
    name
    detail
    price
    createdAt
  }
}
`

const DELETE_PRODUCT = gql`
  mutation deleteProduct($productId: ID) {
    deleteProduct(productId: $productId) {
      message
    }
  }
`

const Row = styled.div`
display: flex;
`

const Column = styled.div`
width: 20%;
`

const MapProductsPage = () => {
  const { data } = useQuery(FETCH_PRODUCTS)
  const [ deleteProduct ] = useMutation(DELETE_PRODUCT)

  async function handleDelete(event) {
    try {
      await deleteProduct({
        variables: { productId: event.target.id },
        refetchQueries: [{ query: FETCH_PRODUCTS }]
      })
    } catch(error) {
      alert(error.message)
    }
  }
    

  return(
    <>
    <div>
      {data?.fetchProducts.map((el, idx)=>(
        <Row key={el?._id}>
          <Column><input type="checkbox" /></Column>
          <Column>{idx+1}</Column>
          <Column>{el?.name}</Column>
          <Column>{el?.price}</Column>
          <Column>{el?.seller}</Column>
          <Column>{el?.createdAt}</Column>
          <Column><button id={el?._id} onClick={handleDelete}>삭제하기</button></Column>
        </Row>
      ))}
    </div>
  </>
  )
}

export default MapProductsPage