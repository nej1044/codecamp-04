import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import MarketCommentList from "../../../src/components/units/markets/comments/list/marketCommentList.container";
import MarketComment from "../../../src/components/units/markets/comments/write/marketComment.container";
import MarketDetail from "../../../src/components/units/markets/detail/marketDetail.container";
// import Head from "next/head";
// import { gql, request } from "graphql-request";

interface IMarketDetailPage {
  fetchUseditem: {
    _id: string;
    name: string;
    images: string;
    remarks: string;
  };
}

const MarketDetailPage = (props: IMarketDetailPage) => {
  return (
    <>
      {/* <Head>
        <meta property="og:title" content={props.fetchUseditem.name} />
        <meta
          property="og:url"
          content={`http://develofirm.site/market/${props.fetchUseditem._id}`}
        />
        <meta
          property="og:image"
          content={`https://storage.googleapis.com/${props.fetchUseditem.images}`}
        />
        <meta property="og:description" content={props.fetchUseditem.remarks} />
      </Head> */}
      <MarketDetail />
      <MarketComment />
      <MarketCommentList />
    </>
  );
};

// const FETCH_USEDITEM = gql`
//   query fetchUseditem($useditemId: ID!) {
//     fetchUseditem(useditemId: $useditemId) {
//       _id
//       name
//       remarks
//       images
//     }
//   }
// `;

// export const getServerSideProps = async (context: any) => {
//   const result = await request(
//     "https://backend09.codebootcamp.co.kr/graphql",
//     FETCH_USEDITEM,
//     { useditemId: context.query.useditemId }
//   );
//   return {
//     props: {
//       fetchUseditem: {
//         _id: result.fetchUseditem._id,
//         name: result.fetchUseditem.name,
//         remarks: result.fetchUseditem.remarks,
//         images: result.fetchUseditem.images[0],
//       },
//     },
//   };
// };

export default withAuth(MarketDetailPage);
