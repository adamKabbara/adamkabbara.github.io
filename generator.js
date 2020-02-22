const generate = document.getElementById("generate");
const clip = document.getElementById("clip");
const username = document.getElementById("username-display");
const html = document.getElementsByTagName("html");
const back = document.getElementById("back")

var nounArr = ["Actor", "Gold", "Painting", "Advertisement", "Grass", "Parrot", "Afternoon", "Greece", "Pencil", "Airport", "Guitar", "Piano", "Ambulance", "Hair", "Pillow", "Animal", "Hamburger", "Pizza", "Answer", "Helicopter", "Planet", "Apple", "Helmet", "Plastic", "Army", "Holiday", "Portugal", "Australia", "Honey", "Potato", "Balloon", "Horse", "Queen", "Banana", "Hospital", "Quill", "Battery", "House", "Rain", "Beach", "Hydrogen", "Rainbow", "Beard", "Ice", "Raincoat", "Bed", "Insect", "Refrigerator", "Belgium", "Insurance", "Restaurant", "Boy", "Iron", "River", "Branch", "Island", "Rocket", "Breakfast", "Jackal", "Room", "Brother", "Jelly", "Rose", "Camera", "Jewellery", "Russia", "Candle", "Jordan", "Sandwich", "Car", "Juice", "School", "Caravan", "Kangaroo", "Scooter", "Carpet", "King", "Shampoo", "Cartoon", "Kitchen", "Shoe", "China", "Kite", "Soccer", "Church", "Knife", "Spoon", "Crayon", "Lamp", "Stone", "Crowd", "Lawyer", "Sugar"]
var adjArr = ["Defiant", "Homeless", "Adorable", "Delightful", "Homely", "Quaint", "Adventurous", "Depressed", "Horrible", "Aggressive", "Determined", "Hungry", "Real", "Agreeable", "Different", "Hurt", "Relieved", "Alert", "Difficult", "Repulsive", "Alive", "Disgusted", "Ill", "Rich", "Amused", "Distinct", "Important", "Angry", "Disturbed", "Impossible", "Scary", "Annoyed", "Dizzy", "Inexpensive", "Selfish", "Annoying", "Doubtful", "Innocent", "Shiny", "Anxious", "Drab", "Inquisitivedsf", "Shy", "Arrogant", "Dull", "Itchy", "Silly", "Ashamed", "Sleepy", "Attractive", "Eager", "Jealous", "Smiling", "Average", "Easy", "Jittery", "Smoggy", "Awful", "Elated", "Jolly", "Sore", "Elegant", "Joyous", "Sparkling", "Bad", "Embarrassed", "Splendid", "Beautiful", "Enchanting", "Kind", "Spotless", "Better", "Encouraging", "Stormy", "Bewildered", "Energetic", "Lazy", "Strange", "Black", "Enthusiastic", "Light"]

var colorPallete = ['	#f3b900', '#f5d35c', '#ea9e06', '#bd3100', '#75d9cb', '#c7d7b9' , '#dcdba8' , '#f5cda7' , '#fea785']


function randomise(arr){
    return arr[Math.floor((Math.random() * arr.length))]
}

var i = 0;

generate.onclick = function(){
    username.innerHTML = randomise(adjArr).concat(randomise(nounArr))

    username.style.color = colorPallete[i];
    generate.style.backgroundColor = colorPallete[i];
    clip.style.backgroundColor = colorPallete[i];
    back.style.backgroundColor = colorPallete[i];

    if(i < colorPallete.length){
        i++;
    }
    else{
        i = 0;
    }
    
}


clip.onclick = function(){
    window.getSelection().selectAllChildren(
        username
        );
        document.execCommand("Copy")
        window.getSelection().removeAllRanges();
}







