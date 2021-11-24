// console.log("hello world!");

import { createConnection } from "typeorm";
import { ApolloServer, gql } from "apollo-server";
import Board from "./Board.mysql";

const myTypeDefs = gql`
  input CreateBoardInput {
    writer: String
    title: String
    age: Int
  }

  type AAA {
    number: Int
    writer: String
    title: String
    age: Int
  }

  type Query {
    fetchBoards: [AAA]
  }

  type Mutation {
    # 주석처리 createBoard(writer: String, title: String, age: Int): String
    createBoard(createBoardInput: CreateBoardInput!): String

    deleteBoard(number: Int!): String
  }
`;

const myResolvers = {
  Query: {
    fetchBoards: async () => {
      const result = await Board.find({ where: { deletedAt: null } });
      console.log(result);

      return result;
    },
  },
  Mutation: {
    // loginCheck: (parent: any, args: any) => {},
    deleteBoard: async (_: any, args: any) => {
      await Board.update({ number: args.number }, { deletedAt: new Date() });
      return "게시물이 정상적으로 삭제되었습니다.";
    },
    createBoard: async (_: any, args: any) => {
      // loginCheck({aaa: "철수"})
      // ///// 첫번째 방법 /////
      // createBoard: async (_: any, args: any) => {
      //   await Board.insert({
      //     title: "안녕하세요 테스트입니다",
      //     writer: "철수",
      //     age: 9,
      //   });

      // ///// 두번째 방법 /////
      // createBoard: async (_: any, args: any) => {
      //   await Board.insert({
      //     title: args.title,
      //     writer: args.writer,
      //     age: args.age,
      //   });

      // ///// 세번째 방법 /////
      await Board.insert({
        ...args.createBoardInput,
      });

      return "게시물 등록에 성공하였습니다.";
    },
  },
};

const server = new ApolloServer({
  typeDefs: myTypeDefs,
  resolvers: myResolvers,
});

createConnection({
  type: "mysql",
  database: "mysql",
  username: "root",
  password: "codecamp",
  host: "34.64.207.239",
  port: 3304,
  // @ts-ignore
  entities: [__dirname + "/*.mysql.ts"],
  logging: true,
  synchronize: true,
})
  .then(() => {
    // 성공했을 때
    console.log("연결완료");
    server.listen({ port: 4000 });
  })
  .catch((error) => {
    // 실패했을 떄
    console.log(error);
  });
