var form = document.createElement("form")
var table = document.createElement("table")

function create_input(tagname,attrname,attrvalue,attr2,attr2value){

var input_ele = document.createElement(tagname)
input_ele.setAttribute(attrname,attrvalue)
input_ele.setAttribute(attr2,attr2value)
return input_ele

}

function create_label(tagname,attrname,attrvalue,content){

    var label_ele = document.createElement(tagname)
    label_ele.setAttribute(attrname,attrvalue)
    label_ele.innerHTML = content
    return label_ele
}

function line_break(){

    var break_ele = document.createElement("br")
    return break_ele

}

function create_div(tagname,class_name){

    var div_ele = document.createElement(tagname)
    div_ele.className = class_name
    return div_ele
}

function create_table_elements(tagname){

    var table_ele = document.createElement(tagname)
    return table_ele
}

var first_name = create_input('input','type','text','id','firstname');
var firstname_label = create_label('label','for','firstname','First Name');
var firstname_label_br = line_break();
var firstname_br = line_break();

var last_name = create_input('input','type','text','id','lastname');
var lastname_label = create_label('label','for','lastname','Last Name');
var lastname_label_br = line_break();
var lastname_br = line_break();

var email = create_input('input','type','email','id','email');
var email_label = create_label('label','for','email','Email');
var email_label_br = line_break();
var email_br = line_break();

var address = create_input('input','type','text','id','address');
var address_label = create_label('label','for','address','Address');
var address_label_br = line_break();
var address_br = line_break();

var pincode = create_input('input','type','text','id','pincode');
var pincode_label = create_label('label','for','pincode','Pincode');
var pincode_label_br = line_break();
var pincode_br = line_break();

var gender_label = create_label('label','for','gender','Gender:');
var gender_ele = document.createElement('select')
gender_ele.setAttribute('name','gender')
var gender_default = document.createElement('option')
gender_default.style.display = 'none'
var gender_male = document.createElement('option')
gender_male.setAttribute('value','Male')
gender_male.innerHTML = 'Male'
var gender_female = document.createElement('option')
gender_female.setAttribute('value','Female')
gender_female.innerHTML = 'Female'
var gender_others = document.createElement('option')
gender_others.setAttribute('value','Others')
gender_others.innerHTML = 'Others'

var food_label = create_label('label','for','food','Choice of food (Choose atleast 2): ')
var pizza_label = create_label('label', 'for', 'pizza', 'Pizza');
var pizza = create_input('input', 'type', 'checkbox', 'id', 'pizza');
pizza.setAttribute('value', 'Pizza');
pizza.setAttribute('name', 'food');

var burger = create_input('input', 'type', 'checkbox', 'id', 'burger');
var burger_label = create_label('label', 'for', 'burger', 'Burger');
burger.setAttribute('value', 'Burger');
burger.setAttribute('name', 'food');

var pasta = create_input('input', 'type', 'checkbox', 'id', 'pasta');
var pasta_label = create_label('label', 'for', 'pasta', 'Pasta');
pasta.setAttribute('value', 'Pasta');
pasta.setAttribute('name', 'food');

var biryani = create_input('input', 'type', 'checkbox', 'id', 'biryani');
var biryani_label = create_label('label', 'for', 'biryani', 'Biryani');
biryani.setAttribute('value', 'Biryani');
biryani.setAttribute('name', 'food');

var momos = create_input('input', 'type', 'checkbox', 'id', 'momos');
var momos_label = create_label('label', 'for', 'momos', 'Momos');
momos.setAttribute('value', 'Momos');
momos.setAttribute('name', 'food');

var food_div = create_div('div','choice_of_food');
var gender_div  = create_div('div','gender');
var food_br = line_break();

var state = create_input('input','type','text','id','state');
var state_label = create_label('label','for','state','State');
var state_label_br = line_break();
var state_br = line_break();

var country = create_input('input','type','text','id','country');
var country_label = create_label('label','for','country','Country');
var country_label_br = line_break();
var country_br = line_break();

var submit = create_input('button','type','submit','id','submit');
submit.innerHTML = 'Submit'
var submit_br = line_break();

var table_div = create_div('div','table');
var thead = create_table_elements('thead');
var tbody = create_table_elements('tbody');
var tr_head = create_table_elements('tr');

var table_heading = ['FirstName','LastName','Email','Address','Pincode','Gender','Choice_of_food','State','Country' ]

var table_header = {}

for (var i=0; i<=table_heading.length; i++) {

    table_header[table_heading[i]] = create_table_elements('th')
    table_header[table_heading[i]].innerHTML = table_heading[i]
}

document.body.append(form)
form.append(firstname_label,firstname_label_br,first_name,firstname_br,lastname_label,lastname_label_br,last_name,lastname_br,email_label,email_label_br,email,email_br,address_label,address_label_br,address,address_br,pincode_label,pincode_label_br,pincode,pincode_br)
form.append(gender_div)
gender_div.append(gender_label,gender_ele)
gender_ele.append(gender_default,gender_male,gender_female,gender_others)
form.append(food_div)
food_div.append(food_label,pizza_label,pizza,burger_label,burger,pasta_label,pasta,biryani_label,biryani,momos_label,momos)
form.append(food_br,state_label,state_label_br,state,state_br)
form.append(country_label,country_label_br,country,country_br)
form.append(submit,submit_br,table_div)
table_div.append(table)
table.append(thead,tbody)
thead.append(tr_head)
tr_head.append(table_header.FirstName,table_header.LastName,table_header.Email,table_header.Address,table_header.Pincode,table_header.Gender,table_header.Choice_of_food,table_header.State,table_header.Country)


form.addEventListener('submit', function(event){

event.preventDefault();

var first_name_input = first_name.value
var last_name_input = last_name.value
var email_input = email.value
var address_input = address.value
var pincode_input = pincode.value
var gender_input = gender_ele.value
var state_input = state.value
var country_input = country.value

const table_1 = table.getElementsByTagName('tbody')[0];
const newRow = table.insertRow();

var selected_food = [];
    if (pizza.checked) {
        selected_food.push(pizza.value);
    }
    if (burger.checked) {
        selected_food.push(burger.value);
    }
    if (pasta.checked) {
        selected_food.push(pasta.value);
    }
    if (biryani.checked) {
        selected_food.push(biryani.value);
    }
    if (momos.checked) {
        selected_food.push(momos.value);
    }

const firstnameCell = newRow.insertCell(0);
const lastnameCell = newRow.insertCell(1);
const emailCell = newRow.insertCell(2)
const addressCell = newRow.insertCell(3);
const pincodeCell = newRow.insertCell(4);
const genderCell = newRow.insertCell(5);
const choice_of_foodCell = newRow.insertCell(6)
const stateCell = newRow.insertCell(7);
const countryCell = newRow.insertCell(8);

firstnameCell.textContent = first_name_input
lastnameCell.textContent = last_name_input
emailCell.textContent = email_input
addressCell.textContent = address_input
pincodeCell.textContent = pincode_input
genderCell.textContent = gender_input
choice_of_foodCell.textContent = selected_food.join(', ')
stateCell.textContent = state_input
countryCell.textContent = country_input

form.reset();

})