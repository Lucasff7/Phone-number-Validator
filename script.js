const checkBtn = document.getElementById("check-btn");
const userInput = document.getElementById("user-input");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");


const checkNumber = input =>{
  if(input === ""){
    alert("Please provide a phone number");
    return;
  }
  const regex = /^(1\s?)?(\([0-9]{3}\)|[0-9]{3})[\s\-]?[0-9]{3}[\s\-]?[0-9]{4}$/;


  const alertTag = document.createElement('p');
  alertTag.classname = "result";
  regex.test(input) ? (alertTag.style.color ='green') : (alertTag.style.color = 'red');
alertTag.appendChild(document.createTextNode(
    `${regex.test(input) ? 'Valid' : 'Invalid'} US number: ${input}`
    )
  );
  resultsDiv.appendChild(alertTag)
};

checkBtn.addEventListener('click', () => {
  checkNumber(userInput.value);
  userInput.value = '';
});

userInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkNumber(userInput.value);
    userInput.value = '';
  }
});

clearBtn.addEventListener('click', () => {
  resultsDiv.textContent = '';
});

