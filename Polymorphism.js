class User {
  constructor(email, birthdate) {
    this.email = email
    this.birthdate = birthdate
  }

  buy(item) {
    console.log(`${this.email} buys ${item.name}`)
  }
}

class PremiumUser extends User {  // User 클래스로부터 상속 받음
  constructor(email, birthdate, level, point) {
    super(email, birthdate) // 상속을 위해서는 super 호출로 부모 클래스의 생성자를 먼저 호출 해야 함
    this.level =level
    this.point = point
  }

  buy(item) {   // 오버라이딩
    // console.log(`${this.email} buys ${this.name}`)  // 이 부분은 User클래스와 동일
    super.buy(item)   // 위 코드를 이와 같이 작성하여 부모 클래스의 buy 메소드를 호출 가능
    this.point += item.price * 0.05
  }

  streamMusicForFree() {
    console.log(`Free music streaming for ${this.email}`)
  }
}

const item = {
  name : '니트',
  price : 25000,
}

const pUser1 = new PremiumUser('abc@naver.com', '2000-10-21', 3)
const pUser2 = new PremiumUser('def@naver.com', '2000-10-11', 3)
const pUser3 = new PremiumUser('ghi@naver.com', '2000-10-30', 3)
const user1 = new User('zzz@naver.com', '2000-02-12')

const users = [pUser1, pUser2, pUser3, user1]

// instanceof 연산자로 해당 변수가 어느 클래스의 객체인지를 확인 할 수도 있음
// 예외로 [자식 클래스로 만든 객체]에 instanceof [부모 클래스]를 하면 true가 리턴됩
users.forEach((user)=>{  // user이라는 변수가 여러 종류의 객체를 가리킴 -> 다형성
  user.buy(item)
})