//var wrapper = document.body.querySelector(".wrapper");

//var page = document.createElement("div");

var chrs = [
  {name:"Optimus Prime", class: "leader", afl:"autobot", vehicle:"truck"},
  {name:"Megatron", class: "leader", afl:"decepticon", vehicle:"tank"},
  {name:"Bumblebee", class: "scout", afl:"autobot", vehicle:"car"},
  {name:"Starscream", class: "scout", afl:"decepticon", vehicle:"plane"},
  {name:"Ironhide", class: "soldier", afl:"autobot", vehicle:"truck"},
  {name:"Brawl", class: "soldier", afl:"decepticon", vehicle:"tank"},
];

var list = document.createElement("div");

for (var i=0; i < chrs.length; i++ ) {
    var box = document.createElement("div")
    box.style.width="200px"
  box.style.height="100px"
    var transformers = document.createElement("div");
    var icon = document.createElement("img");
    var iconDiv = document.createElement("div");
    var transformerText = document.createElement("div");
    transformerText.innerHTML = "Name:" + chrs[i].name.toUpperCase();
    transformerText.innerHTML += " Class:" + chrs[i].class.toUpperCase();
    transformerText.innerHTML += " Vehicle:" + chrs[i].vehicle.toUpperCase();
    
    if (chrs[i].vehicle =="truck"){
      transformerText.style.color = "blue"
    }else if(chrs[i].vehicle == "tank"){
      transformerText.style.color = "green"
    }else if(chrs[i].vehicle == "car"){
      transformerText.style.color = "gold"
    }else if(chrs[i].vehicle == "plane"){
      transformerText.style.color = "white"
             }
    switch(chrs[i].afl){
      case "decepticon":
        // use the css provided
      icon.src = "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png";
       transformerText.classList.add("decepticon");
        break;
      case "autobot":
        icon.src = "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png";
        transformerText.classList.add("autobot")
        
        break;
     
    }
  
  
    icon.style.height = "25px";
    icon.style.width = "25px";
    icon.style.position = "relative";
    iconDiv.appendChild(icon);
    transformers.appendChild(transformerText);
    transformers.appendChild(iconDiv);

  
  
  box.appendChild(transformers);
  list.appendChild(box);
}

document.body.appendChild(list);
  
  
  

// do not write any elements into your HTML file

// loop through the above array to append a div using .append() into the body tag

// the appended div should always have the ".character" class

// display the characters name, class, and vehicle in the div

// Information should be displayed as "Name: Optimus Prime", with the next information on a different line

// if the character being looped through has an afl of autobot/decepticon, give them either a class of "autobot", or "decepitcon"

// in the top right, based on the top information, insert an img elemnt for either the autobot or decepticon

// link for autobot image https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png

// link for decepticon image https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png

// in the characters' "class" data, all of those values' letters should be capitalized when displayed in the div (so 'leader' should become 'LEADER')

// in the characters' "vehicle" data, change the color of that value in the div based on its value
// truck=blue
// tank=green
// card=gold
// plane=white