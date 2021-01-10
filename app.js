


    let countriesList = ['Россия','Австрия','Польша','Латвия','Чехия'];
    let numbers = [142,9,38,2,11];
    let element = document.getElementsByClassName('wrapper')[0],
        br = ' мил.<br>',
        ru = countriesList[0]+ ' - ' + numbers[0]+br,
        as = countriesList[1]+ ' - ' + numbers[1]+br,
        pl = countriesList[2]+ ' - ' + numbers[2]+br,
        lt = countriesList[3]+ ' - ' + numbers[3]+br,
        cz = countriesList[4]+ ' - ' + numbers[4]+br;

        element.innerHTML = (ru + as + pl + lt + cz);
