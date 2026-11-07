/* STARR Rum demo data, 2026-11-07.
 REAL: products, names, images, copy and prices from https://shop.starrrum.com (Shopify /products.json; the store runs on Flaviar Checkout).
 Network retailers: active, in-stock (0 < stock < 9000) LiquidCommerce retailer variants matched on product name, 2026-11-07.
 Gopuff ZIPs: delivery ZIPs of Gopuff locations carrying the product in the gopuff_feed availability snapshot, 2026-11-07.
 NOT REAL: no order is placed; shipping ($14.99), Gopuff fee ($4.99) and 8% tax are illustrative. */
window.DEMO = {
 "key": "starrrum",
 "brand": "STARR Rum",
 "storeName": "STARR Rum",
 "orderPrefix": "STA",
 "catalog": {
  "rum-bundle": {
   "name": "STARR Siblings Combo",
   "short": "STARR Siblings Combo",
   "size": "750ML",
   "tag": "rum",
   "price": 9498,
   "image": "assets/p-rum-bundle.jpg",
   "gallery": [
    "assets/p-rum-bundle.jpg"
   ],
   "lead": "",
   "specs": "RUM",
   "desc": [
    "21 and older, ID required at delivery."
   ],
   "soldOut": false
  },
  "ultra-superior-light-rum": {
   "name": "STARR Ultra Superior Light Rum",
   "short": "STARR Ultra Superior Light Rum",
   "size": "750ML",
   "tag": "rum",
   "price": 3999,
   "image": "assets/p-ultra-superior-light-rum.jpg",
   "gallery": [
    "assets/p-ultra-superior-light-rum.jpg"
   ],
   "lead": "",
   "specs": "RUM",
   "desc": [
    "STARR Ultra Superior Light Rum is a light molasses rum featuring a cherry and cardamom base with hints of citrus, nutmeg and vanilla. It is a blend of barrelings aged in oak. After the final blend is ready, the rum is charcoal filtered, removing any impurities and resulting in a clean, clear spirit. Unrivaled for smoothness and subtlety amongst light rums of the world, STARR is an extremely approachable and easy-drin",
    "21 and older, ID required at delivery."
   ],
   "soldOut": false
  },
  "oak-age-7yr-vieux-rhum-rum": {
   "name": "STARR 7 Year Oak Aged Rum",
   "short": "STARR 7 Year Oak Aged Rum",
   "size": "750ML",
   "tag": "rum",
   "price": 5499,
   "image": "assets/p-oak-age-7yr-vieux-rhum-rum.jpg",
   "gallery": [
    "assets/p-oak-age-7yr-vieux-rhum-rum.jpg"
   ],
   "lead": "",
   "specs": "RUM",
   "desc": [
    "STARR 7 Year Oak Aged Rum has a rich, full flavor that features oak, vanilla, caramel, nutmeg and cinnamon. It is a blend of barrelings aged to perfection in oak. Similar flavors resonate from the the light expression but are deeper and more concentrated. This expression allows the oak to sing—and harkens to the great whiskeys and bourbons of the world—while featuring a fruitier, more tropical palate with notes of ba",
    "21 and older, ID required at delivery."
   ],
   "soldOut": false
  }
 },
 "order": [
  "rum-bundle",
  "ultra-superior-light-rum",
  "oak-age-7yr-vieux-rhum-rum"
 ],
 "defaultHandle": "rum-bundle",
 "retailers": [],
 "realHandles": [],
 "gopuff": null,
 "noShip": [
  "AK",
  "HI"
 ],
 "rates": {
  "shipping": 1499,
  "freeOver": 0,
  "gopuff": 499
 },
 "taxRate": 0.08,
 "expressAddress": [
  "233 S Wacker Dr",
  "Chicago",
  "60606"
 ],
 "fulfilIcon": "assets/logo.png",
 "rbNote": "",
 "text": {
  "fulfilReal": "In stock at licensed retailers in our network today. Enter your ZIP at checkout for delivery or shipping.",
  "fulfilLaunch": "Ships from a licensed retailer in your state. Rates show at checkout once you enter your address.",
  "cardReal": "In stock at network retailers",
  "cardLaunch": "Ships from licensed retailers",
  "soldOut": "Sold out.",
  "noShip": "We are not shipping to {state} yet.",
  "launchNote": "In the demo, no network retailer stocks this bottle yet. Licensed retailers are connected during onboarding, which takes about one week."
 }
};
