(function () {
    var menuObj = [
        {
            happyHour: {
                appetizers: [
                    {
                        header: 'Appetizers'
                    },
                    {
                        name: 'Green Salad',
                        price: 3
                    },
                    {
                        name: 'Seaweed Salad',
                        price: 4
                    },
                    {
                        name: 'Kani Salad',
                        price: 4
                    },
                    {
                        name: 'Four Seasons Salad',
                        description: 'Mixed baby greens, asian pear, grapes & walnuts with a sherry wine vinaigrette',
                        price: 5
                    },
                    {
                        name: 'Edamame',
                        description: 'Steamed soybeans',
                        price: 3
                    },
                    {
                        name: 'Harumake',
                        description: 'Japanese spring roll with sweet chili dipping sauce',
                        price: 3
                    },
                    {
                        name: 'Age Dashi Tofu',
                        description: 'Fried tofu chunk with Japanese dipping sauce',
                        price: 4
                    },
                    {
                        name: 'Gyoza',
                        description: 'Pan-fried pork dumpling',
                        price: 4
                    },
                    {
                        name: 'Crispy Japanese Pancake',
                        description: 'With red curry dipping sauce',
                        price: 3
                    },
                    {
                        name: 'Red Sauce Dumpling',
                        description: 'Pork dumplings wth special sauce topped with peanuts',
                        price: 6
                    },
                    {
                        name: 'Vegetable Tempura',
                        price: 6
                    },
                    {
                        name: 'Chicken Tempura',
                        price: 6
                    },
                    {
                        name: 'Shrimp Tempura',
                        price: 7
                    },
                    {
                        name: 'Chicken Lettuce Wrap',
                        price: 6
                    },
                    {
                        name: 'Spicy Kimchee Squid',
                        description: 'Sauteed spicy squid with special kimchee sauce',
                        price: 7
                    },
                    {
                        name: 'Rock Shrimp Tempura',
                        description: 'Slightly fried tempura battered shrimp with spicy mayo sauce',
                        price: 7
                    },
                    {
                        name: 'Crispy Banana Shrimp Roll',
                        description: 'Crispy fried rice paper wrapped shrimp, banana, coconut & crushed peanuts. Servers with tangy special sauce',
                        price: 7
                    },
                    {
                        name: 'Chicken Satay',
                        description: 'Served with peanut satay dipping sauce',
                        price: 6
                    }

                ],
                raw: [
                    {
                        header: 'Raw'
                    },

                    {
                        name: 'Chefs Choice Nigiri',
                        description: '5 pieces of sashimi over rice',
                        price: 10
                    },
                    {
                        name: 'Chefs Choice Sashimi',
                        description: '7 pieces of sashimi (no rice)',
                        price: 12
                    }

                ],
                sushiRolls: [
                    {
                        header: 'Sushi Rolls'
                    },
                    {
                        name: 'Avacado',
                        price: 3
                    },
                    {
                        name: 'Cucumber',
                        price: 3
                    },
                    {
                        name: 'California',
                        price: 4
                    },
                    {
                        name: 'Crispy Kani',
                        price: 4
                    },
                    {
                        name: 'Boston',
                        price: 4
                    },
                    {
                        name: 'Salmon Skin',
                        price: 4
                    },
                    {
                        name: 'Alaska',
                        price: 5
                    },
                    {
                        name: 'Tuna',
                        price: 4
                    },
                    {
                        name: 'Salmon',
                        price: 4
                    },
                    {
                        name: 'White Tuna',
                        price: 4
                    },
                    {
                        name: 'Spicy Tuna',
                        price: 5
                    },
                    {
                        name: 'Spicy Salmon',
                        price: 5
                    },
                    {
                        name: 'Spicy Yellowtail',
                        price: 5
                    },
                    {
                        name: 'Sweet Potato Tempura',
                        price: 3
                    },
                    {
                        name: 'Chicken Tempura',
                        price: 5
                    },
                    {
                        name: 'Shrimp Tempura',
                        price: 6
                    }

                ],
                specialtyRolls: [
                    {

                        header: 'Specialty Rolls'
                    },
                    {
                        name: 'Sassy Lady',
                        description: 'Spicy tuna, spicy yellowtail, spicy salmon, avocado inside with tabiko',
                        price: 8
                    },
                    {
                        name: 'Captain Crunch',
                        description: 'Shrimp tempura, crab, avocado & cucumber',
                        price: 8
                    },
                    {
                        name: 'Manhattan',
                        description: 'Shrimp tempura & crab stick inside, topped with spicy tuna, crunch flakes & tobiko.  Served with three kinds of special sauce',
                        price: 8
                    },
                    {
                        name: 'Number 9',
                        description: 'Shrimp tempura & cucumber inside, topped with fresh salmon, avocado, eel sauce & spicy mayo sauce',
                        price: 8
                    },
                    {
                        name: 'Hurricane',
                        description: 'Spicy salmon, spicy tuna & avocado; whole roll deep fried, topped with tobiko server with spicy mayo & eel sauce',
                        price: 8
                    },
                    {
                        name: 'Summer Roll',
                        description: 'Shrimp, jalapeno, cucumber inside topped with spicy salon, spicy mayo & sriracha',
                        price: 8
                    },
                    {
                        name: 'Godzilla',
                        description: 'Chefs choice sashimi, cream cheese & avocado deep fried & topped with scallion, spicy mayo, eel sauce & masago',
                        price: 8
                    }

                ],
                drinks: [
                    {

                        header: 'Drink Specials'
                    },
                    {
                        name: 'Tap Beers',
                        price: '$2 off'

                    },
                    {
                        name: 'Rail & Call Cocktails',
                        price: '$2 off'

                    },
                    {
                        name: 'Hot Sake',
                        price: '$2 off'

                    },
                    {
                        name: 'Wine List',
                        price: '$2 off'

                    },
                    {
                        name: 'House White & Red Wine',
                        price: '$5 off'
                    }

                ]
            },
            lunch: {
                entrees: [
                    {
                        header: 'Entrees'
                    },
                    {
                        nameSpan: 'Fresh Scallop wth Eggplant',
                        description: 'Pan seared scallop with eggplant in Yuzu Miso sauce'
                    },
                    {
                        nameSpan: 'Organic Chicken Teriyaki',
                        description: 'Grilled chicken breast & vegetable with Teriyaki sauce'
                    },
                    {
                        nameSpan: 'Yuzu Seabass',
                        description: 'Grilled Chilean seabass with yuzu sauce'
                    },
                    {
                        nameSpan: 'Hibachi Style Filet Mignon',
                        description: 'Slightly grilled filet mignon with vegetables in butter soy garlic sauce'
                    },
                    {
                        nameSpan: 'Rock Shrimp Tempura',
                        description: 'Rock shrimp & vegetable in a light tempura batter, deep-fried with ginger dipping sauce'
                    },
                    {
                        nameSpan: 'Sauteed or Steamed Vegetable & Tofu',
                        description: ''
                    },
                    {
                        nameSpan: 'Sesame Chicken',
                        description: 'Crispy fried chicken with special sesame sauce'
                    }
                ],
                specialtyRolls: [
                    {
                        header: 'Special Rolls'
                    },
                    {
                        name: 'California'
                    },
                    {
                        name: 'Avocado'
                    },
                    {
                        name: 'Tuna'
                    },
                    {
                        name: 'Yellow Tail'
                    },
                    {
                        name: 'Salmon'
                    },
                    {
                        name: 'Salmon Avocado'
                    },
                    {
                        name: 'Spicy Crunchy Salmon'
                    },
                    {
                        name: 'Vegetable'
                    },

                    {
                        name: 'Philadelphia'
                    },

                    {
                        name: 'Eel Avocado'
                    },

                    {
                        name: 'Cucumber'
                    },
                    {
                        name: 'Boston'
                    },
                    {
                        name: 'AAC'
                    },
                    {
                        name: 'Cucumber'
                    },
                    {
                        name: 'Shrimp Avocado'
                    },
                    {
                        name: 'Spicy Tuna'
                    }

                ],
                boxes: [
                    {
                        header: 'Boxes'
                    },
                    {
                        name: 'Beef Teriyaki'
                    },
                    {
                        name: 'Chicken Teriyaki',

                    },
                    {
                        name: 'Shrimp Teriyaki',

                    },
                    {
                        name: 'Vegetable Tempura',

                    },
                    {
                        name: 'Chicken Katsu',

                    }

                ]
            },
            dinner: {
                entrees: [
                    {
                        header: 'Entrees'
                    },
                    {
                        nameSpan: 'Crispy Dried Beef',
                        description: 'Shredded beef, deep-fried, glazed in brown spicy sauce with celery & carrots'
                    },
                    {
                        nameSpan: 'Chilean Sea Bass Yuzu Miso',
                        description: 'Grilled Chilean sea bass marinated with yuzu miso served with udon noodles in bonito broth'
                    },
                    {
                        nameSpan: 'Filet Mignon Toban Yaki',
                        description: 'Filet mignon, white mushroom with toban sauce & sake, served on a sizzling hot plate'
                    },
                    {
                        nameSpan: 'Peppercorn Chicken',
                        description: 'Shredded white mea chicken, slightly battered, deep-fiend in a brown sweet spicy sauce with bell peppers'
                    },
                    {
                        nameSpan: 'Salmon Salmon',
                        description: 'Jumbo lump crab meat crusted salmon finished with wasabi dressing, sake & soy reduction, with tomato, avocado & jalapeno salsa'
                    },
                    {
                        nameSpan: 'Scallop Diver',
                        description: 'Pan seared scallop with wild mushrooms in a sweet sake sauce'
                    },
                    {
                        nameSpan: 'Sesame Shrimp',
                        description: 'Fried crispy rock shrimp & Asian vegetables with special sesame sauce'
                    },
                    {
                        nameSpan: 'Surf & Turf',
                        description: 'Hibachi style Filet mignon, lobster tail with creamy lobster sauce & Asian Vegetables'
                    },
                    {
                        nameSpan: 'Tilapia',
                        description: 'Broiled tilapia with a hot touch of ginger & scallion flavored olive oil, server with sauteed Asian vegetables'
                    }

                ],
                specialtyRolls: [
                    {
                        header: 'Specialty Rolls'
                    },
                    {
                        nameSpan: 'Art of Maki',
                        description: 'Very thinly sliced tuna wrapped with spicy crab meat, avocado & sprouts'
                    },
                    {
                        nameSpan: 'Black Pearl',
                        description: 'Shrimp tempura, lobster salad topped with eel & black caviar brown sweet sauce'
                    },
                    {
                        nameSpan: 'Captain Crunch',
                        description: 'Shrimp tempura, crab, avocado & cucumber with crispy tempura flakes outside'
                    },
                    {
                        nameSpan: 'Green Dragon',
                        description: 'Broiled eel, cucumber topped ith avocado & caviar'
                    },
                    {
                        nameSpan: 'Hurricane',
                        description: 'Spicy salmon, spicy tuna & avocado, whole roll deep fried, topped with caviar, served with spicy mayo an eel sauce'
                    },
                    {
                        nameSpan: 'Lotus',
                        description: 'Spicy tuna, yamagoba inside, topped with fresh tuna an avocado server with spicy mayo sauce'
                    },
                    {
                        nameSpan: 'Manhattan',
                        description: 'Shrimp tempura & crab stick inside, topped with spicy tuna, crunch flakes & caviar, served with 3 kinds of special sauces'
                    },
                    {
                        nameSpan: 'Megu Sashimi(no rice)',
                        description: 'Spicy tuna, asparagus, yellow tail inside, wrapped with soybean paper, topped wth salmon, eel, avocado, caviar & crunch, server with special spicy sauce'
                    },
                    {
                        nameSpan: 'Naruto(no rice)',
                        description: 'Tuna, salmon, yellow rail, crab stick, avocado & caviar wrapped with fresh cucumber'
                    },
                    {
                        nameSpan: 'No.9',
                        description: 'Shrimp tempura & cucumber inside, topped with fresh salmon, avocado, eel sauce & spicy mayo sauce'
                    },
                    {
                        nameSpan: 'Playboy',
                        description: 'Shrimp tempura, asparagus, spicy tuna inside, topped with sushi shrimp in a flaming aluminum wrap'
                    },
                    {
                        nameSpan: 'Raku-roll-ah',
                        description: 'Deep fried spicy tuna, fresh cra bmeat inside, topped ith fresh tuna, rich avocado, masago, scallion, served with a hint of wasabi & tinges of sweetness sauce'
                    },
                    {
                        nameSpan: 'Sassy Lady',
                        description: 'Spicy tuna, spicy salmon, spicy yellow tail & avocado inside, topped with caviar'
                    },
                    {
                        nameSpan: 'Snow Thrill',
                        description: 'Tuna, salmon, yellow tail & avocado inside, topped with crunch flakes, served with spicy mayo & eel sauce'
                    },
                    {
                        nameSpan: 'Sweetheart',
                        description: 'Crab stick & shrimp tempura wrapped with fresh tuna in a heart shape'
                    },
                    {
                        nameSpan: 'Sun Kiss',
                        description: 'Broiled eel, shrimp tempura & avocado inside, topped with mango & crunch flakes'
                    },
                    {
                        nameSpan: 'Three of a Kind',
                        description: 'Tuna, salmon, yellow tail, cucumber & kaiware inside, wrapped with white seaweed'
                    },
                    {
                        nameSpan: 'White Russian',
                        description: 'Fresh crab meat, sweet potato tempura, avocado, cucumber inside, topped with torched white tuna, black caviar & creamy wasabi mayo sauce'
                    }
                ]
            }
        }
    ]

    openCloseMenu();
    loadMenu();
    function loadMenu() {
        var container = null;
        for (var keys in menuObj) {
            //level one within obj
            for (var keys2 in menuObj[keys]) {
                //level two
                switch (keys2) {
                    case 'happyHour':
                        container = $('#happyhour');
                        break;
                    case 'lunch':
                        container = $('#lunch');
                        break;
                    case 'dinner':
                        container = $('#dinner');
                        break;
                    default: console.log('Missing Obj Keys in menuObj level 2')
                }
                for (var keys3 in menuObj[keys][keys2]) {
                    //level 3 where arrays are stored, loop through all three to print
                    var printProps = menuObj[keys][keys2][keys3];
                    printProps.forEach(function (printArrays) {
                        //all properties listed below:
                        if (printArrays.header) {
                            $(container).append(`<h4>${printArrays.header}</h4>`)
                        }
                        if (printArrays.name && !printArrays.price) {
                            $(container).append(`<p>${printArrays.name}</p>`)
                        }
                        if (printArrays.name && printArrays.price) {
                            $(container).append(`<p>${printArrays.name}<span> | </span>${printArrays.price}</p>`)

                        }
                        if (printArrays.nameSpan) {
                            $(container).append(`<p><span> - </span>${printArrays.nameSpan}<span> - </span></p>`)
                        }
                        if (printArrays.description) {
                            $(container).append(`<p>${printArrays.description}</p>`)
                        }
                    });

                }
            }
        }
    }
    //add event listener to open and close menu, load menu items
    function openCloseMenu() {
        try {
            var menuButtons = document.getElementsByClassName('menu-buttons')[0].children;
            for (var i = 0; i < menuButtons.length; i++) {
                menuButtons[i].addEventListener('click', function (e) {
                    var menuType = e.target.getAttribute('data-is');
                    var menuID = '#' + menuType;
                    $(menuID).toggle();
                })
            }
        } catch (e) {
            console.log('Menu button function failed', e)
        }
    }

}());