class User {       // 사용자를 나타내기 위해 class 명으로 User을 선택, 사용자를 User 클래스로 추상화
  constructor(email, birthdate) {
    this.email = email            // 사용자의 이메일은 email로
    this.birthdate = birthdate    // 사용자의 생일은 birthdate로 적절히 추상화
  }

  buy(item) {           // 사용자의 물건 구매 행위를 buy로 적절히 추상화
    console.log(`${this.email} buys ${item.name}`)
  }
} 