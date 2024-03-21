export const getCatalogForm = () => {
    const form = document.querySelector('.form_catalog')

    const sendForm = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(data)
        }).then((res) => res.json())
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
        const dataBody = {}

        dataBody["social"] = select.dataset['socials']
        dataBody["phone"] = input.value


        if(validInput(input)){
            sendForm(dataBody)
                .then(() => {
                    input.value = ''
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }
   
   
    form.addEventListener('submit', (e) => {
        e.preventDefault()

        dataPreporation(e.target)
   })
}