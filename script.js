// now time for javascript
// let's create function for timeupday which will update every second

function timeUpdate(){
    const now = new Date() ;
    let hr = now.getHours().toString().padStart(2, "0");
    let min =now.getMinutes().toString().padStart(2 ,"0");
    let sec =now.getSeconds().toString().padStart(2,"0");
    let ampm = hr<12 ? "AM" : "PM";
    // here i get the day because i am get 0 to 7 so 
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[now.getDay()]; 
    // same for months so
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Decemer"];
    let month = months[now.getMonth()];
    //now simple date
    let date = now.getDate().toString().padStart(2,"0");

    // i am adding this variable in their location
    document.getElementById('time').textContent=`${hr}:${min}`;
    document.getElementById("sec").textContent= sec;
    document.getElementById("ampm").textContent=ampm;
    document.getElementById("dayDateMonth").textContent=`${day}, ${date} ${month}`;
};
 // here is time interval 
setInterval(timeUpdate , 1000);
timeUpdate();

