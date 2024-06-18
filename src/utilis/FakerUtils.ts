import { faker } from '@faker-js/faker';

export default class fakerUtils{

  public getFirstName():string{

  
     return faker.person.firstName()
   };
   

}