export const getDateDifference = (date) => {
    const currentDate = Date.now();
    const difference = currentDate-date;
    const minutes = difference/60000;
    const hours = difference/3600000;
    const days = hours/24;
    let result;


    if(days >=1){
        result = `Há ${Math.floor(days) + " dias"}`
    }
    else if(hours <=24 && hours>=1){
        result = `Há ${Math.floor(hours) + " horas"}`
    }
    else if(hours <= 1){
        result = `Há ${Math.floor(minutes) + " minutos"}`
    }

    //result = `Há ${ days >=1? Math.floor(days) + " dias" : Math.floor(hours) + " horas"}`


    return result;
}

export const formatDate=(date)=>{
    return (new Date()).toLocaleDateString("pt-BR");
}