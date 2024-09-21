From here Dev Tinder code starts

* version of any library 
for eg :- 
        - version changed from 1.0.0 to 1.0.1 -> means patch( small change or bugfix)
        - version changed from 1.0.1 to 1.1.1 -> means minor changes (features update)- backward compatible
        - version changed from 1.1.1 to 2.1.1 -> means major changes - { major changes are only updated when there is big change that will break the existing versions}

    for eg:- if version of any library is 
        - express :"^4.19.2"
          this `^` carrat means - that our library will be automatically will be updated whenever any minor or patch got released - eg :- 4.x.x
        - express :"4.19.2"
           means this will never get auto update, it will always use this version only
        - express :"~4.19.2"
           means The version can be updated to any patch version as long as it stays within the same minor version.
           Allowed updates: 4.19.x (e.g., 4.19.3, 4.19.4, etc.)
           Not allowed: Updates to 4.20.0 or higher, or downgrades to 4.18.x.