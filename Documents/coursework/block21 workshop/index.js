const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2402-FTB-ET-WEB-FT/events`;


// create an object with an empty array for JSON data
const state = {
  parties: []
};
// establish DOM connections
//querySelector because its bassicaly the same as getEleentById but can do more for you
const partyList = document.querySelector(`#parties`);
const formName = document.querySelector(`#name`);
const formDate = document.querySelector(`#date`);
const formLocation = document.querySelector(`#location`);
const formDescription = document.querySelector(`#description`);
const formSubmit = document.querySelector(`#submit`);

// now our aysync functions will be here

// required: sync the invoking functions
async function render() {
  await getPartys();
  renderData();
}
render();

// create a function to await and fetch the API
// then create a json variable to await the awaitFetch with .json()
async function getPartys() {
  try{
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
    
  } catch(error) {
    console.log(error);
  }
}

async function stateConnection(){
  try {
    //create a variable to await the fetchjson
    const data = await fetchJson();
     // update the state object with the data from the new json object
    state.parties = data.data;
  } catch (error) {
    console.log(`no no no good`);
  }
}

// render state to the DOM

// create a renderData function for this step
 
function renderData() {

  const eventData = state.parties.map((eachObj) => {
    const timePlaceholder = eachObject.date;
    
    const dateTimeSplit = timePlaceholder.split(`T`);
  
    const timeSplit = dateTimeSplit[1].split(`.`);
    
    const timeStamp = tConvert(timeSplit[0]);
    
    const div = document.createElement(`div`);
   
   
    div.innerHTML = `${eachObj.name.toUpperCase()} </br></br> Date: ${
      dateTimeSplit[0]
    }  </br> Time: ${timeStamp} </br></br> Location: ${
      eachObj.location
    } </br></br> Description: </br> ${eachObj.description} </br></br>`;
   
    return div;
   
  });

  // .replaceChildren of DOM object partyList with a spread of eventsItems
  partyList.replaceChildren(...eventData);
}

