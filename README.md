Example of using usergrid-objects with Apigee-127

1. Edit config/default.yaml to use your own Usergrid settings
2. a127 usergrid start
3. a127 project start
4. Now here are some things you can do:

Create a dog (using json):
  
    curl -i -H "Content-type: application/json" -X POST http://localhost:10010/dogs -d '{ "name": "Fido", "breed" : "Beagle" }'
    
 Retrieve the dog:
 
    curl -i http://localhost:10010/dogs/Fido
    
 Try to pet the dog:
 
    curl -i -X POST http://localhost:10010/dogs/Fido/pet
    
 Ouch. Update the dog (using json):
 
    curl -i -H "Content-type: application/json" -X PUT http://localhost:10010/dogs/Fido -d '{ "friendly": "true" }'
    
 Pet the dog:
 
    curl -i -X POST http://localhost:10010/dogs/Fido/pet
    
 Attempt to create a dog (using form-urlencoded):
 
    curl -i -X POST http://localhost:10010/dogs -d 'name=Lassie'

 Missing required field breed. Try again:
 
    curl -i -X POST http://localhost:10010/dogs -d 'name=Lassie&breed=Collie'

 List all the dogs:
 
    curl -i http://localhost:10010/dogs
 
