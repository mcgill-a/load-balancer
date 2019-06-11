var s1 = document.getElementById("s1");
var s2 = document.getElementById("s2");
var s3 = document.getElementById("s3");
var temp = 0;
const append = (parentId, text) => {
  const parent = document.getElementById(parentId);
  const item = document.createElement('li');
  item.innerHTML = text;
  parent.appendChild(item);
  parent.scrollTop = parent.scrollHeight;
};

var toggle = false;

const autoButton = document.querySelector('#auto-get-node-name');
autoButton.addEventListener('click', (e) => {
  e.preventDefault();
  
  toggle = !toggle;
});
  
setInterval(function() {
  if(toggle) {
    button.click()
  }
}, 333);


const reset = document.querySelector('#reset');
reset.addEventListener('click', (e) => {
  e.preventDefault();
  toggle = false;
  s1.innerHTML = 0;
  s2.innerHTML = 0;
  s3.innerHTML = 0;
});

// Set up click listener for button
const button = document.querySelector('#get-node-name');
button.addEventListener('click', (e) => {
  e.preventDefault();

  const req = new XMLHttpRequest();

  req.addEventListener('load', () => {
    const { status, responseText } = req;
    if (status < 200 || status > 299) {
      return;
    }
    const resp = JSON.parse(responseText);
    console.log(resp);
    document.querySelector('.node-name').innerHTML = resp.name;
    switch(resp.name) {
	case "balanced-1":
	    temp = Number(s1.innerHTML) + 1;
	    s1.innerHTML = temp;
	    break;
	case "balanced-2":
            temp = Number(s2.innerHTML) + 1;
            s2.innerHTML = temp;
            break;
	case "balanced-3":
            temp = Number(s3.innerHTML) + 1;
            s3.innerHTML = temp;
            break;

	default:
	    console.log("N/A");
	    break;
    }
  });

  req.open('GET', 'api/name');
  req.send();
});


