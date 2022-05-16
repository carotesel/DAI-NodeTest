let dir = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';

function validURL(dir) {
    try {
        let url = new URL(dir);
       return url;
    } catch (error) {
        return false;
    }
}

function getDataUrl(dir) {
    const isValid = validURL(dir);
    
    if (isValid) {
        let objetoUrl = {
            "host": isValid.host,
            "pathname": isValid.pathname,
            "parametros": isValid.searchParams
        } 
        return objetoUrl;
    } else {
        return "ERROR!!!";
    }

}
    console.log(getDataUrl(dir));
