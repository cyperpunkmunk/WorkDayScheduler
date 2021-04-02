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
    // time for that field
    var boxTime = spike.id
    
    if(spikeInput.value === ""){
        console.log('invalid input')
    } else {
        localStorage.setItem(boxTime , spikeInput.value)
    }

    $(".text-box").each(function(){
        console.log($(this))
        console.log($(this).attr("name"))
    
        var spikeReturn = localStorage.getItem($(this).attr("name"))
        console.log(spikeReturn)

        $(this).attr("name").value = spikeReturn

    })
    
}



$('button').on('click' , handleFormSubmit)
