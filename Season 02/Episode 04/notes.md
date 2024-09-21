* to initialize the git repository in the local repo use this command :- `git init`

* git add . -- to add the all the files in the staging area
* git commit -n "created a express server"

* To push all the code to github or remote
  - create a new blank repository on github
  - paste the command for command to add the remote 
    - git remote add origin <your repositoy lremote link>
    - git branch -M main
    - git push -u origin main


* ab?c: Matches ac or abc (zero or one b).
* ab+c: Matches abc, abbc, abbbc, etc. (one or more bs).
* ab*c: Matches ac, abc, abbc, etc. (zero or more bs or any thing between).
* a(bc)?d: Means bc is optional === ad or abcd

* user?userId=101 => means you are sending something in query
*    you can use it as req.query

* Dynamic params (colon :)
* user/101
* user/:userId => means you are sending something in params
*    you can use it as req.params