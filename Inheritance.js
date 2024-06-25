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
  constructor(email, birthdate, level) {
    super(email, birthdate) // 상속을 위해서는 super 호출로 부모 클래스의 생성자를 먼저 호출 해야 함
    this.level =level
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
console.log(pUser1.email)