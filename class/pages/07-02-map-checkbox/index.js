import { gql, useQuery, useMutation } from "@apollo/client";
import styled from "@emotion/styled";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      createdAt
    }
  }
`;
const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number) {
      message
    }
  }
`;

const MapCheckboxPage = () => {
  const { data } = useQuery(FETCH_BOARDS);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  async function handleDelete(event) {
    try {
      await deleteBoard({
        variables: { number: Number(event.target.id) },
        refetchQueries: [{ query: FETCH_BOARDS }],
      });
    } catch (error) {
      alert(error.message);
    }
  }

  const Row = styled.div`
    display: flex;
  `;

  const Column = styled.div`
    width: 20%;
  `;

  console.log(data);
  return (
    <>
      <div>
        {data?.fetchBoards.map((el, idx) => (
          // eslint-disable-next-line react/jsx-key
          <Row>
            <Column>
              <input type="checkbox" />
            </Column>
            <Column>{idx + 1}</Column>
            <Column>{el?.title}</Column>
            <Column>{el?.writer}</Column>
            <Column>{el?.createdAt}</Column>
            <Column>
              <button id={el.number} onClick={handleDelete}>
                삭제하기
              </button>
            </Column>
          </Row>
        ))}
      </div>
    </>
  );
};

export default MapCheckboxPage;
