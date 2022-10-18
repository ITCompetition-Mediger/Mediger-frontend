<p align="middle">
<img width="200px;" src="https://velog.velcdn.com/images/cil05265/post/220ace96-1f70-4714-8390-7497de4359d5/image.png"/>
</p>

<h1 align="middle">Mediger</h1>

<p align="middle">오늘 먹을 약, 내일 먹을 약, 잊지 말고 Mediger 💊</p>
<br/>

## 📝 INTRODUCTION

#### 💊 개발 동기
> 최근 정보화 시대에 이르러 약에 대한 수요 또한 급증하고, 환자에게 의료정보에 대한 접근이 자유로워졌습니다. 이러한 동향에 전보다 소비자는 좀 더 합리적으로 약물을 소비하고 있습니다. 즉 의사의 소견에 더해, 자신의 증상에 맞게 자체적으로 필요한 약이 무엇이고, 또 그 약의 부작용은 무엇인지 꼼꼼히 따지고 있는 것입니다. 하지만 이러한 흐름에 잘못된 정보를 받아들이거나, 상대적으로 정보접근이 어려운 취약계층을 중심으로 약물 오용사건이 급증했습니다. **저희 Mediger팀은 이러한 점에 주목하여, 소비자들에게 좀더 안전하고 믿을 수 있게 정보에 접근토록 하고 싶었습니다.**


#### 💊 개발 목표 및 서비스 간략 소개
> 자신의 증상에 약국에서 자신이 필요한 약물은 무엇인지, 부작용은 무엇인지 알기 쉽게 보여주고, 또는 의료진에게 처방 받은 약이 무엇인지, 환자에게 폭넓은 정보를 제공하고자 하였습니다. 더불어 약물오용을 방지할 수 있도록 자신에게 맞춘 복용 스케줄링 기능을 구현하고. 위급 상황 시 자신의 위치에서 가장 가까운 약국 정보를 받아 좀더 빠른 대처가 가능케 하는 것을 목표로 하였습니다. **따라서 저희 메디저 서비스는 손 쉬운 약 검색, 보기 쉽고 간편한 일간메디저, 간단 깔끔한 메디저리스트에 중점을 둬, 기존에 다른 알약 정보 서비스와 차별화를 두었습니다.**


<br/>

## ⏰ DEV PERIOD
`2022-08-08` - `2022-10-16`
<br/>

## 🎨 DESIGN
- [와이어프레임](https://www.figma.com/file/gskrs6EakmR3aS3IjoYogu/mediger-fin?node-id=0%3A1)
<br/>

## 🔨 TECH STACK
### Frontend

<img alt="Javascript" src ="https://img.shields.io/badge/JavaScript-F7DF1E.svg?&logo=JavaScript&logoColor=white"/> <img alt="React" src ="https://img.shields.io/badge/React-61DAFB.svg?&logo=React&logoColor=white"/>
<img alt="Styled-Component" src ="https://img.shields.io/badge/Styled Components-DB7093.svg?&logo=styled-components&logoColor=white"/>
<img alt="React-Router" src ="https://img.shields.io/badge/React Router-CA4245.svg?&logo=React Router&logoColor=white"/>

### Backend

<img alt="Java" src ="https://img.shields.io/badge/Java-007396.svg?&logo=Java&logoColor=white"/> <img alt="Spring boot" src ="https://img.shields.io/badge/Spring boot-6DB33F.svg?&logo=Spring boot&logoColor=white"/>
<img alt="Spring Security" src ="https://img.shields.io/badge/Spring Security-6DB33F.svg?&logo=Spring Security&logoColor=white"/>
<img alt="MySQL" src ="https://img.shields.io/badge/MySQL-4479A1.svg?&logo=MySQL&logoColor=white"/>
<img alt="Amazon AWS" src ="https://img.shields.io/badge/Amazon AWS-232F3E.svg?&logo=Amazon AWS&logoColor=white"/>

<br/>

## 👨‍👨‍👧‍👧 CONTRIBUTORS

|                                                                   백엔드                                                                    |                                                                   백엔드                                                                    |                                                                 프론트엔드                                                                 |                                                                 프론트엔드                                                                 |                                                                  
| :-----------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------: | 
| <img src="https://velog.velcdn.com/images/cil05265/post/a8173425-c954-4cad-9614-de98dcd4b7f5/image.jpeg" width=400px alt="박정민"/> | <img src="https://velog.velcdn.com/images/cil05265/post/74e299fc-20b6-4b03-841a-9eded56fdc29/image.png" width=400px alt="이지윤"/> | <img src="https://user-images.githubusercontent.com/87658765/165192815-1afc0b99-afc2-452f-8328-0038d1407f90.png" width=400px alt="유지아"> | <img src="https://velog.velcdn.com/images/cil05265/post/583e36bf-885b-4539-b3d7-5c7751503de7/image.png" width=400px alt="명지우"> |
|                                                    [박정민](https://github.com/bluemudd)                                                    |                                                    [이지윤](https://github.com/dd-jiyun)                                                    |                                                 [유지아](https://github.com/yujiah-github)                                                 |                                                    [명지우](https://github.com/MyungJiwoo)                                                     |


## ERD
<img src="https://velog.velcdn.com/images/cil05265/post/ab5c8b23-61f3-4c6d-b548-eb195c6b6f88/image.png" width=1000px alt="ERD"/>

## Main Function
- 의약품 검색 서비스 제공
  - 증상, 의약품명별 의약품 상세 조회 기능
  - 약물별 스크랩 추가 및 삭제 기능
  - 메디저 리스트 추가 기능

- 주변 약국 및 병원 검색 서비스 제공
  - 카카오맵 API를 이용하여 현 위치 근처 병원 및 약국 조회 기능
  - 현 위치 근처 병원 및 약국 리스트별 조회 기능

- 메디저 리스트 서비스 제공
  - 메디저 리스트에 추가한 약물 조회 기능
  - 시간대별, 일자별 약 복용 방법 설정 기능

- 월간, 일간 메디저 서비스 제공
  - 스크랩한 약물 조회 기능
  - 캘린더를 이용한 이전 복용 이력 조회 기능

## Features to be updated in Later
- 메디저 리스트에 알람 기능
- 커뮤니티 기능
- 외국어 번역 기능

## BE Repository 💊

[Mediger BE](https://github.com/ITCompetition-Mediger/Mediger-backend-API)

## Notion Link 💊
[Notion Link 보러가기](https://silky-dianella-aea.notion.site/Mediger-4dc6427b62af4ad48f0c70842dc7d16b)
