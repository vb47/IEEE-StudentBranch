var counter = 0;
var img = new Array("./event1/0.jpeg", "./event1/1.jpeg", "./event1/2.jpeg")


function prev () {
    counter = counter - 1;
    if (counter < 0) {
        counter = img.length - 1;
    }

    switch (counter) {
        case 0:
            curr_img = "./event1/0.jpeg";
            break;
        
        case 1:
            curr_img = "./event1/1.jpeg";
            break;
        
        case 2:
        curr_img = "./event1/2.jpeg";
        break;
    }
    document.getElementById('img').src = curr_img;
    
}

function next () {
    counter = counter + 1;
    if (counter > 2) {
        counter = 0;
    }

    switch (counter) {
        case 0:
            curr_img = "./event1/0.jpeg";
            break;
        
        case 1:
            curr_img = "./event1/1.jpeg";
            break;
        
        case 2:
        curr_img = "./event1/2.jpeg";
        break;
    }
    document.getElementById('img').src = curr_img;
    
}