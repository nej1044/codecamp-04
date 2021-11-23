// console.log("hello world!");

import { createConnection } from "typeorm";

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
  })
  .catch((error) => {
    // 실패했을 떄
    console.log(error);
  });
