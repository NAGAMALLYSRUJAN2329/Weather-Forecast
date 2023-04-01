// var x = document.getElementById("demo");
// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     x.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }

// function showPosition(position) {
//   x.innerHTML = "Latitude: " + position.coords.latitude +
//   "<br>Longitude: " + position.coords.longitude;
//   latitude=position.coords.latitude;
//   longitude=position.coords.longitude;
// }
// console.log(latitude)
// console.log(longitude)

var currentdate = new Date(); 
var ime=currentdate.getHours() +":"+ currentdate.getMinutes();

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8ed1880b9emsh786eef411405f1ep1b138ajsn06d6b1a165ce',
		'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
	}
};

const getweather=(city)=>{
    // fetch('https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location='+latitude+'%2C'+longitude+'&contentType=json&unitGroup=us&shortColumnNames=0', options)
    fetch('https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location='+city+'&contentType=json&unitGroup=us&shortColumnNames=0', options)
        .then(response => response.json())
        .then((response) => {
    
            console.log(response)
            // console.log(latitude)
            cityname.innerHTML=city.toUpperCase();
            var text=response['locations'][city]['values']['0'].datetimeStr;
            text=text.slice(0,10)
            at.innerHTML=text;
            im.innerHTML=ime
            conditions.innerHTML=response['locations'][city]['values']['0'].conditions;
            temp.innerHTML=response['locations'][city]['values']['0'].temp;
            humidity.innerHTML=response['locations'][city]['values']['0'].humidity;
            wspd.innerHTML=response['locations'][city]['values']['0'].wspd;
            wdir.innerHTML=response['locations'][city]['values']['0'].wdir;
            visibility.innerHTML=response['locations'][city]['values']['0'].visibility;
    
            var text=response['locations'][city]['values']['1'].datetimeStr;
            text=text.slice(0,10)
            date1.innerHTML=text;
            conditions1.innerHTML=response['locations'][city]['values']['1'].conditions;
            temp1.innerHTML=response['locations'][city]['values']['1'].temp;
            humidity1.innerHTML=response['locations'][city]['values']['1'].humidity;
            wspd1.innerHTML=response['locations'][city]['values']['1'].wspd;
            wdir1.innerHTML=response['locations'][city]['values']['1'].wdir;
    
            var text=response['locations'][city]['values']['2'].datetimeStr;
            text=text.slice(0,10)
            date2.innerHTML=text;
            conditions2.innerHTML=response['locations'][city]['values']['2'].conditions;
            temp2.innerHTML=response['locations'][city]['values']['2'].temp;
            humidity2.innerHTML=response['locations'][city]['values']['2'].humidity;
            wspd2.innerHTML=response['locations'][city]['values']['2'].wspd;
            wdir2.innerHTML=response['locations'][city]['values']['2'].wdir;
    
            var text=response['locations'][city]['values']['3'].datetimeStr;
            text=text.slice(0,10)
            date3.innerHTML=text;
            conditions3.innerHTML=response['locations'][city]['values']['3'].conditions;
            temp3.innerHTML=response['locations'][city]['values']['3'].temp;
            humidity3.innerHTML=response['locations'][city]['values']['3'].humidity;
            wspd3.innerHTML=response['locations'][city]['values']['3'].wspd;
            wdir3.innerHTML=response['locations'][city]['values']['3'].wdir;
    
            var text=response['locations'][city]['values']['4'].datetimeStr;
            text=text.slice(0,10)
            date4.innerHTML=text;
            conditions4.innerHTML=response['locations'][city]['values']['4'].conditions;
            temp4.innerHTML=response['locations'][city]['values']['4'].temp;
            humidity4.innerHTML=response['locations'][city]['values']['4'].humidity;
            wspd4.innerHTML=response['locations'][city]['values']['4'].wspd;
            wdir4.innerHTML=response['locations'][city]['values']['4'].wdir;
    
            var text=response['locations'][city]['values']['5'].datetimeStr;
            text=text.slice(0,10)
            date5.innerHTML=text;
            conditions5.innerHTML=response['locations'][city]['values']['5'].conditions;
            temp5.innerHTML=response['locations'][city]['values']['5'].temp;
            humidity5.innerHTML=response['locations'][city]['values']['5'].humidity;
            wspd5.innerHTML=response['locations'][city]['values']['5'].wspd;
            wdir5.innerHTML=response['locations'][city]['values']['5'].wdir;
    
            var text=response['locations'][city]['values']['6'].datetimeStr;
            text=text.slice(0,10)
            date6.innerHTML=text;
            conditions6.innerHTML=response['locations'][city]['values']['6'].conditions;
            temp6.innerHTML=response['locations'][city]['values']['6'].temp;
            humidity6.innerHTML=response['locations'][city]['values']['6'].humidity;
            wspd6.innerHTML=response['locations'][city]['values']['6'].wspd;
            wdir6.innerHTML=response['locations'][city]['values']['6'].wdir;
    
            var text=response['locations'][city]['values']['7'].datetimeStr;
            text=text.slice(0,10)
            date7.innerHTML=text;
            conditions7.innerHTML=response['locations'][city]['values']['7'].conditions;
            temp7.innerHTML=response['locations'][city]['values']['7'].temp;
            humidity7.innerHTML=response['locations'][city]['values']['7'].humidity;
            wspd7.innerHTML=response['locations'][city]['values']['7'].wspd;
            wdir7.innerHTML=response['locations'][city]['values']['7'].wdir;
    
            var text=response['locations'][city]['values']['8'].datetimeStr;
            text=text.slice(0,10)
            date8.innerHTML=text;
            conditions8.innerHTML=response['locations'][city]['values']['8'].conditions;
            temp8.innerHTML=response['locations'][city]['values']['8'].temp;
            humidity8.innerHTML=response['locations'][city]['values']['8'].humidity;
            wspd8.innerHTML=response['locations'][city]['values']['8'].wspd;
            wdir8.innerHTML=response['locations'][city]['values']['8'].wdir;
    
            var text=response['locations'][city]['values']['9'].datetimeStr;
            text=text.slice(0,10)
            date9.innerHTML=text;
            conditions9.innerHTML=response['locations'][city]['values']['9'].conditions;
            temp9.innerHTML=response['locations'][city]['values']['9'].temp;
            humidity9.innerHTML=response['locations'][city]['values']['9'].humidity;
            wspd9.innerHTML=response['locations'][city]['values']['9'].wspd;
            wdir9.innerHTML=response['locations'][city]['values']['9'].wdir;

            var text=response['locations'][city]['values']['10'].datetimeStr;
            text=text.slice(0,10)
            date10.innerHTML=text;
            conditions10.innerHTML=response['locations'][city]['values']['10'].conditions;
            temp10.innerHTML=response['locations'][city]['values']['10'].temp;
            humidity10.innerHTML=response['locations'][city]['values']['10'].humidity;
            wspd10.innerHTML=response['locations'][city]['values']['10'].wspd;
            wdir10.innerHTML=response['locations'][city]['values']['10'].wdir;
            visibility10.innerHTML=response['locations'][city]['values']['10'].visibility;

    
            var text=response['locations'][city]['values']['11'].datetimeStr;
            text=text.slice(0,10)
            date11.innerHTML=text;
            conditions11.innerHTML=response['locations'][city]['values']['11'].conditions;
            temp11.innerHTML=response['locations'][city]['values']['11'].temp;
            humidity11.innerHTML=response['locations'][city]['values']['11'].humidity;
            wspd11.innerHTML=response['locations'][city]['values']['11'].wspd;
            wdir11.innerHTML=response['locations'][city]['values']['11'].wdir;
            visibility11.innerHTML=response['locations'][city]['values']['11'].visibility;

    
            var text=response['locations'][city]['values']['12'].datetimeStr;
            text=text.slice(0,10)
            date12.innerHTML=text;
            conditions12.innerHTML=response['locations'][city]['values']['12'].conditions;
            temp12.innerHTML=response['locations'][city]['values']['12'].temp;
            humidity12.innerHTML=response['locations'][city]['values']['12'].humidity;
            wspd12.innerHTML=response['locations'][city]['values']['12'].wspd;
            wdir12.innerHTML=response['locations'][city]['values']['12'].wdir;
            visibility12.innerHTML=response['locations'][city]['values']['12'].visibility;

    
            var text=response['locations'][city]['values']['13'].datetimeStr;
            text=text.slice(0,10)
            date13.innerHTML=text;
            conditions13.innerHTML=response['locations'][city]['values']['13'].conditions;
            temp13.innerHTML=response['locations'][city]['values']['13'].temp;
            humidity13.innerHTML=response['locations'][city]['values']['13'].humidity;
            wspd13.innerHTML=response['locations'][city]['values']['13'].wspd;
            wdir13.innerHTML=response['locations'][city]['values']['13'].wdir;
            visibility13.innerHTML=response['locations'][city]['values']['13'].visibility;

    
            var text=response['locations'][city]['values']['14'].datetimeStr;
            text=text.slice(0,10)
            date14.innerHTML=text;
            conditions14.innerHTML=response['locations'][city]['values']['14'].conditions;
            temp14.innerHTML=response['locations'][city]['values']['14'].temp;
            humidity14.innerHTML=response['locations'][city]['values']['14'].humidity;
            wspd14.innerHTML=response['locations'][city]['values']['14'].wspd;
            wdir14.innerHTML=response['locations'][city]['values']['14'].wdir;
            visibility14.innerHTML=response['locations'][city]['values']['14'].visibility;

    
            var text=response['locations'][city]['values']['15'].datetimeStr;
            text=text.slice(0,10)
            date15.innerHTML=text;
            conditions15.innerHTML=response['locations'][city]['values']['15'].conditions;
            temp15.innerHTML=response['locations'][city]['values']['15'].temp;
            humidity15.innerHTML=response['locations'][city]['values']['15'].humidity;
            wspd15.innerHTML=response['locations'][city]['values']['15'].wspd;
            wdir15.innerHTML=response['locations'][city]['values']['15'].wdir;
            visibility15.innerHTML=response['locations'][city]['values']['15'].visibility;
    
    
        })
        .catch(err => console.error(err));
}
getweather('delhi')

submit.addEventListener("click",(e)=>{
    getweather(city.value)
    // console.log(city.value)
})
hamburger=document.querySelector('.hamburger');
second=document.querySelector('.second');
first=document.querySelector('.first');
pp=document.querySelector('.pp');
nam=document.querySelector('#name');

hamburger.addEventListener("click",()=>{
    second.classList.toggle("flex");
    pp.classList.toggle("resp");
    first.classList.toggle("resp");
    nam.classList.toggle("flex");
    console.log('click');
})