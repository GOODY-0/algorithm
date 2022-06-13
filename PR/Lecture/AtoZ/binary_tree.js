// 일반 트리는 그래프와 동일한 자료구조
// 이진 트리는 각 정점이 최대 2개의 자식을 가지는 트리를 의미한다.

// 0번 인덱스는 편의를 위해 비워둔다.
// 현재 인덱스의 Left 정점 = 현재 index(level) * 2 
// Right = index(level) * 2 + 1
// Parent = floor(index / 2)

const tree = [
  null,
  // level : 1
  9,
  // level : 2
  4, 3,
  // level : 3
  2, 5, null, 7,
  // level : 4
  null, null, null, 4
]