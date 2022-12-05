// import { DataSource } from "typeorm";
// import { Product } from "./product.postgres";
import {ApolloServer, gql} from "apollo-server"

input productId {
    productId: ID
}
input UpdateProductInput {
    name: String
    detail: String
    price: Int
    }

type Mutation {
    updateProduct(
        productId: ID
        updateProductInput: UpdateProductInput!
        ): String
}


    


const myResolvers = {
    Mutation:{
        updateProduct: async(: any, args: any) => {
            await Product.update({_id: args.productId },{...args.updateProductInput})
            return "업데이트 성공"
        }
    }
}


const AppDataSource = new DataSource({
    type: "postgres",
    host: "34.64.124.242",
    port: 5012,
    username: "postgres",
    password: "postgres2022",
    database: "postgres",
    entities: [Product],
    synchronize: true,
    logging: true,
  });
  AppDataSource.initialize()
    .then(() => {
      console.log("연결성공!!!");


      server
      .listen(4000)
      .then(() =>{console.log("서버 실행 성공")})
      .catch(()=>{console.log("서버 실행 실패")})

    })
    .catch(() => {
      console.log("연결실패!!!");
    });
