angular.module('data.services', []).factory('DataService', DataService);

DataService.$inject = [];

function DataService (){

    return {
        getData:getData
    };

    function getData(){
        var data=[{"naziv":"Sklonište za životinje-Centar za razvoj poljoprivrede i trgovinu poljoprivrednim proizvodima d.o.o.","adresa":" Utinja 12, 47 000 Karlovac","telefon":"098 1896999;047/654461","web":"","cords":"45.4928970,15.5552680"},
            {"naziv":"Sklonište za nezbrinute životinje grada Zagreba-Ustanova ZOO vrt ","adresa":"Franjčevićeva 43, 10 361 Dumovec","telefon":"01 2008 354","web":"https://www.azilzagreb.com/Onama.aspx","cords":"45.8104850,16.1605430"},
            {"naziv":"Sklonište za životinje -TIP-TIP, Specijalizirana veterinarska ambulanta i veterinarski higijeničarski servis","adresa":",J. Lovretića 10, Vinkovci 32100","telefon":"38532306901","web":"https://www.tip-tip.hr/","cords":"45.2849340,18.8034600"},
            {"naziv":"Sklonište za životinje","adresa":"Petina bb, 10 410 Velika Gorica.","telefon":"01/2406 835 098 414 113","web":"","cords":"45.7142120,16.0752430"},
            {"naziv":"Sklonište za životinje-Veterinarska stanica Beli Manastir d.o.o. ","adresa":"Osječka 128, Beli Manastir 31300","telefon":"031 700 470;031703 165","web":"https://www.vsbm.hr/","cords":"45.7740110,18.6106060"},
            {"naziv":"Veterinarska ambulanta Cerje-Pokupsko d.o.o. ","adresa":"Cerje Pokupsko 29/c, 10414 Pokupsko","telefon":"01 6266 176; 095 8300814","web":"https://www.skloniste-pokupsko-cerje.net/?page_id=2","cords":"45.4989980,15.9700320"},
            {"naziv":"Sklonište za životinje-Veterinarska stanica Sisak","adresa":"Zagrebačka 85, 44000 Sisak","telefon":"044 / 527711; 044 / 527722","web":"","cords":"45.4970950,16.3556850"},
            {"naziv":"Sklonište za životinje-Veterinarska stanica Kutina d.o.o.","adresa":"V.Nazora 61, 44320 Kutina","telefon":"044 / 680421; 044 / 625170","web":"","cords":"45.4789720,16.7889260"},
            {"naziv":"Sklonište za životinje-AS EKO ,Industrijska zona Podi ","adresa":"Dolačka 2, Šibenik 22000","telefon":"022/340 372 ;022/340 371","web":"https://www.as-eko.hr/skloniste.html","cords":"43.7069780,15.9857720"},
            {"naziv":"Sklonište za životinje-Veterinarska stanica Rijeka ","adresa":"Lič bb, 51323 Lič","telefon":"051/320263,051/320139","web":"https://www.skloniste-lic.com/?page_id=22","cords":"45.2783379,14.7146983"},
            {"naziv":"Sklonište za životinjeKUTEREVO – Velebitska udruga ''Vuk''-Sklonište za medvjede","adresa":"Kuterevo 103, 53225 Kuterevo","telefon":"","web":"https://www.kuterevo-medvjedi.hr/","cords":"44.8260926,15.1376561"},
            {"naziv":"Sklonište za životinje-Veterinarska ambulanta ","adresa":"Poreč, M.Vlašića 45,Poreč 52440","telefon":"052/ 432 128;052/422 504","web":"https://www.veterina-porec.com","cords":"45.2305110,13.6122070"},
            {"naziv":"Veterinarska ambulanta Pula ","adresa":"Premanturska cesta bb, Kaštjun, 52100 Pula","telefon":"052/514 590","web":"https://www.veterinarskastanicapula.hr","cords":"44.8666230,13.8495790"},
            {"naziv":"Sklonište za životinje'' Prijatelji''","adresa":"Tome Bratkovića b.b., 40000 Čakovec","telefon":"091 89 88 004","web":"https://www.prijatelji-zivotinja.org/","cords":"46.3832520,16.4089410"},
            {"naziv":"Sklonište za životinje-Udruga za zaštitu životinja „Spas“","adresa":"Mali Prelog bb, 42000 Varaždin","telefon":"042/330-004","web":"https://www.spas.hr/","cords":"46.3234496,16.3366167"},
            {"naziv":"Sklonište za životinje''ŠAPA'', ''Šapa'' društvo za zaštitu životinja","adresa":"Letičani 5, 43000 Bjelovar","telefon":"060/860-860","web":"https://drustvo-sapa.hr/","cords":"45.9257020,16.8821270"},
            {"naziv":"Sklonište za životinje-Veterinarska ambulanta ","adresa":"Crikvenica, Kotorska 28, 51260 Crikvenica","telefon":"051 241 932","web":"https://www.veterinari-crikvenica.hr/","cords":"45.1748200,14.6964450"},
            {"naziv":"Sklonište za životinje Virovitica","adresa":"Matije Gupca 63,33000 Virovitica","telefon":"916202900","web":"https://vet-feliks.hr/","cords":"45.8403510,17.3866870"},
            {"naziv":"Sklonište za životinje -Veterinarske stanice ","adresa":"Jastrebarsko, Trešnjevka 61, 10450 Jastrebarsko","telefon":"01/6281-085; 01/6281-396","web":"https://www.vsj.hr/","cords":"45.6571750,15.6386380"},
            {"naziv":"Sklonište za životinje- Veterinarske stanice Pakrac d.o.o.","adresa":"Bučje bb, 34550 Pakrac","telefon":"099 44 11 019; 034 411 019","web":"https://www.skloniste-pakrac.com","cords":"45.4388450,17.1917420"},
            {"naziv":"Sklonište za životinje '' Otova kućica''","adresa":"Hrešinska bb, 48321 Peteranec","telefon":"048 621 114/ 048 621- 800","web":"","cords":"46.1695888,16.8328925"},
            {"naziv":"Sklonište za životinje ''Pobjede''","adresa":"Nemetinska cesta bb,Osijek","telefon":"958723087","web":"https://www.pobjede.hr; facebook/Azil Osijek-volonteri","cords":"45.5549620,18.6955140"},
            {"naziv":"Sklonište za životinje- A.N.D.A.R. D.O.O.","adresa":"Premanturska cesta 205, Medulin","telefon":"098 855 066","web":"https://www.allandars.com","cords":"44.8502220,13.8672700"},
            {"naziv":"LUČ ZAGORJA''","adresa":"Selnica bb, 49246 Marija Bistrica","telefon":"091 3300573 091 5677481","web":"https://www.skloniste-luc-zagorja.com","cords":"46.0042670,16.1190740"},
            {"naziv":"Sklonište za životinje: ''Mr. Dog'' ","adresa":"Braće Radić 35, Topolje, 10316 Lijevi Dubrovčak","telefon":"01/2895 063 091/2895 063","web":"https://www.facebook.com/settings?tab=account§ion=username.","cords":"45.6518910,16.3434070"},
            {"naziv":"Sklonište za životinje: Animalis centrum j.d.o.o ","adresa":"Žuvanče, Kaštel Sučurac","telefon":"098 360908","web":"https://www.facebook.com/zaklada.zazastituzivotinja","cords":"43.5495705,16.4056641"},
            {"naziv":"Sklonište za životinje ''Privlaka''","adresa":"Busje bb, 23233 Privlaka","telefon":"091 906 6930","web":"","cords":"44.2609484,15.125021"},
            {"naziv":"Sklonište za životinje Uslužni obrt '' Val dei Saresi''","adresa":"Val dei Saresi 2b, 52210 Rovinj","telefon":"091 2017529","web":"https://www.vet-rovinj.com/udomi-psa/","cords":"45.0811660,13.6387070"},
            {"naziv":"Sklonište za životinje ''Šapica'' ","adresa":"Krapinska bb,Donja Bistra","telefon":"095 9263234","web":"https://www.sapica.hr","cords":"45.8384433,15.8426182"}];
        return data;
    }

}
