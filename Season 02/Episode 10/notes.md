* Authentication
 - so whenever you tried to login than the server will send the JWT token back in a cookie
 - in a cookie expiry time of the token will also be there
 - now whenever you try to hit any api now on, than you will send this JWT token cookie with each API, and this token will first validate and than the next task will happen

 - when the cookie got expired and you try yo hit any api, than it will send an error and ask you to login again