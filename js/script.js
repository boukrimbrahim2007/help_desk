const dataDefult= [//ai gave me this list
  {
    id: 1,
    titre: "Écran qui ne s'allume plus",
    description: "L'écran du poste de la comptabilité reste noir au démarrage.",
    categorie: "Matériel",
    priorite: "Haute"
  },
  {
    id: 2,
    titre: "Installation de Visual Studio Code",
    description: "Installer VS Code et ses extensions de base sur le poste développeur",
    categorie: "Logiciel",
    priorite: "Normale"
  },
  {
    id: 3,
    titre: "Wi-Fi instable en salle de réunion",
    description: "La connexion Wi-Fi se coupe toujours pendant les visioconférences.",
    categorie: "Réseau",
    priorite: "Basse"
  }
];
const data = localStorage.getItem("data") && localStorage.getItem("data") !== "undefined" ? JSON.parse(localStorage.getItem("data")) : dataDefult
function save(){
    localStorage.setItem("data",JSON.stringify(data))
}

let idddddd=1
function searching(id){
    for(let j=0;j<data.length;j++){
        if(data[j].id==id){
            return j
        }
    }
}
function verifie(){
      if( searching(idddddd)!==undefined){
        idddddd++;
        return verifie()
      }
    
}
const cards=document.querySelector("#cards")
const lines=document.querySelector("#lines")
let show=true
const list=document.querySelector('.list')
const table=document.querySelector('tbody')
let holder
const regex=/^[a-zA-Z0-9 éÉè]+$/
const plus=document.createElement('i')
plus.classList.add("fa-solid","fa-plus")


cards.addEventListener("click",() => {
    cards.style.backgroundColor="white"
    lines.style.backgroundColor="transparent"
    cards.style.color="black"
    lines.style.color="#5C697B"
    show=true
    document.querySelector('.table').style.display="none"
    refresh()
})
lines.addEventListener("click",() => {
    lines.style.backgroundColor="white"
    lines.style.color="black"
    cards.style.color="#5C697B"
    cards.style.backgroundColor="transparent"
    show=false
    document.querySelector('.table').style.display="block"
    refresh()
})


const submit=document.querySelector('#submit')
submit.addEventListener("click", add)
function add(e){
    e.preventDefault();
    let obj={}
    let invalid=false
    const title=document.querySelector('#title')
    obj.titre=title.value
    if(!regex.test(obj.titre)){
        const error=document.querySelector(".error_title")
        error.textContent="invalid input"
        error.style.color='red'
        invalid=true
    }
    else{           
        const error=document.querySelector(".error_title")
        error.textContent=""}
        
        const categorie=document.querySelector('#categorie')
        obj.categorie=categorie.value
        const priorite=document.querySelector("#priorite")
        obj.priorite=priorite.value
        const description=document.querySelector("#description")
        obj.description=description.value
        if(!regex.test(obj.description)){
            const error2=document.querySelector(".error_description")
            error2.textContent="invalid input"
            error2.style.color='red'
            invalid=true
        }
        else{
            const error2=document.querySelector(".error_description")
            error2.textContent=""}
            if(invalid){
                return
            }
        verifie()   
        obj.id=idddddd
        idddddd++;
        idddddd=1;
    
    data.push(obj)
    save()
    title.value=""
    categorie.value="Réseau"
    priorite.value="Haute"
    description.value=""
    refresh()
    
}

function refresh(tab=data){
    list.innerHTML=""
    table.innerHTML=""

    if(show){
        for(let i =0 ;i<tab.length;i++){
        const card=document.createElement('div')
        card.classList.add("card")
        const content=document.createElement('div')
        content.classList.add("content")
        const top=document.createElement('div')
        top.classList.add("top")
        const icon=document.createElement('i')
        icon.classList.add("icon")
        const p=document.createElement('p')
        const title=document.createElement('h3')
        const p2=document.createElement('p')
        const buttons=document.createElement('div')
        buttons.classList.add("buttons")
        const button1=document.createElement('button')
        button1.classList.add("button1")
        const button2=document.createElement('button')
        button2.classList.add("button2")
        const lower=document.createElement('div')
        lower.classList.add("lower")
        const modifier=document.createElement('p')
        modifier.classList.add("modifier")
        const suprimer=document.createElement('p')
        suprimer.classList.add("suprimer")
        const modIcon=document.createElement('i')
        modIcon.classList.add("fa-solid","fa-pencil")
        const supIcon=document.createElement('i')
        supIcon.classList.add("fa-solid","fa-trash-can")
        
        
        document.querySelector(".counter").textContent=""+tab.length+" demandes"


        
        
        p.textContent="HD-"+tab[i].id
        title.textContent=tab[i].titre
        p2.textContent=tab[i].description
        button1.textContent=tab[i].categorie
        button2.textContent=tab[i].priorite
        modifier.textContent="modifier"
        suprimer.textContent="suprimer"




        list.appendChild(card)
        card.appendChild(content)
        content.appendChild(top)
        top.appendChild(icon)
        top.appendChild(p)
        content.appendChild(title)
        content.appendChild(p2)
        content.appendChild(buttons)
        buttons.appendChild(button1)
        buttons.appendChild(button2)
        lower.appendChild(modifier)
        lower.appendChild(suprimer)
        card.appendChild(lower)
        modifier.prepend(modIcon)
        suprimer.prepend(supIcon)


        if(button1.textContent=="Matériel"){
            icon.classList.add("fa-solid")
            icon.classList.add("fa-display")
        }else if(button1.textContent=="Logiciel"){
                  icon.classList.add("fa-solid")
                  icon.classList.add("fa-microchip") 
        }
        else{
            icon.classList.add("fa-solid")
            icon.classList.add("fa-network-wired") 
        } 

        if(button2.textContent=="Haute"){
            button2.style.backgroundColor="rgba(255, 240, 232, 1)"
            button2.style.color="rgba(186, 100, 68, 1)"
        }else if(button2.textContent=="Normale"){
                    button2.style.backgroundColor="rgba(255, 245, 223, 1)"
                    button2.style.color="rgba(166, 122, 43, 1)"
        }
        else{
            button2.style.backgroundColor="rgba(232, 246, 238, 1)"
            button2.style.color="rgba(56, 136, 103, 1)"
        }   
        button2.style.border="none" 
        modifier.addEventListener("click", () => {
            holder=tab[i].id
            let obj=tab[searching(holder)]
            const title=document.querySelector('#title')
            title.value=obj.titre
            const categorie=document.querySelector('#categorie')
            categorie.value=obj.categorie
            const priorite=document.querySelector("#priorite")
            priorite.value =obj.priorite
            const description=document.querySelector("#description")
            description.value= obj.description
            submit.textContent="modifier"
            submit.removeEventListener("click", add)
            submit.addEventListener("click", modifie)
        })
        suprimer.addEventListener("click",()=>{
            holder=tab[i].id
            const autorised=confirm("est ce que tu veux supresser votre ticket ?")
            if(autorised){
            suprime()
            }
        })
        
    }}
    else {
        for(let i =0 ;i<tab.length;i++){
        const tbody=document.querySelector('tbody')
        const tr=document.createElement('tr')
        const tableTitle=document.createElement('div')
        tableTitle.classList.add("table-title")
        const icon=document.createElement('i')
        icon.classList.add("icon")
        const div=document.createElement('div')
        const p=document.createElement('p')
        const title=document.createElement('h3')
        const des=document.createElement('p')
        const button1=document.createElement('button')
        button1.classList.add("button1")
        const button2=document.createElement('button')
        button2.classList.add("button2")
        const div2=document.createElement('div')
        const modIcon=document.createElement('i')
        modIcon.classList.add("fa-solid","fa-pencil")
        const supIcon=document.createElement('i')
        supIcon.classList.add("fa-solid","fa-trash-can")
        modIcon.classList.add("modifier")
        supIcon.classList.add("suprimer")
        function td(x){
            let td=document.createElement('td')
            td.appendChild(x)
            return td
        }

        p.textContent="HD-"+tab[i].id
        tr.appendChild(td(p))
        title.textContent=tab[i].titre
        des.textContent=tab[i].description
        tableTitle.appendChild(icon)
        div.appendChild(title)
        div.appendChild(des)
        tableTitle.appendChild(div)
        tr.appendChild(td(tableTitle))
        button1.textContent=tab[i].categorie
        button2.textContent=tab[i].priorite
        tr.appendChild(td(button1))
        tr.appendChild(td(button2))
        tbody.appendChild(tr)
        div2.appendChild(modIcon)
        div2.appendChild(supIcon)
        tr.appendChild(td(div2))





        document.querySelector(".counter").textContent=""+tab.length+" demandes"


        if(button1.textContent=="Matériel"){
            icon.classList.add("fa-solid")
            icon.classList.add("fa-display")
        }else if(button1.textContent=="Logiciel"){
                  icon.classList.add("fa-solid")
                  icon.classList.add("fa-microchip") 
        }
        else{
            icon.classList.add("fa-solid")
            icon.classList.add("fa-network-wired") 
        } 

        if(button2.textContent=="Haute"){
            button2.style.backgroundColor="rgba(255, 240, 232, 1)"
            button2.style.color="rgba(186, 100, 68, 1)"
        }else if(button2.textContent=="Normale"){
                    button2.style.backgroundColor="rgba(255, 245, 223, 1)"
                    button2.style.color="rgba(166, 122, 43, 1)"
        }
        else{
            button2.style.backgroundColor="rgba(232, 246, 238, 1)"
            button2.style.color="rgba(56, 136, 103, 1)"
        }   
        button2.style.border="none" 
        modIcon.addEventListener("click", () => {
            holder=tab[i].id
            let obj=tab[searching(holder)]
            const title=document.querySelector('#title')
            title.value=obj.titre
            const categorie=document.querySelector('#categorie')
            categorie.value=obj.categorie
            const priorite=document.querySelector("#priorite")
            priorite.value =obj.priorite
            const description=document.querySelector("#description")
            description.value= obj.description
            submit.textContent="modifier"
            submit.removeEventListener("click", add)
            submit.addEventListener("click", modifie)
        })

        supIcon.addEventListener("click",()=>{
            holder=tab[i].id
            const autorised=confirm("est ce que tu veux supresser votre ticket ?")
            if(autorised){
            suprime()
            }
        })
        }
            
    
}} 
 refresh()   

function modifie(e){
                e.preventDefault();
                let object={}
                let invalid=false
                const title=document.querySelector('#title')
                object.id=holder
                object.titre=title.value
                if(!regex.test(object.titre)){
                    const error=document.querySelector(".error_title")
                    error.textContent="invalid input"
                    error.style.color='red'
                    invalid=true
                }
                else{           
                    const error=document.querySelector(".error_title")
                    error.textContent=""}
                const categorie=document.querySelector('#categorie')
                object.categorie=categorie.value
                const priorite=document.querySelector("#priorite")
                object.priorite=priorite.value
                const description=document.querySelector("#description")
                object.description=description.value
                if(!regex.test(object.description)){
                    const error2=document.querySelector(".error_description")
                    error2.textContent="invalid input"
                    error2.style.color='red'
                    invalid=true
                }
                else{
                    const error2=document.querySelector(".error_description")
                    error2.textContent=""}
                if(invalid){
                        return
                }
                submit.textContent="Ajouter la demande"
                submit.prepend(plus)
                data[searching(holder)]=object
                submit.removeEventListener("click", modifie)
                submit.addEventListener("click", add)
                refresh()
                title.value=""
                categorie.value="Réseau"
                priorite.value="Haute"
                description.value=""
                save()
                
}

function suprime(e){
    data.splice(searching(holder),1)
    refresh()
    save()
}



const sortprio=document.querySelector('#sortprio')
sortprio.addEventListener("click",function filtre(){
    const sorted=[]
    for(let k=0;k<data.length;k++){
        sorted.push(data[k])
    }
    for(let i=0;i<sorted.length;i++){
        for(let j=0;j<sorted.length-1;j++){
            if((sorted[j].priorite=="Basse"&&(sorted[j+1].priorite=="Haute"||sorted[j+1].priorite=="Normale")) || (sorted[j].priorite=="Normale"&&(sorted[j+1].priorite=="Haute"))){
                [sorted[j],sorted[j+1]]=[sorted[j+1],sorted[j]]
            }
            
        }
    }
    refresh(sorted)
})




const sortcat=document.querySelector('#sortcat')
sortcat.addEventListener("click",function filtre(){
    const sorted2=[]
    for(let k=0;k<data.length;k++){
        sorted2.push(data[k])
    }
    for(let i=0;i<sorted2.length;i++){
        for(let j=0;j<sorted2.length-1;j++){
            if((sorted2[j].priorite=="Matériel"&&(sorted2[j+1].priorite=="Réseau"||sorted2[j+1].priorite=="Logiciel")) || (sorted2[j].priorite=="Logiciel"&&(sorted2[j+1].priorite=="Réseau"))){
                [sorted2[j],sorted2[j+1]]=[sorted2[j+1],sorted2[j]]
            }
            
        }
    }
    refresh(sorted2)
})
