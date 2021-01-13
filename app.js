(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.provider('ShoppingListService', ShoppingListServiceProvider)


ToBuyController.$inject = ['ShoppingListService'];
function ToBuyController(ShoppingListService) {
  var tobuy = this;

  tobuy.toBuyItems = ShoppingListService.getItemsToBuy();

  tobuy.buyItem = function (itemIndex) {
      ShoppingListService.buyItemFromList(itemIndex);
      ShoppingListService.removeItemFromBuyList(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListService'];
function AlreadyBoughtController(ShoppingListService) {
  var alreadybought = this;

  alreadybought.alreadyboughtitems = ShoppingListService.getItemsAlreadyBought();
}



function ShoppingListService() {
  var service = this;

  // List of shopping items
  var toBuyItems = [
    { name: "cookies", quantity: 10 },
    { name: "chips", quantity: 5 },
    { name: "cola", quantity: 3 },
    { name: "steaks", quantity: 2 },
    { name: "beers", quantity: 20 },
  ];

  var alreadyBoughtItems = [];

  service.buyItemFromList = function (itemIndex) {
      var item = {
        name: toBuyItems[itemIndex].name,
        quantity: toBuyItems[itemIndex].quantity
      };
      alreadyBoughtItems.push(item);
  };

  service.removeItemFromBuyList = function (itemIndex) {
    toBuyItems.splice(itemIndex, 1);
  };

  service.getItemsToBuy = function () {
    return toBuyItems;
  };

  service.getItemsAlreadyBought = function () {
    return alreadyBoughtItems;
  };
}


function ShoppingListServiceProvider() {
  var provider = this;

  provider.$get = function () {
    var shoppingList = new ShoppingListService();

    return shoppingList;
  };
}

})();
