###### eatdesignlove's Front-End-Development Study

# Day17

## em으로 구성한 Vertical Rythm 적용
### 왜 필요한가
많은 프로젝트에서 사용되는 픽셀 단위는 폰트를 변경했을 때, 가지고 있는 line-height, margin과 같은 값이 고정되어 있지만 em을 이용해 상대값에 맞추어 작동하게 한다면 버티컬 리듬에 맞게 **모듈러 스케일을 반영**하여 표현 할 수 있다.

### 스케일을 반영한 Vertical Rythm 구성하기


## CSS Position
### Position Properties
- static (Default)
- relative (self) : 일반흐름(Normal Flow)를 깨지 않는다. 
- absolute (offsetParent) : 일반흐름에서 벗어난다.
- fixed (기준: screen, viewport)

>- **offset Parent란?** : 자식요소를 포함하는 가장 가까운 부모 요소 중에 positon 속성이 static이 아닌 부모 요소
- 일반 흐름에서 벗어난다. (Float과 유사해 보임)
- **absolute와 fixed를 적용하면 display 속성 값이 block으로 변경 된다.**
- **absolute 적용된 요소의 부모에 relative를 설정하는 이유?** : relative는 일반 흐름을 깨지 않기 때문
- **float과 차이점?** : float의 경우는 부모요소가 float된 요소를 감싸게 하는 방법이 있지만 absolute의 경우는 별도로 height 높이를 제공해야한다.
- **fixed** : 기본적으로는 absolute와 유사하게 처리되어 보이나, 처리 결과는 다르다. 고정 형태로 위치가 설정된다. 화면 스크롤과 상관 없이 항상 그 자리를 유지한다.
- **z-index 속성의 경우는 반드시 position속성(static 제외)과 함께 사용된다.** z-index 속성 값은 양의 정수, 0, 음의 정수 사용이 가능. 단 설정시 1단위가 아닌 10단위나 100 단위로 설정하는 것이 유지보수 관점에서 권장된다.
- 특징을 탐구해보기 : [부모A, [자식C]] + [부모B, [자식D]]

## 참고자료 
### aria-hidden 
버튼에 아이콘 폰트를 추가했을 때, 스크린리더가 아이콘 부분을 제대로 읽지 못하기 때문에, aria-hidden을 이용해서 스크린리더 상에서 읽지 않도록 처리해 준다.

콘텐츠가 없을 경우 스크린리더는 **버튼**이라고 읽게 된다. 때문에 `label`을 사용하거나 aria를 사용한다.

