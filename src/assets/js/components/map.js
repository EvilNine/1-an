const map = () => {

    ymaps.ready(function () {
        var myMap = new ymaps.Map("map", {
            center: [59.928194, 30.346644],
            zoom: 12
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark([59.928194, 30.346644], {
            balloonContentHeader: "<h3 class='map__title'>Наш адрес</h3>",
            balloonContentBody: "<p class='map__content'>Санкт-Петербург, <br>Владимирский проспект, 23, <br> лит. А, офис 701</p>",
            balloonContentFooter: "<a class='map__link' href=''>Схема проезда</a>",
            hintContent: "Наш адрес",    
            hideIconOnBalloonOpen: false,
            
        })
        myMap.geoObjects.add(myPlacemark );
    });
}

export default map;