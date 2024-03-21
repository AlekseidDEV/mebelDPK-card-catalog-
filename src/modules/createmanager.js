export const createDefended = () => {
    const allManager = document.querySelectorAll('.manager')

    let arrWorker = []
    let randomWorker = {}


    const randomFunc = (arr) => {
        const randomNumber = Math.floor(Math.random() * arr.length)

        randomWorker = arr[randomNumber]
    }
    
    const createWorkerObj = (arr) => {
        arr.forEach((item) => {
            const nameManager = item.querySelector('.naming_worker')
            const jobTitleManager = item.querySelector('.title_card_worker')
            const phoneManager = item.querySelector('.tit_phone_conn')
            const imgPathManager = item.querySelector('.wrapper_naming img')

            let newObj = {}

            newObj.name = nameManager.textContent.trim()
            newObj.jobTitle = jobTitleManager.textContent.split(',')[0].trim()
            newObj.phone = phoneManager.textContent.trim()
            newObj.pathImg = imgPathManager.getAttribute('src')

            arrWorker.push(newObj)
        })

        randomFunc(arrWorker)
    }

    createWorkerObj(allManager)

    return randomWorker
}