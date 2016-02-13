(function() {
    angular.module('landing.controller', []).controller('LandingCtrl', LandingCtrl);
    LandingCtrl.$inject = ['DataService'];

    function LandingCtrl (DataService) {
        this.markers=[];
        this._DataService=DataService;
        this.windowOptions = {
            show: false
        };

        this.getData();
        this.init();
    }

    LandingCtrl.prototype.init = function() {
        var style=[{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}];
        this.map = {
            center: {
                latitude: 44.8360234,
                longitude: 16.4376764
            },
            zoom: 8,
            options:{
                styles: style,
                disableDefaultUI: true
            }
        };
    };

    LandingCtrl.prototype.centerMap=function(data){
        if(data!=""){
            var cords=data.split(",");
            this.map = {
                center: {
                    latitude: cords[0],
                    longitude: cords[1]
                },
                zoom: 13
            };
        }

    };

    LandingCtrl.prototype.getData = function() {
        this.data=this._DataService.getData();
        this.markers=this.data.map(function(data,index){
            var cords=[null,null];
            if(data.cords!=null)
                var cords=data.cords.split(",");

            var web=angular.isUndefined(data.web) ?  "" : data.web;

            return  {
                idKey:index,
                latitude:cords[0],
                longitude:cords[1],
                naziv:data.naziv,
                adresa:data.adresa,
                telefon:data.telefon,
                web:web,
                icon: 'https://maps.gstatic.com/mapfiles/ms2/micons/yellow.png'
            }
        });
    };

    LandingCtrl.prototype.onClick=function(id){
        this.windowOptions.show = !this.windowOptions.show;
    };

    LandingCtrl.prototype.closeClick=function(){
        this.windowOptions.show = false;
    };

})();