(function () {
    'use strict';

    angular.module("admin", ["ngRoute","angular-loading-bar","localStorageModule"])
        .config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
            cfpLoadingBarProvider.includeSpinner = false;

        }])
        .config(["$routeProvider", function ($routeProvider) {
            //$locationProvider.html5Mode(true);
            $routeProvider
                .when('/home', {
                    templateUrl: "partials/home.html"
                })
                .when('/about', {
                    templateUrl: "partials/about.html"
                })
                .when('/login', {
                    templateUrl: "login.html"
                })
                .when('/registration', {
                    templateUrl: "registration.html"
                })
                .when('/blog', {
                    templateUrl: "partials/blog.html"
                })
                .when('/contact', {
                    templateUrl: "partials/contact.html"
                    
                })
                .otherwise({
                    redirectTo: '/login'
                })
        }])
        .controller("janavasamCtrl", ["$scope", function ($scope) {
            $scope.janavasamContent = [
                {
                    menuHead: "Janavasam Day - Break Fast",
                    menuImg: "vendor/img/breakfast.jpg",
                    menuCon: "Rava kesari, Rice Uppuma or Pongal or Vegetable Kitchadi, Chatni, Gothsu Coffee",
                    menuCount: 1
                },
                {
                    menuHead: "Janavasam Day - Lunch",
                    menuImg: "vendor/img/lunch.jpg",
                    menuCon: "Payasam / Sarkkarai Pongal, Pachadi, Porial, Kootu, Sambar, Rasam, Appalam, Ghee, Dhall, Pickles, Buttermilk",
                    menuCount: 2
                },
                {
                    menuHead: "Janavasam Day - Evening Tiffen",
                    menuImg: "vendor/img/eveningTiffen.jpg",
                    menuCon: "Sweet, Kaaram 2 varieties, Chatni, Gothsu, Coffee / Tea",
                    menuCount: 3
                },
                {
                    menuHead: "Janavasam Day - Sweet Varieties",
                    menuImg: "vendor/img/sweetVarieties.jpg",
                    menuCon: "Rava Kesari, Wheat Halwa, Kaasi Halwa, Semia Kesari, Poli, Carrot Halwa, Aval Kesari",
                    menuCount: 4
                },
                {
                    menuHead: "Janavasam Day - Karam Varieties",
                    menuImg: "vendor/img/karamVarieties.jpg",
                    menuCon: "Bajji, Potato Bonda, Mysore Bonda, Vegetable Bonda, Vegetable Kitchadi, Onion Pakoda, Medhu Pakoda, Lemon Sevai, Coconut, Sevai, Rava Dosai, Andra Pesarattu Dosai, Adai - Avial",
                    menuCount: 5
                },
                {
                    menuHead: "Janavasam & Reception Dinner Muhurtham Day & Evening Tiffen - Option 1",
                    menuImg: "vendor/img/optionOne.jpg",
                    menuCon: "Sweet,Payasam,Pachadi 2, Porial or Kari 2, Kootu or Avial,Sambar, Rasam,Vadai, Appalam, Chips, Rice, Ghee, Dhall,Butter Milk, Pickles",
                    menuCount: 6
                },
                {
                    menuHead: "Janavasam & Reception Dinner Muhurtham Day & Evening Tiffen - Option 2",
                    menuImg: "vendor/img/optionTwo.jpg",
                    menuCon: "Sweet, Badam Gheer or Carrot Gheer, Poori Chenna or Chappathi Kurma, Vegetable Briyani, Onion Raitha, Bisibela Bath (Sambar Rice), Rasam/Plain Rice, Spl. Bagala Bath (Curd Rice), Brinjal or Potato Chops, Avial, Sweet Pachadi, Cutlet/Chips or Vadai, Pickles, Appalam, Ice Cream, Pan Supari",
                    menuCount: 7
                }
            ];

            $scope.janavasamTab = 1;
        }])
        .controller("muhurthamCtrl", ["$scope", function ($scope) {
            $scope.muhurthamContent = [
                {
                    menuHead: "Muhurtham Day - Morning Cofee & Break Fast",
                    menuImg: "vendor/img/breakfast.jpg",
                    menuCon: "Sweet, Idli, Ven Pongal / Rava Pongal, Medhu Vadai, Gosthu, Cofee, Dosai / Masala Dosai / Oothappam / Poori Potato / Paratto Kuruma / Idiappam, Rasam, Puliodharai  Vadai, Appalam Chips, Butter Milk, Pickles, Ghee, Dhall",
                    menuCount: 1
                },
                {
                    menuHead: "After Muhurtham Fresh Juice & Muhurtham Lunch - General",
                    menuImg: "vendor/img/general.jpg",
                    menuCon: "Sweet, Payasam, Pachadi 2, Porial or Kari 2, Koottu / Avial, Kosumalli Pitlai / Sambar, Morekuzhambu or Kaara Kuzhambu, Rasam,Puliodharai, Vadai, Appalam Chips, Butter Milk, Pickles, Ghee, Dhall",
                    menuCount: 2
                },
                {
                    menuHead: "After Muhurtham Fresh Juice & Muhurtham Lunch - For Andhra Natives",
                    menuImg: "vendor/img/andhraNatives.jpg",
                    menuCon: "Spl. Gonnkura, Pachadi Dosaikai, Pachadi, Pappu Podi, Chatni Podi, Muddha Koora, Muddha Pappu, Noona Vankaya Koora",
                    menuCount: 3
                },
                {
                    menuHead: "After Muhurtham Fresh Juice & Muhurtham Lunch - For Keralities",
                    menuImg: "vendor/img/keralities.jpg",
                    menuCon: "Payasam Varieties, Eriseri, Koottu Kari, Mathan Pachadi, Kichadi, Olan, Kaalan, Beans Thuvaran, Nendhiram Upperi, Pappadam - Puli Inji",
                    menuCount: 4
                }
            ];

            $scope.muhurthamTab = 1;
        }])
        .controller("varietiesCtrl", ["$scope", function ($scope) {
            $scope.varietiesContent = [
                {
                    menuHead: "Varieties To Select - Porial / Kari",
                    menuImg: "vendor/img/porial.jpg",
                    menuCon: "Potato Podimas, Potato Carrot Mix, Cabbage & Peas, Beans Usili, Plantain Karakari, Karamani Kari, Brinjal Karamani Kari, Carrot Capsicum (Kuda Milagai), Brinjal Karamani Kari, Carrot Capsicum, Brinjal Chops, Senai Chops, Babycorn Capsicum Fry",
                    menuCount: 1
                },
                {
                    menuHead: "Varieties To Select - Rice Varieties",
                    menuImg: "vendor/img/rice.jpg",
                    menuCon: "Bisibela Bath (Sambar Rice), Spl. Bagala Bath (Curd Rice), Coconut Rice, Vanghi Bath, Lemon Bath, Vegetable Briyani, Puliodarai, Green Rice (Karuveppalai Bath), Mango Rice, Milagu Rice",
                    menuCount: 2
                },
                {
                    menuHead: "Varieties To Select - Kootu",
                    menuImg: "vendor/img/kootu.jpg",
                    menuCon: "Mix Vegetables, Chow Chow, White Pumpkin, Red Pumpkin, Cabbage",
                    menuCount: 3
                },
                {
                    menuHead: "Varieties To Select - Payasam",
                    menuImg: "vendor/img/payasam.jpg",
                    menuCon: "Avial, Milk, Semiya, Paruppu, Coconut, Akkaravadasal",
                    menuCount: 4
                },
                {
                    menuHead: "Varieties To Select - Vada Varieties",
                    menuImg: "vendor/img/vada.jpg",
                    menuCon: "Medhu Vada, Curd Vada, Onion Vada, Cabbage Vada, Keerai Vada, Aama Vada, More Kozhambu vada",
                    menuCount: 5
                },
                {
                    menuHead: "Varieties To Select - Kuzhambu",
                    menuImg: "vendor/img/kuzhambu.jpg",
                    menuCon: "More Kuzhambu, Vatha Kuzhambu, Kaara Kuzhambu",
                    menuCount: 6
                },
                {
                    menuHead: "Varieties To Select - Rasam",
                    menuImg: "vendor/img/rasam.jpg",
                    menuCon: "Tomato, Lemon, Mysore, Jeera, Pepper, Pineapple",
                    menuCount: 7
                },
                {
                    menuHead: "Varieties To Select - Sweets",
                    menuImg: "vendor/img/sweets.jpg",
                    menuCon: "Mangalore Poli, Coconut Poli, Ashoka Halwa, Kasi Halwa, Wheat Halwa, Carrot Halwa, Badam Halwa, Mysore Pauk, Jangiri, Laddu, Bhadhusa, Vennila Cake, Bournvita Cake, Pista Cake, Cashew Cake, Chocolate Cake, Peni with Milk, Sirotti, Kaju Kathli, Pineapple Pudding, Kalkandu Bath, Rasa Malai, Soan Papdi, Calcutta Rasagulla, Angoor Boondhi, Sooria Kala, Chandra Kala, Badam Katli, Cashew Roll, Badam Roll, Pista Roll, Pista Burfi, Bombay Jilebi",
                    menuCount: 8
                },
                {
                    menuHead: "Varieties To Select - Sambar",
                    menuImg: "vendor/img/sambar.jpg",
                    menuCon: "Brinjal / Tomato Veg. Mix, Drumstick, Onion Red, Pumpkin, Ladies Finger",
                    menuCount: 9
                },
                {
                    menuHead: "Varieties To Select - Pickles",
                    menuImg: "vendor/img/pickles.jpg",
                    menuCon: "Lemon, Mango Thokku, Puli Inji, Carrot Inji and Seasonal Items",
                    menuCount: 10
                },
                {
                    menuHead: "Varieties To Select - Chips",
                    menuImg: "vendor/img/chips.jpg",
                    menuCon: "Potato, Banana, Plantain, Senai",
                    menuCount: 11
                }
            ];

            $scope.varietiesTab = 1;
        }])
        .controller("northCtrl", ["$scope", function ($scope) {
            $scope.northContent = [
                {
                    menuHead: "Sai Laithaa's North Indian Special - Sweets",
                    menuImg: "vendor/img/sweets.jpg",
                    menuCon: "Badam Katli, Badam Burfi, Badam Pista Roll, Dry Fruit Burfi, Rasagulla, Cham Cham, Rasa Malai, Hot Jilebi, Hot Gulab Jamoon, Cashew Roll, Carrot Halwa, Badam Halwa, Basundhi, Raj Bhog",
                    menuCount: 1
                },
                {
                    menuHead: "Sai Laithaa's North Indian Special - Vegetables",
                    menuImg: "vendor/img/vegetables.jpg",
                    menuCon: "Peas Califlower Navarathna Kurma, Malai Kofta, Capsicum Fry, Butter Paneer Masala, Palak Paneer, Dhall Fry",
                    menuCount: 2
                },
                {
                    menuHead: "Sai Laithaa's North Indian Special - Savouries",
                    menuImg: "vendor/img/savouries.jpg",
                    menuCon: "Navarathna Mixture, Cashew Pakoda, Samosa Kachori",
                    menuCount: 3
                },
                {
                    menuHead: "Sai Laithaa's North Indian Special - Chats",
                    menuImg: "vendor/img/chat.jpg",
                    menuCon: "Bajji varieties, Dahi Vada, Papdi Chat, Pani Puri, Bhel Puri, Pav Baji, Chips Varieties, Spring Roll",
                    menuCount: 4
                },
                {
                    menuHead: "Sai Laithaa's North Indian Special - Rotis",
                    menuImg: "vendor/img/roti.jpg",
                    menuCon: "Methi Roti, Poohlka, Kulcha",
                    menuCount: 5
                },
                {
                    menuHead: "Sai Laithaa's North Indian Special - Tandoori",
                    menuImg: "vendor/img/tandoori.jpg",
                    menuCon: "Naan, Butter Naan, Tandoori Parotta / Alu Parotta",
                    menuCount: 6
                },
                {
                    menuHead: "Sai Laithaa's North Indian Special - Poori",
                    menuImg: "vendor/img/poori.jpg",
                    menuCon: "Mutter Poori / Palak Poori",
                    menuCount: 7
                },
                {
                    menuHead: "Sai Laithaa's North Indian Special - Salads",
                    menuImg: "vendor/img/salad.jpg",
                    menuCon: "Fruits, Vegetables, Onion, Pineapple",
                    menuCount: 8
                },
                {
                    menuHead: "Sai Laithaa's North Indian Special - Dal",
                    menuImg: "vendor/img/dal.jpg",
                    menuCon: "Yellow Dal, Fry Rajma Dal, Mung Dal, Fry Dal",
                    menuCount: 9
                },
                {
                    menuHead: "Sai Laithaa's North Indian Special - Rice",
                    menuImg: "vendor/img/pulav.jpg",
                    menuCon: "Kashmiri Pulav, Plain Pulav, Vegetable Pulav, Fried Rice, Pudina Pulav, Vegetable Pulav, Paneer Fried Rice",
                    menuCount: 10
                },
                {
                    menuHead: "Sai Laithaa's North Indian Special - Chatni",
                    menuImg: "vendor/img/chatni.jpg",
                    menuCon: "Green Chatni, Onion Chatni, Tomato Chatni, Sweet Chatni, Pudhina Chatni, Navarathna Chatni",
                    menuCount: 11
                },
                {
                    menuHead: "Sai Laithaa's North Indian Special - Soups",
                    menuImg: "vendor/img/soup.jpg",
                    menuCon: "Vegetable Soup, Mushroom Soup, Tomato Soup, Onion (Fresh) Soup",
                    menuCount: 12
                }
            ];
            $scope.northTab = 1;
        }])
        .controller("dinnerCtrl", ["$scope", function ($scope) {
            $scope.dinnerContent = [
                {
                    menuHead: "Night Dinner - A",
                    menuImg: "vendor/img/dinner-a.jpg",
                    menuCon: "Sweet Corn Soup, Vegetable Cutlet, Gulobjamun, Badam Halwa, Onion Curd Pachadi, Tomato Sweet Pachadi, Cabbage Carrot Porrial, Senai Chips, Potato Chips, Mango Pickles, Poori Chenna, Mini Utthapam, Chatni, Brinji, Kuruma, Lemon Sevai, Bisibela Bath, Cauliflower Manjurian, Rice, Pinapple Rasam, Applam, More Milakai, Beeda, Fruits, Ice Cream",
                    menuCount: 1
                },
                {
                    menuHead: "Night Dinner - B",
                    menuImg: "vendor/img/dinner-b.jpg",
                    menuCon: "Tomato Soup, Raj Bhog, Basundi, Curd Vadai, Vegetable Cutlet, Onion Raitha, Vendakai, Cauliflower Roast, Potato Finger Chips, Mango Thokku, Kulcha, Panner Butter Masala, Fried Rice, Noodles, Kara Dosai, Avaial, Bisibelabath, Applam, Rice, Pinapple Rasam, Bagalabath, More Milakai, Fruits, Gulfi Ice Cream, Beeda",
                    menuCount: 2
                },
                {
                    menuHead: "Night Dinner - C",
                    menuImg: "vendor/img/dinner-c.jpg",
                    menuCon: "Tomato Soup, Rasamalai / Malaisandvich, Rasagula / Anarkali, Kuja Kathali / Badam Halwa, Basam Geer / Milk Payasam, Curd Vadai / Cutlet / Spring Roll, Onion Raitha, Fried Rice, Butter Naan, Malai Koftha, Mini Uthappam / Kara Dosai, Tomato Chatni, Alu Parotta, Kotthamali Chatni, Chapathi, Bisibelabath, Rumali Roti, Gopi Manjurian, Panner Butter Masala, Potato Peas Kakakari, Senai Chips, Kashmir Pulav, Pinapple Rasam, Rice, Bagalabath, Mango Pickles, Appalam. Javvarasi Vadam, Vennila Ice Cream, Gulabjamun + Ice Ceam or Gulfi Ice, Banana, Beeda, Minalral Watar (Bottle)",
                    menuCount: 3
                },
                {
                    menuHead: "Night Dinner - D",
                    menuImg: "vendor/img/dinner-d.jpg",
                    menuCon: "Tomato Soup, Malai Sandwich, Bombay Gour / Anarkali, Vegetable Cutlet, Sause, Spring Roll, Curd Vadai, Adai Pradhaman, Kara Paniyaram, Kashmir Pulav, Boodhi Curd Pachadi, Rumali Rotti, Malai Kofha, Aalu Stuffed Parrota, Panner Palak, Vegetable Uthappam, Coconut / Onion / Puthina Chatni, Bisbelabath, Rice, Tomato Rasam, Bagalabath   Milagu Applam, More Milagai, Javvrasi Payasam, Mango Pickles, Carrot Halwa, Butter Scotch / Vennila / Strawberry Ice Cream, Fruits (Counter), Beeda",
                    menuCount: 4
                },
                {
                    menuHead: "Night Dinner - E",
                    menuImg: "vendor/img/dinner-e.jpg",
                    menuCon: "Gulobjamun, Vegetable Cutlet, Aval Payasam/ Badam Geer, Vellari Curd Pachadi, Cabbage, Carrot, Beans Porial, Potato Chips, Mango Pickles, Vegetable Biriyani, Kuruma, Poori, Kuruma, Onion, Drumstick Sambar, Tomato Rasam, Vatahl Kuzhambu, Rice, Curd, Appalam, Fruits, Beeda, Ice Cream",
                    menuCount: 5
                }
            ];
            $scope.dinnerTab = 1;
        }])
        .controller("enquiryCtrl", ["$scope", "$http", function ($scope, $http) {
            $scope.formData = {};

            $scope.submitForm = function () {
                $http({
                    method: "POST",
                    url: "partials/form.php",
                    data: $.param($scope.formData),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }) .success(function (data) {
                        console.log(data);

                        if (!data.success) {
                            $scope.errorName = data.errors.name;
                            $scope.errorEmail = data.errors.email;
                            $scope.errorPhone = data.errors.phone;
                            $scope.errorComment = data.errors.comment;
                        } else {
                            $scope.message = data.message;
                            $scope.errorName = '';
                            $scope.errorSuperhero = '';

                        }

                });
            };


        }])
})();
