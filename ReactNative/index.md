## Things to know

![img](https://www.researchgate.net/profile/Andreas-Biorn-Hansen/publication/323381516/figure/fig5/AS:654720431579138@1533108923685/React-Native-Interpreted-approach-architecture.png)

## Nomad Coders

- [x] 기초 날씨앱

## React Native Challenge

### Day 1

`useAssets` hook과 `AppLoading` component을 사용해서 로딩을 띄우고 이미지 및 폰트를 가져오는 작업

### Day 2

CRNA을 사용 했을 때의 장점

1. Expo만 사용 했을 때는 Native에 접근할 수 없지만 CRNA를 사용하면 Native도 사용가능하고 Expo SDK와 API도 사용가능해서 두 장점 다 가져갈 수 있다

---

`@react-navigation/native` 을 활용하여 앱의 하단 탭을 만들고 **useColorScheme** hook을 사용하여 다크모드 전환

### Day3

Stack Navigator vs Native Stack Navigator

- Navigator props

screenOptions로 전체설정 혹은 Screen 하나씩 따로 설정 가능
`presentation`

`animation`

- Tab과 Stack을 함께 사용하는 방법

Root를 Stack Navigator로 만들어서 Tabs,Stack을 포함시켜준다

### Day 7

`ScrollView` 컴포넌트는 children을 한번에 렌더한다. 성능상 이슈가 생길 수 있음
`FlatList` 컴포넌트는 Lazy render를 지원한다
