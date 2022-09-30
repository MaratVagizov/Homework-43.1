let form = document.forms.list
let container_js = document.querySelector('.container_js')

let input = document.querySelector('.input')
let input_2 = document.querySelector('.input_2')
let input_3 = document.querySelector('.input_3')
let cancel = document.querySelector('.cancel')
let save = document.querySelector('.save') 
let modal = document.querySelector('.modal')
let modal_bg = document.querySelector('.modal_bg')


let list = [
    {
        id: 1, 
        name: "Jose Hill",
        date: 25,
    },
    {
        id: 2, 
        name: "Jose Mill",
        date: 828,
    },
    {
        id: 3, 
        name: "Alan Hill",
        date: 497,
    },
    {
        id: 4, 
        name: "Bend Hill",
        date: -2303,
    },
    {
        id: 5, 
        name: "Jose Rose",
        date: 339,
    },
    {
        id: 6, 
        name: "Rose Nill",
        date: -776,
    },
    {
        id: 7, 
        name: "Lind Bill",
        date: -1564,
    }
]

const reload = (arr) => {
    container_js.innerHTML = ""
    // input.value = ''
    

    for(let item of arr) {
        let div = document.createElement('div')         
        let id = document.createElement('span')
        let divname = document.createElement('div')   
        let name = document.createElement('span')     
        let date = document.createElement('span')
        let div_img = document.createElement('div')   
        let edit = document.createElement('img')
        let delet = document.createElement('img')    


        div.classList.add('item')
        divname.classList.add('divname')
        id.classList.add('txt')
        name.classList.add('txt')
        date.classList.add('txt')
        div_img.classList.add('div_img')
        edit.classList.add('edit')
        delet.classList.add('delet')


        id.innerHTML = item.id
        name.innerHTML = item.name
        date.innerHTML =  (new Date()).getFullYear() - item.date

        edit.src = "./img/edit.svg"
        delet.src = "./img/delete.svg"

        divname.append(name)
        div.append(id, divname, date, div_img)
        div_img.append(edit, delet)
        container_js.append(div)

        delet.onclick = () => {
            list = list.filter(elem => elem.id !== item.id)
            reload(list)
        }
    
        edit.onclick = () => {

            openModal()

            save.onclick = () => {
            
                
                console.log(list);
                item.name = input_2.value
                item.date = input_3.value
                console.log(input_3.value)
                console.log(list)
                modal.style.display = 'none'
                modal_bg.style.display = 'none'
    
                setTimeout(
                    () => {
                        modal.style.opacity = '0'
                        modal_bg.style.opacity = '0'
                    }, 100)
                reload(list)
                input_2.value = ''
                input_3.value = ''
    
        }
        }

        cancel.onclick = () => {

            closeModal()

        }


        
    }
    counter++

}

const openModal = () => {
    modal.style.display = 'block'
    modal_bg.style.display = 'block'

    setTimeout(
        () => {
            modal.style.opacity = '1'
            modal_bg.style.opacity = '1'
        }, 100)
}

const closeModal = () => {
            modal.style.display = 'none'
            modal_bg.style.display = 'none'

            setTimeout(
                () => {
                    modal.style.opacity = '0'
                    modal_bg.style.opacity = '0'
                }, 100)
}

let counter = list.length

form.onsubmit = (e) => {
    e.preventDefault()
    // input.value = ''
    let task = {
        id: counter,
        name: false,
        data: new Date().getHours() + ":" + new Date().getMinutes() 
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        task[key] = value
    })

    list.push(task)

    reload(list)
}




reload(list)