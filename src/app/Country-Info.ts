export class CountryInfo {
    id: string = "";
    iso2Code: string = "";
    name:string = "Country Name";
    capitalCity: string = ""; 
    longitude: string = "";
    latitude: string = "";
    region: region = new region(); 
    adminregion: adminregion = new adminregion(); 
    incomeLevel: incomeLevel = new incomeLevel(); 
    lendingType: lendingType = new lendingType();
}

export class region {
    id: string = "";
    iso2code: string = "";
    value: string = "";
}

export class adminregion {
    id: string = "";
    iso2code: string = "";
    value: string = "";
}

export class incomeLevel {
    id: string = "";
    iso2code: string = "";
    value: string = "";
}

export class lendingType {
    id: string = "";
    iso2code: string = "";
    value: string = "";
}
