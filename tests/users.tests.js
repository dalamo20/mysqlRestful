// const chai = require("chai");
// const expect = chai.expect;
// const chaiHttp = require("chai-http");

// chai.use(chaiHttp);

// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNzEzMTQ5MTcxLCJleHAiOjE3MTMyMzU1NzF9.pgfVVlM5w4GUH6OLt8iwIneH9CRpeT51KpQAGedahaY";

// describe("User API service", () => {
//   //   it("should GET a logged in user's unique id, username, and password", (done) => {
//   //     const expected = [
//   //       {
//   //         id: 11,
//   //         username: "admin2",
//   //         email: "admin@example.com",
//   //       },
//   //     ];

//   //     chai
//   //       .request("http://localhost:3000")
//   //       .get("/api/user")
//   //       .set("Authorization", `Bearer ${token}`)
//   //       .end((err, resp) => {
//   //         expect(resp.body).to.eql(expected);
//   //         done();
//   //       });
//   //   });

//   //   // run one time then skip once working
//   //   it.skip("should PUT updated credentials for a logged in user", (done) => {
//   //     const updatedUser = {
//   //       username: "admin2",
//   //       password: "password",
//   //       email: "admin2@example.com",
//   //     };
//   //     const expected = { msg: "Updated succesfully!" };

//   //     chai
//   //       .request("http://localhost:3000")
//   //       .put("/api/user/update")
//   //       .set("Authorization", `Bearer ${token}`)
//   //       .send(updatedUser)
//   //       .end((err, resp) => {
//   //         expect(resp.body).to.eql(expected);
//   //         done();
//   //       });
//   //   });

//   //   it("should PUT updated credentials for a logged in user", (done) => {
//   //     const updatedUser = {
//   //       username: "admin2",
//   //       password: "password",
//   //       email: "admin2@example.com",
//   //     };
//   //     const expected = { msg: "Nothing to update..." };

//   //     chai
//   //       .request("http://localhost:3000")
//   //       .put("/api/user/update")
//   //       .set("Authorization", `Bearer ${token}`)
//   //       .send(updatedUser)
//   //       .end((err, resp) => {
//   //         expect(resp.body).to.eql(expected);
//   //         done();
//   //       });
//   //   });

//   it("should DELETE a user", (done) => {
//     chai
//       .request("http://localhost:3000")
//       .delete("/api/user/delete")
//       .end((err, res) => {
//         expect(res).to.have.status(200);
//         expect(res.body).to.be.an("object");
//         expect(Object.keys(res.body).length).to.equal(1); //this one is tricky but it works. expected not matching actual
//         done();
//       });
//   });
// });
