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
    
    //button we click
    var spike = event.target.parentElement
    //getting our input from input field
    var spikeInput = event.target.previousElementSibling
    
    
    
    console.log(spike.parentElement)
    console.log(spikeInput.value)
}

$('button').on('click' , handleFormSubmit)