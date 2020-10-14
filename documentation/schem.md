# Paw_and_Claws Schema

## Users

| attrubute name | data type  |               details |
| -------------- | :--------: | --------------------: |
| id             |  integer   | not null, primary key |
| email          | string(50) |              not null |
| username       | string(32) |              not null |
| hashedPassword | str.binary |              not null |
| firstName      | string(64) |              not null |
| lastName       | string(64) |              not null |
| phoneNume      | string(10) |              not null |

## ShelterUsers

| attrubute name |  data type  |               details |
| -------------- | :---------: | --------------------: |
| id             |   integer   | not null, primary key |
| email          | string(50)  |              not null |
| username       | string(32)  |              not null |
| hashedPassword | str.binary  |              not null |
| shelterName    | string(128) |              not null |
| phoneNume      | string(10)  |              not null |
| website        | string(255) |              not null |
| address        | string(255) |              not null |
| city           | string(64)  |              not null |
| stateId        |   integer   |              not null |
| zipCode        |  string(5)  |              not null |


## Pets

| attrubute name |  data type  |               details |
| -------------- | :---------: | --------------------: |
| id             |   integer   | not null, primary key |
| breedId        |   integer   |           foreign key |
| shelterId      |   integer   |           foreign key |
| petName        | string(128) |              not null |
| age            |   integer   |              not null |
| sex            |   integer   |              not null |
| size           |   integer   |              not null |
| description    |    text     |              not null |
| photo          | string(255) |              not null |
| isOkayKids     |   boolean   |                       |
| isOkayPets     |   boolean   |                       |
| isAdopted      |   boolean   |                       |

## UserPetPrefs

| attrubute name | data type |               details |
| -------------- | :-------: | --------------------: |
| id             |  integer  | not null, primary key |
| breedId        |  integer  |           foreign key |
| age            |  integer  |              not null |
| sex            |  integer  |              not null |
| size           |  integer  |              not null |
| isOkayKid      |  boolean  |                       |
| isOkayPets     |  boolean  |                       |
| userId         |  integer  |           foregin key |


## AdoptionRequests

| attrubute name | data type |               details |
| -------------- | :-------: | --------------------: |
| id             |  integer  | not null, primary key |
| userId         |  integer  |           foreign key |
| petId          |  integer  |           foreign key |
| shelterId      |  integer  |           foreign key |
| message        |   text    |                       |
| isAccepted     |  boolean  |                       |

## Breeds

| attrubute name |  data type  |               details |
| -------------- | :---------: | --------------------: |
| id             |   integer   | not null, primary key |
| breedName      | string(128) |              not null |
| petType        | string(10)  |              not null |

## States

| attrubute name | data type |               details |
| -------------- | :-------: | --------------------: |
| id             |  integer  | not null, primary key |
| stateName      | string(2) |              not null |
