/*
static 프로퍼티와 static 메소드 - 클래스에 직접적으로 딸려있는 프로퍼티와 메소드
객체가 아닌 클래스 자체로 접근하고자 할 때 !
*/
class Math {  // PI 프로퍼티와 getCircleArea는 객체가 아닌 클래스 자체로 접근
  static PI = 3.14

  static getCircleArea(radius) {
    return radius * radius* Math.PI
  }
}

console.log(Math.getCircleArea(5))