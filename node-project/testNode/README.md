1. Epxress란?

Node는 Express, Koa, Hapi와 같은 프레임워크를 사용하여 개발할 수 있습니다.

위의 프레임워크들이 개발에 필요한 다양한 기능들을 지원하기 때문에, 개발 생산성이 높아지기 때문이죠.

시중( 2017년 11월 기준 )의 Node.js 책을 보시면 Express에 대한 내용은 있는데, 저는 이것이 왜 프레임워크인지 이해를 하지 못했습니다.

그냥 쌩 Node를 사용하는 것과 별반 차이가 없었습니다.

프레임워크라면 개발에 필요한 폴더와 파일들을 생성해주고(스켈레톤), 기본적인 설정도 되어있는 것이라고 생각을 했었으니까요.

그래서 검색을 해보니, 제가 원하는 대로 뼈대가 잡혀있는 프로젝트를 생성하려면 express-generator 모듈을 사용해야 한다고 합니다.

이 글에서 express-generator 모듈을 통해 프로젝트를 생성하는 방법에 대해 알아보겠습니다.

2. Express 프레임워크 생성하기

express-generator 모듈로 프로젝트를 생성하면 프로젝트 뼈대를 만들어 줍니다.

1. express-generator 모듈 설치

우선 exporess-generator 모듈은 내장 모듈이 아니므로, npm을 통해 모듈을 설치해야 합니다.

npm install –g express-generator

g 옵션은 global을 의미합니다.

global로 설치한 모듈은 커맨더 창 어디에서든 명령어를 실행할 수 있으므로, express-generator 모듈을 설치하면 커맨더 창에서 express라는 키워드를 사용할 수 있습니다.

2. 프로젝트 생성

이어서 express-generator로 HelloExpress라는 이름의 스켈레톤 애플리케이션을 생성합니다.

express HelloExpress --view=ejs

3. npm install

# cd HelloExpress

# npm install

바로 package.json 파일에 dependencies 프로퍼티에 모듈들이 정의되어 있습니다.

이 모듈들은 express-generator가 생성해준 것입니다.

npm install명령어를 실행하면, package.json 파일의 dependencies 프로퍼티를 보고 모듈을 설치합니다.

즉, dependencies 에는 모듈을 사용하겠다고 선언만 한 것이고, 진짜로 설치를 하려면 npm install을 해주어야 합니다.

1. 폴더, 파일의 주요 역할

express-generator로 애플리케이션을 생성하면, 아래와 같은 폴더/파일들이 자동으로 추가됩니다.

bin 폴더
프로그램의 실행과 관련된 파일이 있는 폴더입니다.
www 파일을 실행해서 서버가 실행됩니다.
pulbic 폴더
JS, CSS, img 파일 등 리소스 파일이 있는 폴더
routes 폴더
라우터와 관련된 모듈이 있는 폴더
views 폴더
ejs 파일과 같은 템플릿 파일이 있는 폴더
app.js 파일
애플리케이션에서 중심이 되는 파일
서버 설정 / 미들웨어 정의 / 라우트 정의 등 여러가지를 설정하고, 서버 운영을 위한 로직을 작성합니다.
package.json
현재 애플리케이션과 관련된 정보와 모듈을 설치하는데 필요한 의존성이 작성된 파일
