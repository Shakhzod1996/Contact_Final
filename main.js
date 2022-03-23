let form = document.querySelector('#form')
let nameEl = document.querySelector('.name')
let surname = document.querySelector('.surname')
let phoneNum = document.querySelector('.number')
let ulList = document.querySelector('.family-ul-grid')
let select = document.querySelector('#select')
let allBtn = document.querySelector('.all-btn')
let familyBtn = document.querySelector('.family-btn')
let friendBtn = document.querySelector('.friend-btn')
let colleg = document.querySelector('.colleg-btn')
let clessMates = document.querySelector('.clas-btn')



form.addEventListener('submit', formSubmit)
allBtn.addEventListener('click', allBtnSubmit)
familyBtn.addEventListener('click', familyBtnSubmit)
friendBtn.addEventListener('click', friendBtnSubmit)
colleg.addEventListener('click', collegBtnSubmit)
clessMates.addEventListener('click', classSubmit)


let arr = [
  {
    name: nameEl,
    surname: surname,
    phone: phoneNum,
    select: select,
  }
]


let newArr = [];
// Adding Form
function formSubmit(e) {
  e.preventDefault()
  arr.forEach(ar => {
    newArr.push(ar)
    console.log(newArr);
  })

  newArr.forEach((newAr, index) => {
    if (index == newArr.length - 1) {
      let li = document.createElement('li')
      li.classList.add('family-li')
      ulList.appendChild(li)
      li.innerHTML = `
      <p class="coleg-p-name">${newAr.name.value}</p>
        <p class="coleg-p-surname">${newAr.surname.value}</p>
      <p class="coleg-p-number">${newAr.phone.value}</p>
      <p class="select-p">${newAr.select.value}</p>
      `
      newAr.name.value = ''
      newAr.surname.value = ''
      newAr.phone.value = ''
    }
  })


  // arr.forEach( ar => {
  //   let li = document.createElement('li')
  //   ulList.appendChild(li)
  //   li.classList.add('family-li')
  //   li.innerHTML =`
  //   <p class="coleg-p-name">${ar.name.value}</p>
  //   <p class="coleg-p-surname">${ar.surname.value}</p>
  //   <p class="coleg-p-number">${ar.phone.value}</p>
  //   <p class="select-p">${ar.select.value}</p>
  //   <button class="remove">X</button>
  //   `
  //   ar.name.value = ''
  //   ar.surname.value = ''
  //   ar.phone.value = ''
  // })
  // console.log(arr);
}

// let removeArr= []
// function removeItem(ind) {
//   let removeArr = []
//   newArr.forEach((newar, index) => {
//     if (ind != index) {
//       removeArr.push(newar)
//     }
//   })

//   newArr = removeArr;
//   ulList.innerHTML = ''
//   console.log(newArr);

//   newArr.forEach((ar, i) => {
//     let li = document.createElement('li')
//     li.classList.add('family-li')
//     li.innerHTML = `
//     <p class="coleg-p-name">${ar.name.value}</p>
//     <p class="coleg-p-surname">${ar.surname.value}</p>
//     <p class="coleg-p-number">${ar.phone.value}</p>
//     <p class="select-p">${ar.select.value}</p>
//     `
//     ulList.appendChild(li)
//   })

// }



// All Btn
let selectP = document.querySelectorAll('.select-p')
function allBtnSubmit() {
  let selectVal = document.querySelectorAll('.select-p')
  selectVal.forEach(sel => {
    sel.parentElement.style.display = 'block'
  })
}

// Family Btn
function familyBtnSubmit() {
  let selectVal = document.querySelectorAll('.select-p')
  selectVal.forEach(sel => {
    if (sel.textContent == 'family') {
      sel.parentElement.style.display = 'block'
    } else {
      sel.parentElement.style.display = 'none'

    }
  })
}

// Friend Btn
function friendBtnSubmit() {
  let selectVal = document.querySelectorAll('.select-p')
  selectVal.forEach(sel => {
    if (sel.textContent == 'friends') {
      sel.parentElement.style.display = 'block'
    } else {
      sel.parentElement.style.display = 'none'

    }
  })
}

// collegBtnSubmit Btn
function collegBtnSubmit() {
  let selectVal = document.querySelectorAll('.select-p')
  selectVal.forEach(sel => {
    if (sel.textContent == 'colleagues') {
      sel.parentElement.style.display = 'block'
    } else {
      sel.parentElement.style.display = 'none'

    }
  })
}

// Friend Btn
function classSubmit() {
  let selectVal = document.querySelectorAll('.select-p')
  selectVal.forEach(sel => {
    if (sel.textContent == 'classmates') {
      sel.parentElement.style.display = 'block'
    } else {
      sel.parentElement.style.display = 'none'

    }
  })
}








