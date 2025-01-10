const changeLanguage = (lang) => {
    switch (lang) {
    case 'EN':
        console.log('Good afternoon!'); 
        break;   
    case 'DE':
        console.log('Guten Tag!'); 
        break;
    case 'IT':
        console.log('Buongiorno!');
        break;    
    case 'EN':
        console.log('Good afternoon!');
        break;    
    default:
        console.log('Добрый день!');   
    }
    return lang;
}

changeLanguage('IT');
changeLanguage('EN');
changeLanguage('DE');