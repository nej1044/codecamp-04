import MarketWrite from "../../../../src/components/units/markets/write/marketWrite.container";
import { createContext } from "react";
import { withAuth } from "../../../../src/components/commons/hocs/withAuth";
import Head from "next/head";
import { gql, request } from "graphql-request";

interface IMarketDetailPage {
  fetchUseditem: {
    _id: string;
    name: string;
    images: string;
    remarks: string;
  };
}

export const EditContext = createContext<any>({});

const MarketEditPage = (props: IMarketDetailPage) => {
  const editValue = { isEdit: true };
  return (
    <>
      <Head>
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
      </Head>
      <EditContext.Provider value={editValue}>
        <MarketWrite />;
      </EditContext.Provider>
    </>
  );
};

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      images
    }
  }
`;

export const getServerSideProps = async (context: any) => {
  const result = await request(
    "https://backend04.codebootcamp.co.kr/graphql",
    FETCH_USEDITEM,
    { useditemId: context.query.useditemId }
  );
  return {
    props: {
      fetchUseditem: {
        _id: result.fetchUseditem._id,
        name: result.fetchUseditem.name,
        remarks: result.fetchUseditem.remarks,
        images: result.fetchUseditem.images[0],
      },
    },
  };
};

export default withAuth(MarketEditPage);
