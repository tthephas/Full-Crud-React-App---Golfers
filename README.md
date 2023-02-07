### Full stack React CRUD app - Golfers

#Resources 

##Golfers 

##Routes table

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| GET    | `/golfers`                | `golfers#index`    |
| GET    | `/golfers/:id`            | `golfers#show`    |
| POST   | `/golfers`                | `golfers#create`    |
| PATCH  | `/golfers/:id`            | `golfers#update`  |
| DELETE | `/golfers/:id`            | `golfers#delete`   |


##Users 
##Routes

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password/`    | `users#changepw`  |
| DELETE | `/sign-out/`           | `users#signout`   |


##Toys

#Routes
## need to fix from toys to something for golfers
## maybe championships, equipment, sponsors

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/toys/:petId`         | `toys#create`    |
| PATCH  | `/toys/:petId/:toyId`  | `toys#update`  |
| DELETE | `/toys/:petId/:toyId`   | `toys#delete`   |