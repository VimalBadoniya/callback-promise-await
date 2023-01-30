console.log("Person 1 - shows Ticket")
console.log("Person 2 - shows Ticket")



async function entry(){

    function getTicket(){
        return new Promise((resolve,reject)=>{
          let wifeBringsTicktet = true ;
          if(wifeBringsTicktet){
            resolve(`wife: I got tickets
Husband : we should go in and watch movie
Wife : I'm hungry , i need some popcorn`  )
          }
        })
    }

    function getPopcorn(){
        return new Promise((resolve,reject)=>{
            let husbandBuysPopcorn = true ; 
            if(husbandBuysPopcorn){
                resolve(`Husband: here is your popcorn , now can we go in" 
Wife: Where is the cheese in my popcorn`)
            }
        })
    }

    function getCheese(){
        return new Promise((resolve,reject)=>{
          let husbandGotCheese = true ; 
          if(husbandGotCheese){
            resolve(`husband: I got cheese too , new can we go in
wife:Please get me some cold drinks too`)
          }
        })
    }

    function getColddrinks(){
        return new Promise((resolve,reject)=>{
           let husbandBuysColddrinks = true ;
           if(husbandBuysColddrinks){
            resolve(`husband:,cold drinks , now can we go
wife:we should go in , we are getting late
husband:thank you for reminding me that`)
           }
        })
    }

    await getTicket().then((o)=>{console.log(o)})
    await getPopcorn().then((o)=>{console.log(o)})
    await getCheese().then((o)=>{console.log(o)})
    await getColddrinks().then((o)=>{console.log(o)})
}
entry();
console.log("Person 4 - shows Ticket")
console.log("Person 5 - shows Ticket")
