import { GraphQLClient } from "graphql-request";
import { gql } from "@apollo/client";
import { Dispatch, SetStateAction } from "react";

const RESTORE_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;

export const getAccessToken = async (
  setMyAccessToken: Dispatch<SetStateAction<string>>
) => {
  try {
    const graphQLClient = new GraphQLClient(
      "https://backend04.codebootcamp.co.kr/graphql",
      {
        credentials: "include",
      }
    );
    const result = await graphQLClient.request(RESTORE_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;
    setMyAccessToken(newAccessToken);
    return newAccessToken;
  } catch (error) {
    console.log(error.message);
  }
};
