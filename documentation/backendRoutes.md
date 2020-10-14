## Routes and Endpoints

1. Users routes
   * GET /users/:id - return a particular user profile information including role
   * POST /users - create a new user account
   * POST /users/token - used to create token for sustained login
   * PUT /users/:id - update a particular user's information

2. Pets routes
   * GET /pets - returns available pets within match querry
   * GET /pets/:id - return a particular pet for profile page
   * POST /pets - shelter's ability to create a new pet
   * PUT /pets/:id - shelter's ability to update a pet's info
   * DELETE /pets/:id - shelter could delete a particular pet from the database once adopted

3. Shelter Routes
   * GET /shelters/:id  - to get the details of the shelter.
   * POST /shelters - to create a new Shelter.
   * POST /shelters/token - create a shelter token for sustained login
   * PUT /shelters/:id - to update a Shelter.

4. Preferred Pets Routes
   * GET /prefPets/:id - grab user's preferred pet for querry
   * PUT /prefPets/:id - allow a user to update their preferred pet
   * POST /prefPets - user can create a preferred pet

5. Adoption Request Routes
   * GET /adoptionRequests - grab all adoption requests (to display on the shelter's page)
   * GET /adoptionRequests/:id - grab a specific adoption request to display details
   * POST /adoptionRequests - user can create an adoption request
   * PUT /adoptionRequests/:id - shelter can edit a request once it has been handled
