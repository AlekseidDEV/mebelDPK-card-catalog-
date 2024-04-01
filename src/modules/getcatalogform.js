export const getCatalogForm = () => {

    const form = document.querySelector('.form_catalog')

    const sendForm = (data) => {
        return fetch('/send_catalog.php', {
            method: 'POST',
            body: data
        }).then((res) => res.text())
    }



    const validInput = (input) => {
        let succces = false

        if(input.value === ''){
            succces = false
        } else{
            succces = true
        }

        return succces
    }

    const dataPreporation = (form) => {
        const input = form.querySelector('input')
        const select = form.querySelector('.cont_option_act')
        const dataBody = new FormData(form)

        dataBody.append("social", select.dataset.socials);

        if(validInput(input)){
            sendForm(dataBody)
                .then(data => console.log(data))
        }
    }
   
   
    form.addEventListener('submit', (e) => {
        e.preventDefault()

        dataPreporation(e.target)
   })
}