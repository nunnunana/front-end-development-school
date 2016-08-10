###### eatdesignlove's Front-End Development Study

# Day40

## 잊지말기
- [네이티브의 성능이 역시 최고](http://www.stefankrause.net/js-frameworks-benchmark2/webdriver-java/table.html?utm_source=javascriptweekly&utm_medium=email)
- removeAtrribute()

## createNode Helper function 

요소노드 또는 텍스트를 포함한 요소노드를 만드는 핼퍼함수.

```js
function createNode(name, text) {
  if ( text != undefined ) {
    var el = createEl(name)
    var el_text = createText(text);
    el.appendChild(el_text);
    return el;
  } else {
    return document.createElement(name);
  }
}
```

## DOM API

### 노드 교체

위치를 교체하는 것이 아니라, 이전 노드를 삭제하지만 기존의 값은 결과 값으로 반환된다.

```
target_node.parentNode.replaceChild(replace_node, target_node)
```

### 노드 복제

```
- node.cloneNode() // 요소만 복제
- node.cloneNode(true) // 인자가 true인 경우, 내부 내용까지 복제
```

> changePositionNodes()

### node.isEqualNode() (DOM Lv3, IE 호환 가능)

### node.contains(other_node) (DOM Lv4, IE 호환 가능)


## Todo
- [ ] 핼퍼함수 개선해서, 모달 코드 개선하기(attr) + todolist
- [v] 진행한 코드 다시 작성하기 replaceNodes()`...
- [v] github FDS 폴더정리
- [ ] FDS/referencs 읽기 (A__Fundmantal)
- [ ] sportShop.
