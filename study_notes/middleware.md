# 미들웨어에 대해서

## Helmet

- csp는 Content-Security-Policy 헤더를 설정하여 XSS(Cross-site scripting) 공격 및 기타 교차 사이트 인젝션을 예방합니다.
- hidePoweredBy는 X-Powered-By 헤더를 제거합니다.
- hpkp는 Public Key Pinning 헤더를 추가하여, 위조된 인증서를 이용한 중간자 공격을 방지합니다.
- hsts는 서버에 대한 안전한(SSL/TLS를 통한 HTTP) 연결을 적용하는 Strict-Transport-Security 헤더를 설정합니다.
- ieNoOpen은 IE8 이상에 대해 X-Download-Options를 설정합니다.
- noCache는 Cache-Control 및 Pragma 헤더를 설정하여 클라이언트 측에서 캐싱을 사용하지 않도록 합니다.
- noSniff는 X-Content-Type-Options 를 설정하여, 선언된 콘텐츠 유형으로부터 벗어난 응답에 대한 브라우저의 MIME 가로채기를 방지합니다.
- frameguard는 X-Frame-Options 헤더를 설정하여 clickjacking에 대한 보호를 제공합니다.
- xssFilter는 X-XSS-Protection을 설정하여 대부분의 최신 웹 브라우저에서 XSS(Cross-site scripting) 필터를 사용하도록 합니다.