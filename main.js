const result=new XMLHttpRequest;
result.open("GET","https://restcountries.com/v3.1/all",true);
result.send();
result.onload=function(){

    var responsedata=JSON.parse(result.response);
  
//a. Get all the countries from Asia continent /region using Filter method  
    const name=responsedata.filter((contry)=>contry.region==="Asia");
name.forEach((cn1)=>console.log(cn1.name.common));


    //b. Get all the countries with a population of less than 2 lakhs using Filter method
    const population1=responsedata.filter((pop)=>pop.population<200000);
    population1.forEach((cn2)=>console.log(cn2.name.common));



   //c. Print the following details name, capital, flag, using forEach method

    responsedata.forEach(element => {console.log(`
      Name:${element.name.common}
   capital:${element.capital} 
      flag:${element.flag}`);});

 //d. Print the total population of countries using reduce method
   var populat=responsedata.map((x)=>x.population)
    let total=populat.reduce((a,r)=>{
        return a+r
    },0)
     console.log("Total population:" +total);

     //e. Print the country that uses US dollars as currency.
   const curr=responsedata.filter((cur)=>cur.currencies && cur.currencies.USD)
    curr.forEach((usd)=>console.log(usd.name.common))
}