
const person = {

    city: "Moscow"
   
   }
      
   const women = Object.create(person);
   women.Age = 32;
   women.Name = "Anna"
   
  

 for (let key in women) {

    if (women.hasOwnProperty(key)) {

        console.log(key + ':'+ ' ' + women[key]);
    }   
}



