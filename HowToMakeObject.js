// object literal - 객체를 나타내는 문자열
// const user = {
//   email: 'chris123@google.com',
//   birthdate: '1992-03-21',
//   buy(item){
//     console.log(`${this.email} buys ${item.name}`)
//   },
// }

// const item ={
//   name : '니트',
//   price : 30000,
// }

// console.log(user.email)
// console.log(user.birthdate)
// user.buy(item)

// 객체를 생성해서 리턴하는 함수 - factory function
// function createUser(email, birthdate){
//   const user = {
//     email : email,
//     birthdate : birthdate,
//     buy(item){
//       console.log(`${this.email} buys ${item.name}`)
//     },
//   }
//   return user
// }

// const user1 = createUser('abc@naver.com', '2000-10-01')
// const user2 = createUser('qwe.codeit.com', '2001-01-21')

// console.log(user1.email)
// console.log(user2.email)

// user1.buy(item)
// user2.buy(item)

// constructor function - 생성자 함수
// this는 constructor function으로 생성할 수 있는 해당 객체
// function User(email, birthdate){
//   this.email = email
//   this.birthdate = birthdate
//   this.buy = function (item) {
//     console.log(`${this.email} buys ${item.name}`)
//   }
// }

// const user1 = new User('abc@naver.com', '2000-11-12') // user1 객체 생성
// console.log(user1.email)
// user1.buy(item);

// 클래스 - class, 보통 프로퍼티를 생성자 내에 작성
// class User {
//   constructor(email, birthdate) {  // 생성자 메소드 -> 객체가 생성될 때 실행
//     this.email = email    // this는 생성되는 객체
//     this.birthdate = birthdate
//   }

//   buy(item){      // 생성된 해당 객체의 메소드
//     console.log(`${this.email} buys ${this.name}`)
//   }
// }

// const user1 = new User('abc@naver.com', '1993-12-13')
