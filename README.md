# Recording and Capture App


### #01 Init

### #02 Menu

- 메뉴에서는 system-define standard menu가 많은데 그 녀석을 사용할 수 있는게 role이라는 키워드이다.

### #03 Record Me

- video tag를 이용하여 eletron으로 접근

### #04 Capture video image

### #05 Main <-> Renderer communication

```bash
- main이 send하면 renderer는 on이고 renderer가 send면 main이 on인거만 기억하면 된다. 결국 preload가 필요한 이유는 renderer쪽은 NodeJS API를 사용할 수 없기 때문인데 그래서 preload에 renderer가 사용할 수 있는 send or on method를 구현해놓은 후 renderer에서 그걸 가져다가 쓰면 된다.

- main이 아닌 곳은 전부 renderer라고 보면 되나 ? 아직 너무 헷갈림 
```

### #06 Refactoring directory structure

### #07 Bug fix: close -> destroy