// # SYNTAX //

let myPromise = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);



// Add Header to other pages

document.addEventListener("DOMContentLoaded",function(){

    console.log(fetch('index.html'), 'fetch console')

    fetch('index.html')
            .then(response => {

                console.log(response, 'res before .text')
                console.log(response.text(),"response after .text")
               return  response.text()
            })
            .then(data=>{

                document.getElementById('header-placeholder').innerHTML = data;
            })

            .catch(error=> console.error("Error Loading Header:",error));


})
