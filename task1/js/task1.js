let showHideButton = document.querySelector('#showHide') //to select the element
let stuTable = document.querySelector('#studentTable');
let students = [
    { name: "omnia", class: 4, age: 24, degree: 100 },
    { name: "yasser", class: 6, age: 40, degree: 50 }
]
let studentForm = document.querySelector('#studentForm');
let studentHeaders = ['name', 'class', 'age', 'degree','grade']
let actions = [
    {text: 'Delete', clasess: 'btn btn-danger m-1'},
    {text: 'Edit', clasess: 'btn btn-warning m-1'}
]
showHideButton.addEventListener('click', function(e){
    //to change the text
    e.target.innerText =='Show form'? e.target.innerText ='Hide form': e.target.innerText='Show form';
    //to toggle the class add it and remove it from the element
    document.querySelector('#studentForm').classList.toggle('d-none');
})
studentForm.addEventListener('submit', function(e){
   e.preventDefault()
   let student = {
       name: e.target.elements.name.value,
       class: e.target.elements.class.value,
       age: e.target.elements.age.value,
       degree: e.target.elements.degree.value,
       grade: e.target.elements.grade.value
   }
   students.push(student)
   this.reset()
   this.classList.toggle('d-none')
   showHideButton.innerText ='Show form'

    // console.log(students)
    showStudents()
})
let addElement = function(elementType, perant, text = '', clasess =[]){
    ele = document.createElement(elementType);
    if (text != ''){
        ele.innerText = text;
    }
    if (clasess != ''){
        ele.classList= clasess;
    }
    perant.appendChild(ele);
    return ele;
}
let showStudents = function(){
    stuTable.innerText = ''
    students.forEach((student,i)=>{
        tr = addElement('tr', stuTable),
        addElement('td', tr, i+1),
        studentHeaders.forEach(element=>{
            td = addElement('td', tr, student[element])
            
        })
        td = addElement('td', tr)
        actions.forEach(action=>{
            btn = addElement('button', td, action.text, action.clasess),
            btn.addEventListener('click', function(e){
                console.log(`${i} => ${action.text}`)
                if (action.text == 'Edit'){
                    editStudent(i);
                }
                else if (action.text == 'Delete'){
                    deleteStudent(i);
                }
            })
        })
        // td = addElement('td', tr)
        // addElement('button', td, 'Delete Student')
        // addElement('button', td, 'Edit Student')
    })
}
function editStudent(index){
    let name = prompt('enter the new name');
    let degree = prompt('enter the new degree');
    students[index].name = name;
    students[index].degree = degree;
    showStudents()
}
function deleteStudent(index){
    students.splice(index,1)
    showStudents()
}
showStudents()
