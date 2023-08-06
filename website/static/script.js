var modal = document.getElementById('modal');
var pages = document.getElementsByClassName('modal-page');
var foot = document.getElementById('foot');
var form = document.getElementById('ip_para');
var modalFooter = document.getElementById("foot");
var modalContent = document.getElementById("contm");



var page1InputValues = {}; // Variable to store input values from page 1

// Function to save input values from page 1
function savePage1InputValues() {
  var inputsPage1 = form.getElementsByTagName('input');

  for (var i = 0; i < inputsPage1.length; i++) {
    var input = inputsPage1[i];
    page1InputValues[input.name] = input.value;
  }
}



const minValue = document.querySelectorAll("#minValue");
const maxValue = document.querySelectorAll("#maxValue");
const ranges = document.querySelectorAll('input[type="range"]');
const spans = document.querySelectorAll('.value');


ranges.forEach(function(range, index) {
  range.addEventListener('input', function() {
    spans[index].textContent = range.value;
  });
});

ranges.forEach(function(range,index){
    minValue[index].textContent = range.min;
    maxValue[index].textContent = range.max;
});




// Get the span elements
const crimSpan = document.querySelector('span[name="crim"]');
const znSpan = document.querySelector('span[name="zn"]');
const indusSpan = document.querySelector('span[name="indus"]');
const chasSpan = document.querySelector('span[name="chas"]');
const noxSpan = document.querySelector('span[name="nox"]');
const rmSpan = document.querySelector('span[name="rm"]');
const ageSpan = document.querySelector('span[name="age"]');
const disSpan = document.querySelector('span[name="dis"]');
const radSpan = document.querySelector('span[name="rad"]');
const taxSpan = document.querySelector('span[name="tax"]');
const ptratioSpan = document.querySelector('span[name="ptratio"]');
const bSpan = document.querySelector('span[name="b"]');
const lstatSpan = document.querySelector('span[name="lstat"]');

// Set the initial value of the span elements
crimSpan.textContent = document.getElementById('CRIM').value;
znSpan.textContent = document.getElementById('ZN').value;
indusSpan.textContent = document.getElementById('INDUS').value;
chasSpan.textContent = document.getElementById('CHAS').value;
noxSpan.textContent = document.getElementById('NOX').value;
rmSpan.textContent = document.getElementById('RM').value;
ageSpan.textContent = document.getElementById('AGE').value;
disSpan.textContent = document.getElementById('DIS').value;
radSpan.textContent = document.getElementById('RAD').value;
taxSpan.textContent = document.getElementById('TAX').value;
ptratioSpan.textContent = document.getElementById('PTRATIO').value;
bSpan.textContent = document.getElementById('B').value;
lstatSpan.textContent = document.getElementById('LSTAT').value;

var contm = document.getElementById("contm")

// window.addEventListener('resize', function() {
//   if (this.window.innerWidth() < 768) { 
//     form.classList.addClass('page-small-ip2');
//     form.classList.removeClass('page-medium-ip2');

//   } else if(this.window.innerWidth() >= 768  && this.window.innerWidth() < 992 ){
//     form.classList.addClass('page-medium-ip2');
//     form.classList.removeClass('page-small-ip2');
//   }
// });


// Function to show a specific page
function showPage(pageId) {



  if (pageId === 'page2') {
    
    modalFooter.style.justifyContent = "left";

    savePage1InputValues();
    document.getElementById('next').style.display = 'none';

    // Show Previous and Predict buttons on page 2
    document.getElementById('prev').style.display = 'block';
    document.getElementById('predictBtn').style.display = 'block';
  }
  else{
    // Show Next button on page 1
    // form.style.height = '70vh';
    
    modalFooter.style.justifyContent = "right";
    document.getElementById('next').style.display = 'block';

    // Hide Previous and Predict buttons on page 1
    document.getElementById('prev').style.display = 'none';
    document.getElementById('predictBtn').style.display = 'none';
  }

  // Hide all pages
  for (var i = 0; i < pages.length; i++) {
    pages[i].style.display = 'none';
  }

  // Show the specified page
  document.getElementById(pageId).style.display = 'block';

  // Show the modal
  modal.style.display = 'block';
}