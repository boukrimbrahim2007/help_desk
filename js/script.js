const data= [//ai gave me this list
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
    description: "La connexion Wi-Fi se coupe régulièrement pendant les visioconférences.",
    categorie: "Réseau",
    priorite: "Basse"
  }
];

function refresh(){
    for(let i =0 ;i<data.length;i++){
        const list=document.querySelector('.list')
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
        
        
        document.querySelector(".counter").textContent=""+data.length+" demandes"


        
        
        p.textContent="HD-"+data[i].id
        title.textContent=data[i].titre
        p2.textContent=data[i].description
        button1.textContent=data[i].categorie
        button2.textContent=data[i].priorite
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

    }
}
refresh()