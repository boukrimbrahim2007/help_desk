var data= [//ai gave me this list
  {
    id: 1,
    titre: "Écran qui ne s'allume plus",
    description: "L'écran du poste de la comptabilité reste noir au démarrage malgré un câble d'alimentation branché.",
    categorie: "Matériel",
    priorite: "Haute"
  },
  {
    id: 2,
    titre: "Installation de Visual Studio Code",
    description: "Installer VS Code sur le poste du service développement avec les extensions de base.",
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
        const card=document.createElement('div')
        card.classList.add("card")
        const content=document.createElement('div')
        content.classList.add("content")
        const top=document.createElement('div')
        top.classList.add("top")
        const icon=document.createElement('div')
        icon.classList.add("icon")
        const p=document.createElement('p')
        const title=document.createElement('h3')
        const p2=document.createElement('p')
        const buttons=document.createElement('div')
        buttons.classList.add("buttons")
        const button1=document.createElement('button')
        button1.classList.add("button1")
        const button2=document.createElement('button')
        button1.classList.add("button2")
        const lower=document.createElement('div')
        lower.classList("lower")
        const modifier=document.createElement('p')
        modifier.classList.add("modifier")
        const suprimer=document.createElement('p')
        suprimer.classList.add("suprimer")
        icon.textContent=111
        p.textContent="HD-"+data[i].id
        title.textContent=data[i].titre
        p2.textContent=data[i].description
        button1.textContent=data[i].categorie
        button2.textContent=data[i].priorite

        card.appendChild(content)
        content.appendChild(top)
        top.appendChild(icon)
        top.appendChild(p)
        content.appendChild(title)
        content.appendChild(buttons)
        buttons.appendChild(button1)
        buttons.appendChild(button2)
        lower.appendChild(modifier)
        lower.appendChild(suprimer)
    }
}