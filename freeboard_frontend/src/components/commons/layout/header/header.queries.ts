import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation loginUser($password: String!, $email: String!) {
    loginUser(password: $password, email: $email) {
      accessToken
    }
  }
`;

export const FETCH_USER_LOGGEDIN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
    }
  }
`;

export const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser {
      Boolaen
    }
  }
`;
