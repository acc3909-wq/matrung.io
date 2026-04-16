const PLACE_DATA = [
  {
    id: "anmok-coffee-street",
    name: "안목해변 커피거리",
    category: "Food Service",
    description: "바다를 바라보며 여유롭게 커피 한 잔을 즐기기 좋은 강릉의 대표 카페 거리입니다.",
    detail: "해변 산책과 카페 방문을 자연스럽게 이어가기 좋아 강릉다운 감성을 가장 편하게 느끼기 좋은 지역입니다.",
    point: "바다 전망과 카페거리 분위기를 함께 즐기기 좋은 대표 지역",
    rating: 4.8,
    reviewCount: 1284,
    reviews: [
      "친구와 같이 바다를 보며 수다 떨기 좋아서 강릉 오면 먼저 생각나는 곳이었어요.",
      "카페마다 분위기가 달라 데이트할 때 산책하며 천천히 둘러보기 좋았습니다.",
      "가족과 함께 가도 해 질 무렵 풍경이 예뻐서 사진 남기기 좋았어요.",
      "주차하고 접근하기도 무난해서 같이 모임 장소로 잡기 편했습니다.",
      "감성적인 분위기가 좋아서 다음에도 친구와 다시 걷고 싶은 거리였어요."
    ],
    keywords: ["친구", "데이트", "가족", "분위기", "바다뷰"]
  },
  {
    id: "jungang-market-food-street",
    name: "강릉중앙시장 먹거리거리",
    category: "Food Service",
    description: "다양한 강릉 먹거리를 한자리에서 맛볼 수 있는 활기찬 시장 거리입니다.",
    detail: "짧게 둘러봐도 강릉다운 시장 분위기와 간식, 로컬 음식의 흐름을 한 번에 느끼기 좋은 지역입니다.",
    point: "먹거리 탐방과 로컬 시장 분위기를 한 번에 느끼기 좋은 곳",
    rating: 4.7,
    reviewCount: 1642,
    reviews: [
      "친구와 같이 가서 이것저것 나눠 먹기 좋아 수다 떨며 둘러보기 좋았어요.",
      "가족과 함께 먹기 좋은 메뉴가 많아서 부모님 모시고 가도 만족스러울 것 같았습니다.",
      "혼자 가도 간단하게 먹을 수 있는 음식이 많아 부담이 적었어요.",
      "시장 동선이 어렵지 않아 단체 모임으로 같이 방문하기에도 편해 보였습니다.",
      "강릉 오면 모임처럼 여러 명이 함께 다시 들러보고 싶은 곳이에요."
    ],
    keywords: ["친구", "가족", "혼밥", "회식"]
  },
  {
    id: "market-street-food",
    name: "시장 먹거리",
    category: "Popular Restaurants",
    description: "강릉중앙시장에서 다양한 먹거리를 가볍게 둘러보고 바로 즐기기 좋은 구역입니다.",
    detail: "시장 특유의 활기와 즉석 먹거리의 재미가 함께 있어 처음 방문해도 분위기를 쉽게 즐길 수 있습니다.",
    point: "시장 분위기 속에서 강릉 먹거리를 한 번에 만나기 좋은 곳",
    rating: 4.6,
    reviewCount: 932,
    reviews: [
      "친구와 같이 지나가며 하나씩 사 먹기 좋아서 모임 분위기로 즐기기 좋았어요.",
      "혼자 들러도 간단하게 먹고 이동하기 좋아 부담 없는 편이었습니다.",
      "시장 특유의 활기 덕분에 같이 방문하면 더 재미있게 느껴졌어요.",
      "여러 명이 각자 고른 메뉴를 나눠 먹기 좋아 회식 느낌으로도 괜찮아 보였습니다."
    ],
    keywords: ["친구", "혼밥", "회식"]
  },
  {
    id: "market-local-food",
    name: "로컬 음식",
    category: "Popular Restaurants",
    description: "강릉다운 맛을 찾고 싶다면 중앙시장 주변의 친근한 로컬 음식부터 살펴보기 좋습니다.",
    detail: "관광지 느낌보다 일상적인 강릉의 맛을 편안하게 접할 수 있어 로컬 분위기를 느끼기 좋은 선택입니다.",
    point: "지역 사람들이 즐기는 편안한 강릉 맛을 느끼기 좋은 구역",
    rating: 4.7,
    reviewCount: 781,
    reviews: [
      "가족과 함께 먹기 좋은 편안한 분위기라 부모님과 와도 좋겠다고 느꼈어요.",
      "같이 한 끼 먹으며 이야기 나누기 좋은 로컬 느낌이 살아 있었습니다.",
      "혼자 들러도 든든하게 먹고 나오기 좋아 부담이 없었어요.",
      "시장 주변이라 모임 장소로 잡기에도 접근성이 괜찮았습니다.",
      "다음에는 가족과 함께 다른 메뉴도 먹어보고 싶을 만큼 인상이 좋았어요."
    ],
    keywords: ["가족", "혼밥", "회식"]
  },
  {
    id: "market-snacks",
    name: "간단한 간식",
    category: "Popular Restaurants",
    description: "가볍게 들고 먹기 좋은 간식이 많아 짧게 들러도 만족스럽게 둘러보기 좋습니다.",
    detail: "시장 안을 걸으며 하나씩 맛보기 좋은 간식이 모여 있어 이동 중 잠깐 들르기에도 잘 어울립니다.",
    point: "이동하면서 부담 없이 즐기기 좋은 시장 간식이 많은 곳",
    rating: 4.5,
    reviewCount: 648,
    reviews: [
      "친구와 같이 하나씩 사서 나눠 먹기 좋아 시장 구경이 더 재미있었어요.",
      "혼자 가도 간단하게 먹기 좋은 간식이 많아 부담이 없었습니다.",
      "가족과 함께 잠깐 들러도 같이 먹기 좋은 메뉴가 많아 만족스러웠어요.",
      "줄이 아주 길지 않은 곳이 많아서 모임 전에 가볍게 이용하기 편했습니다."
    ],
    keywords: ["친구", "가족", "혼밥"]
  },
  {
    id: "anmok-ocean-view",
    name: "바다를 보며 쉬기 좋은 곳",
    category: "Popular Cafes",
    description: "창가나 테라스에서 바다를 바라보며 커피를 즐기기 좋은 분위기가 안목해변의 매력입니다.",
    detail: "눈앞에 펼쳐지는 바다 풍경 덕분에 짧은 휴식만으로도 강릉 여행의 분위기를 충분히 느낄 수 있습니다.",
    point: "바다 전망과 여유로운 카페 시간을 함께 즐기기 좋은 곳",
    rating: 4.8,
    reviewCount: 1107,
    reviews: [
      "데이트로 가서 바다뷰 보며 분위기 있게 이야기 나누기 정말 좋았어요.",
      "친구와 같이 창가 자리에 앉아 수다 떨다 보니 오래 머물고 싶을 만큼 편안했습니다.",
      "음료 맛이 깔끔해서 감성적인 바다 풍경과 함께 즐기기 좋았어요.",
      "사진 찍기 좋은 포인트가 많아 데이트 장소로 만족도가 높았습니다.",
      "산책 후 들르기 좋아 같이 가볍게 쉬어가기 좋은 카페였어요.",
      "다음에도 친구나 연인과 다시 방문하고 싶은 바다뷰 카페입니다."
    ],
    keywords: ["친구", "데이트", "분위기", "바다뷰"]
  },
  {
    id: "anmok-walk-cafe",
    name: "산책과 함께 즐기기 좋은 코스",
    category: "Popular Cafes",
    description: "해변을 따라 가볍게 걷고 카페에서 쉬는 흐름이 자연스럽게 이어지는 거리입니다.",
    detail: "걸음이 무겁지 않은 동선이라 누구와 함께 와도 편하게 둘러보기 좋고, 강릉의 여유를 느끼기 좋습니다.",
    point: "해변 산책과 카페 방문을 자연스럽게 이어가기 좋은 코스",
    rating: 4.7,
    reviewCount: 894,
    reviews: [
      "데이트할 때 바다 산책하고 같이 카페 들어가는 흐름이 자연스러워 만족스러웠어요.",
      "친구와 같이 천천히 걸으며 수다 떨기 좋아서 복잡하지 않은 점이 좋았습니다.",
      "가볍게 산책하고 쉬기에 딱 맞는 감성적인 분위기였어요.",
      "창가 자리에서 사진 찍기 좋아 데이트 사진 남기기에도 좋았습니다.",
      "이동 거리가 부담스럽지 않아 가족과 함께 와도 편할 것 같았습니다."
    ],
    keywords: ["친구", "데이트", "가족", "분위기", "바다뷰"]
  },
  {
    id: "anmok-street-mood",
    name: "강릉다운 감성이 느껴지는 거리",
    category: "Popular Cafes",
    description: "바다 가까이에 카페가 이어져 있어 강릉 특유의 여유롭고 감성적인 분위기를 느끼기 좋습니다.",
    detail: "카페 이름을 하나씩 몰라도 거리 전체의 분위기만으로도 충분히 만족감을 주는 강릉 대표 공간입니다.",
    point: "강릉다운 카페거리 분위기를 가장 진하게 느끼기 좋은 지역",
    rating: 4.8,
    reviewCount: 1365,
    reviews: [
      "데이트로 걷기만 해도 감성적인 분위기가 살아 있어서 만족스러웠어요.",
      "친구와 같이 카페를 옮겨 다니며 수다 떨기 좋은 거리였습니다.",
      "사진 찍기에도 좋고 바다뷰가 예뻐서 연인과 함께 오기 좋았어요.",
      "카페마다 음료 구성이 달라 친구 모임으로 취향 맞춰 고르기 편했습니다.",
      "카페를 꼭 정하지 않아도 분위기만으로 충분히 데이트 느낌이 났어요.",
      "다음 여행에서도 친구나 연인과 다시 들러 천천히 둘러보고 싶은 지역입니다."
    ],
    keywords: ["친구", "데이트", "분위기", "바다뷰"]
  },
  {
    id: "gyeongpodae",
    name: "경포대",
    category: "Popular Attractions",
    description: "강릉을 대표하는 명소로, 시원한 풍경과 함께 여행 분위기를 느끼기 좋은 장소입니다.",
    detail: "처음 강릉을 찾는 사람도 부담 없이 들르기 좋고, 대표 명소다운 상징적인 분위기를 느낄 수 있습니다.",
    point: "강릉 대표 명소로 가장 먼저 떠올리기 좋은 장소",
    rating: 4.8,
    reviewCount: 2143,
    reviews: [
      "가족과 함께 와서 부모님과 풍경 보기 좋은 대표 명소라고 느꼈어요.",
      "데이트로 들러도 분위기가 좋아 사진 남기기 괜찮은 장소였습니다.",
      "가볍게 산책하며 둘러보기에도 만족감이 큰 곳이었어요.",
      "주변을 천천히 걸을 수 있어 가족 단위로 함께 움직이기 편했습니다.",
      "처음 강릉 오는 가족이나 연인에게 먼저 추천하기 좋은 명소였어요."
    ],
    keywords: ["데이트", "가족", "분위기"]
  },
  {
    id: "gyeongpo-beach",
    name: "경포해변",
    category: "Popular Attractions",
    description: "넓은 해변과 시원한 바다 풍경이 어우러져 가볍게 걷고 쉬기 좋은 강릉 대표 해변입니다.",
    detail: "복잡하게 계획하지 않아도 바다를 보고 걷는 것만으로 충분히 만족스러운 시간을 보낼 수 있는 장소입니다.",
    point: "바다와 산책을 함께 즐기기 좋은 강릉 대표 해변",
    rating: 4.9,
    reviewCount: 2518,
    reviews: [
      "데이트할 때 바다 보며 산책하기 정말 좋아서 분위기가 살아났어요.",
      "친구와 같이 해변을 걸으며 사진 찍고 수다 떨기 좋은 곳이었습니다.",
      "가족과 함께 와도 바다 풍경이 시원해서 같이 쉬어가기 좋았어요.",
      "접근성이 좋아서 부담 없이 들렀다가 함께 걷기 편했습니다.",
      "가볍게 산책하며 바다뷰를 즐기고 싶은 연인이나 가족에게 잘 어울릴 것 같아요."
    ],
    keywords: ["친구", "데이트", "가족", "분위기", "바다뷰"]
  },
  {
    id: "ojukheon",
    name: "오죽헌",
    category: "Popular Attractions",
    description: "강릉의 역사와 전통을 느낄 수 있는 문화 공간으로, 차분하게 둘러보기 좋은 명소입니다.",
    detail: "바다 중심 여행과는 또 다른 분위기로 강릉의 역사문화 매력을 느끼고 싶을 때 잘 어울리는 장소입니다.",
    point: "역사문화 체험과 전통 분위기를 함께 느끼기 좋은 곳",
    rating: 4.7,
    reviewCount: 987,
    reviews: [
      "가족과 함께 와서 부모님과 차분하게 둘러보기 좋은 분위기였습니다.",
      "데이트 코스로도 조용하고 감성적인 분위기가 있어 인상 깊었어요.",
      "바다 위주 일정 사이에 다른 분위기를 함께 느끼기 좋은 장소였습니다.",
      "볼거리가 깔끔하게 정리되어 있어 가족과 천천히 관람하기 편했어요.",
      "전통과 이야기에 관심 있는 분들과 같이 오기 좋은 곳이라고 느꼈습니다."
    ],
    keywords: ["데이트", "가족", "분위기"]
  },
  {
    id: "date-course-anmok",
    name: "안목해변 산책 → 카페거리 방문",
    category: "Date Course",
    description: "바다를 따라 걷고 카페거리에 들르며 강릉다운 분위기를 편하게 즐기기 좋은 코스입니다.",
    detail: "해변 산책과 감성적인 카페 시간을 자연스럽게 이어갈 수 있어 부담 없이 즐기기 좋은 대표 데이트 코스입니다.",
    point: "바다 전망과 카페거리 분위기를 함께 즐기기 좋은 코스",
    rating: 4.8,
    reviewCount: 742,
    reviews: [
      "데이트할 때 바다를 보며 산책하고 감성 카페에 들르는 흐름이 자연스러워 만족도가 높았어요.",
      "이동이 어렵지 않아 연인과 천천히 걷고 사진 찍기 좋은 코스였습니다.",
      "바다 쪽에서 같이 사진 남기기 좋아 데이트 기록으로도 잘 어울렸어요.",
      "카페거리 분위기가 좋아서 다음에도 다시 걷고 싶은 데이트 코스입니다."
    ],
    keywords: ["데이트", "분위기", "바다뷰"]
  },
  {
    id: "date-course-gyeongpo",
    name: "경포대 → 경포해변 산책",
    category: "Date Course",
    description: "경포대의 대표 풍경을 본 뒤 경포해변을 천천히 걸으며 여유를 느끼기 좋은 코스입니다.",
    detail: "대표 명소와 해변 산책을 한 번에 즐길 수 있어 처음 강릉을 찾는 여행자에게도 부담 없이 추천하기 좋은 코스입니다.",
    point: "대표 명소와 해변 산책을 한 번에 담기 좋은 코스",
    rating: 4.7,
    reviewCount: 689,
    reviews: [
      "데이트할 때 풍경이 시원해서 걷는 내내 분위기가 좋았어요.",
      "경포대에서 해변으로 이어지는 동선이 자연스러워 같이 이동하기 편했습니다.",
      "바다 배경으로 사진 찍기 좋은 포인트가 많아 연인과 방문하기 좋았어요.",
      "분위기 있게 걷고 사진 남기기 좋아 데이트 코스로 만족스러웠습니다."
    ],
    keywords: ["데이트", "바다뷰"]
  },
  {
    id: "date-course-ojukheon",
    name: "오죽헌 관람 → 주변 한옥 분위기 즐기기",
    category: "Date Course",
    description: "오죽헌을 둘러본 뒤 주변의 단정한 한옥 분위기를 함께 느끼기 좋은 차분한 코스입니다.",
    detail: "북적이는 해변 대신 조용한 분위기 속에서 강릉의 전통과 여유를 함께 즐기고 싶을 때 잘 어울리는 데이트 코스입니다.",
    point: "역사문화 공간과 한옥 분위기를 함께 느끼기 좋은 코스",
    rating: 4.6,
    reviewCount: 514,
    reviews: [
      "차분한 분위기에서 연인과 천천히 걷기 좋아 조용한 데이트 코스로 좋았어요.",
      "볼거리가 깔끔해서 부담 없이 천천히 관람하기 편했습니다.",
      "한옥 분위기가 사진에 잘 담겨 감성적인 기록 남기기 좋았어요.",
      "시끄럽지 않은 분위기를 좋아하는 커플에게 추천하고 싶은 일정입니다."
    ],
    keywords: ["데이트", "분위기"]
  },
  {
    id: "jungang-market-area",
    name: "강릉중앙시장",
    category: "Nearby Stores",
    description: "로컬 분위기가 가장 진하게 느껴지는 지역으로, 먹거리와 생활형 상점이 함께 모인 상권입니다.",
    detail: "관광객도 편하게 둘러볼 수 있으면서도 지역 일상이 살아 있어 강릉 상권의 분위기를 가장 쉽게 이해할 수 있습니다.",
    point: "먹거리 탐방과 로컬 쇼핑을 함께 즐기기 좋은 대표 시장 상권",
    rating: 4.7,
    reviewCount: 1468,
    reviews: [
      "가족과 함께 가도 먹거리와 생활형 매장을 같이 볼 수 있어 만족스러웠습니다.",
      "단체 모임처럼 여러 명이 함께 움직여도 강릉다운 분위기를 느끼기 좋았어요.",
      "동선이 복잡하지 않아 부모님과 함께 둘러보기에도 편했습니다.",
      "가볍게 쇼핑하고 같이 먹거리까지 즐길 수 있어 모임 만족도가 높았어요.",
      "부모님과 함께 둘러봐도 부담 없는 분위기라 가족 단위로 방문하기 좋았어요."
    ],
    keywords: ["가족", "회식"]
  },
  {
    id: "anmok-commercial-area",
    name: "안목해변 주변 상권",
    category: "Nearby Stores",
    description: "바다를 보며 쉬기 좋은 카페와 산책 동선이 자연스럽게 이어지는 감성적인 해변 상권입니다.",
    detail: "관광과 휴식을 함께 즐기기 좋고, 바다 주변 상권 특유의 여유로운 흐름이 강하게 느껴지는 지역입니다.",
    point: "바다 전망과 카페거리 분위기를 함께 느끼기 좋은 상권",
    rating: 4.8,
    reviewCount: 1015,
    reviews: [
      "데이트할 때 같이 천천히 걷기 좋은 분위기라 만족스러웠어요.",
      "친구와 함께 카페 들르며 수다 떨기 좋은 해변 상권이었습니다.",
      "해변 상권 특유의 감성과 바다뷰가 살아 있어 사진 찍기 좋았어요.",
      "바다 쪽으로 접근하기 쉬워 연인이나 친구와 함께 이동하기 편했습니다.",
      "분위기 있게 쉬어가고 싶은 커플이나 친구 모임에 추천하기 좋은 상권이에요."
    ],
    keywords: ["친구", "데이트", "분위기", "바다뷰"]
  },
  {
    id: "gyeongpo-commercial-area",
    name: "경포 주변 상권",
    category: "Nearby Stores",
    description: "경포대와 경포해변을 찾는 관광객이 많이 오가는 지역으로, 여행 중 편하게 들르기 좋은 상권입니다.",
    detail: "관광 동선과 가깝고 이동이 자연스러워 쉬어 가거나 필요한 것을 간단히 둘러보기 좋은 지역입니다.",
    point: "관광 동선 중 쉬어가기 좋은 편의형 상권",
    rating: 4.6,
    reviewCount: 853,
    reviews: [
      "가족과 함께 움직여도 너무 복잡하지 않아 편하게 쉬어가기 좋은 상권이었습니다.",
      "관광객 입장에서 필요한 곳들을 같이 둘러보기 무난했어요.",
      "접근성이 좋아서 해변이나 주변 명소와 함께 방문하기 편했습니다.",
      "전체적으로 깔끔하고 부담 없는 분위기라 가족과 함께 이용하기 좋았어요."
    ],
    keywords: ["가족", "분위기", "바다뷰"]
  },
  {
    id: "currency-jungang-market",
    name: "강릉중앙시장 주변",
    category: "Local Currency",
    description: "시장 분위기가 살아 있는 지역으로, 전통시장 안팎의 생활형 매장과 먹거리 상권을 함께 둘러보기 좋습니다.",
    detail: "지역화폐를 사용할 수 있는 분위기를 가장 쉽게 떠올리기 좋은 지역으로, 전통시장 감성이 강하게 남아 있습니다.",
    point: "강릉중앙시장 중심의 전통시장 분위기에서 이용하기 좋은 지역",
    rating: 4.6,
    reviewCount: 724,
    reviews: [
      "가족과 함께 시장 분위기 속에서 지역화폐 사용처를 찾기 쉬운 지역이었어요.",
      "혼자 가도 간단하게 이용할 수 있는 생활형 매장이 많아 부담이 적었습니다.",
      "단체 모임으로 같이 방문해도 전통시장 느낌을 함께 살펴보기 좋았어요.",
      "시장 중심이라 접근성이 괜찮고 부모님과 함께 이동하기도 편했습니다.",
      "실제로 사용할 수 있는 분위기가 잘 정리되어 있어 가족 단위로도 만족스러웠어요."
    ],
    keywords: ["가족", "혼밥", "회식"]
  },
  {
    id: "currency-downtown",
    name: "시내 상권",
    category: "Local Currency",
    description: "강릉 시내 중심으로 다양한 소상공인 매장과 생활형 점포가 모여 있어 편하게 이용하기 좋은 지역입니다.",
    detail: "여행 중 필요한 물건을 보거나 간단히 들르기 좋은 분위기로, 일상형 상권을 찾을 때 참고하기 좋습니다.",
    point: "소상공인 매장과 생활형 상점을 함께 둘러보기 좋은 시내 구역",
    rating: 4.5,
    reviewCount: 612,
    reviews: [
      "혼자 이동해도 시내 중심이라 접근성이 좋아 부담 없이 보기 좋았어요.",
      "소상공인 매장 느낌이 살아 있어 회식이나 모임 전에 같이 살펴보기 좋았습니다.",
      "관광지보다 실생활에 가까운 분위기라 혼밥이나 간단한 이용에 잘 맞아 보였어요.",
      "주변이 복잡하지 않아 필요한 곳을 혼자 편하게 찾아보기 좋은 느낌이었습니다.",
      "실용적인 분위기의 상권을 찾는 분들이나 단체 모임 전 참고용으로 무난해요."
    ],
    keywords: ["혼밥", "회식"]
  },
  {
    id: "currency-tourist-area",
    name: "관광지 주변 상권",
    category: "Local Currency",
    description: "경포나 안목해변처럼 관광객이 많이 찾는 지역 주변에서 일부 로컬 상점을 중심으로 둘러보기 좋은 상권입니다.",
    detail: "관광 일정과 함께 가볍게 이용할 수 있는 분위기의 상권으로, 로컬 매장을 함께 살펴보기에 적당한 지역입니다.",
    point: "관광지 주변에서 일부 로컬 상점을 함께 이용하기 좋은 상권",
    rating: 4.4,
    reviewCount: 538,
    reviews: [
      "가족과 함께 로컬 상점을 둘러본다는 느낌이 잘 살아 있었습니다.",
      "데이트 중에도 잠깐 들르기 좋아 부담 없는 분위기로 보였어요.",
      "관광지 근처라 접근성이 좋고 같이 이동하며 이용하기 괜찮아 보였습니다.",
      "전체 분위기가 가볍고 편해서 가족이나 연인과 여행 중 참고하기 좋은 안내였어요."
    ],
    keywords: ["가족", "데이트"]
  }
];

const PLACE_DETAILS = Object.fromEntries(
  PLACE_DATA.map((place) => [place.id, place])
);

const KEYWORD_RECOMMENDATION_COPY = {
  친구: "친구와 함께 가기 좋은 장소를 추천합니다.",
  데이트: "분위기 좋은 데이트 장소를 추천합니다.",
  가족: "가족과 함께 둘러보기 좋은 장소를 추천합니다.",
  혼밥: "혼자서도 부담 없이 가기 좋은 장소를 추천합니다.",
  회식: "단체나 모임으로 방문하기 좋은 장소를 추천합니다.",
  바다뷰: "바다 풍경을 함께 즐기기 좋은 장소를 추천합니다."
};

function createStars(rating) {
  const fullStars = Math.round(rating);
  return "★★★★★".slice(0, fullStars) + "☆☆☆☆☆".slice(0, 5 - fullStars);
}

function applyRevealAnimations() {
  document
    .querySelectorAll(".service-card, .action-card")
    .forEach((card) => card.classList.add("reveal"));
}

function getModalMarkup() {
  return `
    <div class="detail-modal-backdrop" data-detail-close></div>
    <div class="detail-modal-panel" role="dialog" aria-modal="true" aria-labelledby="detail-modal-title">
      <button class="detail-modal-close" type="button" aria-label="닫기" data-detail-close>×</button>
      <div class="detail-modal-body" data-detail-content></div>
    </div>
  `;
}

function getPlaceKeywords(placeId) {
  return PLACE_DETAILS[placeId]?.keywords || [];
}

const KEYWORD_PRIORITY_GROUPS = {
  친구: ["분위기", "바다뷰", "가족", "회식"],
  데이트: ["분위기", "바다뷰", "가족"],
  가족: ["분위기", "친구", "바다뷰"],
  혼밥: ["회식"],
  회식: ["친구", "가족"],
  바다뷰: ["분위기", "데이트", "친구"]
};

function getKeywordBadgeMarkup(placeId) {
  return getPlaceKeywords(placeId)
    .map((keyword) => `<span class="mini-keyword-badge">${keyword}</span>`)
    .join("");
}

function injectPlaceCardKeywords() {
  document.querySelectorAll("[data-place-card]").forEach((card) => {
    const placeId = card.dataset.placeCard;
    const place = PLACE_DETAILS[placeId];

    if (!place || !place.keywords?.length || card.querySelector(".place-keyword-row")) {
      return;
    }

    const keywordRow = document.createElement("div");
    keywordRow.className = "place-keyword-row";
    keywordRow.innerHTML = `
      <p class="place-keyword-label">추천 키워드</p>
      <div class="place-keyword-badges">
        ${place.keywords
          .slice(0, 4)
          .map((keyword) => `<span class="mini-keyword-badge">${keyword}</span>`)
          .join("")}
      </div>
    `;

    const pointBox = card.querySelector(".point-box");

    if (pointBox) {
      card.insertBefore(keywordRow, pointBox);
    } else {
      card.appendChild(keywordRow);
    }
  });
}

function getRepresentativeKeywordMarkup(place, selectedKeyword) {
  const orderedKeywords = [
    selectedKeyword,
    ...place.keywords.filter((keyword) => keyword !== selectedKeyword)
  ].slice(0, 3);

  return orderedKeywords
    .map((keyword) => `<span class="mini-keyword-badge">${keyword}</span>`)
    .join("");
}

function createDetailModal() {
  const existingModal = document.querySelector("[data-detail-modal]");

  if (existingModal) {
    return existingModal;
  }

  const modal = document.createElement("div");
  modal.className = "detail-modal";
  modal.setAttribute("data-detail-modal", "");
  modal.setAttribute("hidden", "");
  modal.innerHTML = getModalMarkup();
  document.body.appendChild(modal);

  modal.addEventListener("click", (event) => {
    if (event.target.hasAttribute("data-detail-close")) {
      closeDetailModal(modal);
    }
  });

  return modal;
}

function getReviewCards(place) {
  return place.reviews
    .map(
      (review, index) => `
        <article class="review-card">
          <div class="review-top">
            <strong>사용자 리뷰 ${index + 1}</strong>
            <span>${createStars(place.rating)}</span>
          </div>
          <p>${review}</p>
        </article>
      `
    )
    .join("");
}

function getRecommendedPlaceCards(keyword) {
  return PLACE_DATA
    .filter((place) => place.keywords.includes(keyword))
    .sort((a, b) => {
      const priorityKeywords = KEYWORD_PRIORITY_GROUPS[keyword] || [];
      const aRelatedCount = priorityKeywords.filter((item) => a.keywords.includes(item)).length;
      const bRelatedCount = priorityKeywords.filter((item) => b.keywords.includes(item)).length;

      if (bRelatedCount !== aRelatedCount) {
        return bRelatedCount - aRelatedCount;
      }

      if (b.rating !== a.rating) {
        return b.rating - a.rating;
      }

      return b.reviewCount - a.reviewCount;
    })
    .map(
      (place) => `
        <article class="keyword-result-card">
          <div class="keyword-result-top">
            <div>
              <p class="keyword-result-category">${place.category}</p>
              <h4>${place.name}</h4>
            </div>
            <div class="keyword-result-rating">
              <strong>${place.rating.toFixed(1)}점</strong>
              <span>${createStars(place.rating)}</span>
            </div>
          </div>
          <p class="keyword-result-summary">${place.description}</p>
          <div class="keyword-result-meta">
            <p class="keyword-result-label">대표 키워드</p>
            <div class="keyword-result-tags">
              ${getRepresentativeKeywordMarkup(place, keyword)}
            </div>
          </div>
          <button class="detail-link-button keyword-result-button" type="button" data-place-button="${place.id}">
            자세히 보기
          </button>
        </article>
      `
    )
    .join("");
}

function openDetailModal(placeId) {
  const place = PLACE_DETAILS[placeId];

  if (!place) {
    return;
  }

  const modal = createDetailModal();
  const content = modal.querySelector("[data-detail-content]");

  content.innerHTML = `
    <section class="detail-modal-hero">
      <p class="eyebrow">${place.category}</p>
      <h2 id="detail-modal-title">${place.name}</h2>
      <p class="detail-modal-summary">${place.description}</p>
    </section>

    <section class="detail-section detail-rating-section">
      <div class="detail-section-head">
        <p class="detail-section-kicker">Rating</p>
        <h3>별점과 리뷰 요약</h3>
      </div>

      <section class="detail-summary-grid place-detail-grid">
        <article class="summary-card rating-summary-card">
          <h3>이용 만족도</h3>
          <div class="rating-overview">
            <div class="rating-score">
              <span class="rating-score-number">${place.rating.toFixed(1)}</span>
              <span class="rating-score-unit">점</span>
            </div>
            <div class="rating-copy">
              <p class="rating-stars">별점 ${createStars(place.rating)}</p>
              <p class="rating-count">리뷰 ${place.reviewCount.toLocaleString("ko-KR")}개</p>
            </div>
          </div>
        </article>

        <article class="summary-card">
          <h3>추천 포인트</h3>
          <p>${place.point}</p>
        </article>
      </section>
    </section>

    <section class="detail-section place-description-section">
      <div class="section-heading detail-section-head">
        <p class="detail-section-kicker">Overview</p>
        <h3>상세 정보</h3>
        <p>${place.detail}</p>
      </div>
    </section>

    <section class="detail-section review-section">
      <div class="section-heading detail-section-head">
        <p class="detail-section-kicker">Reviews</p>
        <h3>가상 사용자 리뷰</h3>
        <p>관광 안내 사이트 분위기에 맞춰 짧고 보기 쉽게 정리한 리뷰입니다.</p>
      </div>
      <div class="review-grid">
        ${getReviewCards(place)}
      </div>
    </section>
  `;

  modal.hidden = false;
  document.body.classList.add("modal-open");
}

function closeDetailModal(modal) {
  modal.hidden = true;
  document.body.classList.remove("modal-open");
}

function bindDetailButtons() {
  const buttons = document.querySelectorAll("[data-place-button]");

  if (!buttons.length) {
    return;
  }

  const modal = createDetailModal();

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      openDetailModal(button.dataset.placeButton);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
      closeDetailModal(modal);
    }
  });
}

function bindKeywordButtons() {
  const buttons = document.querySelectorAll("[data-keyword-button]");
  const resultPanel = document.querySelector("[data-keyword-results]");

  if (!buttons.length || !resultPanel) {
    return;
  }

  const resultHeader = resultPanel.querySelector(".keyword-result-header");
  const resultGrid = resultPanel.querySelector(".keyword-result-grid");

  function renderKeywordResults(keyword) {
    const cardsMarkup = getRecommendedPlaceCards(keyword);
    const recommendationCopy =
      KEYWORD_RECOMMENDATION_COPY[keyword] ||
      "선택한 키워드와 잘 어울리는 장소를 추천합니다.";

    resultHeader.innerHTML = `
      <p class="detail-section-kicker">Popular Keyword</p>
      <h3>${keyword}와 잘 어울리는 추천 장소</h3>
      <p>${recommendationCopy}</p>
    `;

    if (!cardsMarkup) {
      resultGrid.innerHTML = `
        <div class="keyword-empty-state">
          <p>선택한 카테고리와 관련된 장소가 아직 없습니다.</p>
        </div>
      `;
      return;
    }

    resultGrid.innerHTML = cardsMarkup;

    resultGrid.querySelectorAll("[data-place-button]").forEach((button) => {
      button.addEventListener("click", () => {
        openDetailModal(button.dataset.placeButton);
      });
    });
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      renderKeywordResults(button.dataset.keywordButton);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyRevealAnimations();
  injectPlaceCardKeywords();
  bindDetailButtons();
  bindKeywordButtons();
});
