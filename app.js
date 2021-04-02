var titleTime = $('#currentDay')
var currentDay  = moment().format(" dddd, MMM Do YY")
$(titleTime).text(currentDay) 
var schedule = $('.container')
var timeBox = $(".input-group mb-3")
// every second the current time is returned
setInterval(function(){
    var currentTime = moment().format('LTS')
     return currentTime
},1000)



function handleFormSubmit(event){
    event.preventDefault()
    var spike = event.target
    
    
    console.log(spike.parent())
}

$('button').on('click' , handleFormSubmit)