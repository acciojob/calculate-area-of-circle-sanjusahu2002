 function calculateArea() {
            // Get the radius from the user using the prompt() function
            let radius = prompt("Enter the radius of the circle:");
            // write you code here and display the result to the user
                   let radiusElement = document.getElementById('radius');
        let radius = prompt("enter radiyes");
        let cRadius = parseInt(radius);
        if(cRadius>0){
            
            let area = (3.14*(cRadius*cRadius)).toFixed(2);
            radiusElement.innerText = `The area of the circle with radius ${cRadius} is ${area}
            `;
        }
        else{
            radiusElement.innerText = `Enter correct radius.`;
        }
}
calculateArea();
