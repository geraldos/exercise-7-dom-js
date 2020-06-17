let menu = [
    ['Home', 'Profile'],
    ['Setting'],
    ['Logout']
]

let asideElement = document.getElementsByTagName("aside")[0]

menu.map((baris, indexArr) => {
    if (indexArr > 0) {
        let hr = document.createElement("hr")
        asideElement.appendChild(hr)
    }

    baris.map((kolom) => {
        let paragraph = document.createElement('p')
        let valueMenu = document.createTextNode(kolom)

        paragraph.appendChild(valueMenu)

        asideElement.appendChild(paragraph)
    })
})