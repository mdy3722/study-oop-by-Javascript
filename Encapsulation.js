class User {
  constructor(email, birthdate) {  
    this.email = email    
    this.birthdate = birthdate
  }

  buy(item){      
    console.log(`${this.email} buys ${this.name}`)
  }

  get email() {
    return this._email    // getter 메소드 - 프로퍼티 값을 읽는 용도 => user1._email로 값을 읽을 필요없이, user1.email로 익을 수 있음
  }

  set email(address) {  // 캡슐화 - user1.email = '123'처럼 프로퍼티에 값을 직접 설정하려고 할 때마다 setter 메소드 실행
    if (address.includes('@')) {  // 값에 대한 유효성 검사
      this._email = address;   // 숨기고자하는 프로퍼티는 이름 앞에 _를 붙임
    } else {
      throw new Error('invalid email address')
    }
  }
}

const user1 = new User('abc@naver.com', '1999-10-21')
user1.email = '123';