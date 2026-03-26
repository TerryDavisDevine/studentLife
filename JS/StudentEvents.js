//get the events from the json file
async function getEvents(){
  try{
    let response = await fetch("../resources/events.json");
    let text = await response.text();
    let data = JSON.parse(text);
    return data;
  }catch(error){
    console.error("ERROR:", error);
  }
}
//create the inidivudal elemtns for the events
function createElement(type,content){
  let node = document.createElement(type);
  node.innerHTML=content;
  return node
}
//create the elemtns for the events
function createEvent(details){
  let div = document.createElement("div");
  div.setAttribute("class","event");
  div.appendChild(createElement("h3",details.Name));
  div.appendChild(createElement("h4",details.Date));
  div.appendChild(createElement("h4",details.Time));
  div.appendChild(createElement("h4",details.Location));
  div.appendChild(createElement("h4",details.Desc));
  return div;
}
//add elements to the page
function showEvents(events){
    let allEvents = events.events;
    console.log(allEvents.length);
    let eventSpace = document.getElementById("eventSpace");
    for(let i =0; i<allEvents.length;i++){
      console.log("HI");
      eventSpace.appendChild(createEvent(allEvents[0]));
   }
}
//waits for getEvents to actually give the data
async function init() {
  const events = await getEvents();
  showEvents(events);
}

init();