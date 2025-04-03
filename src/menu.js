let menuArray = [];
class Menu {
  constructor(title, texts, price, imgUrl) {
    this.title = title;
    this.texts = texts;
    this.price = price;
    this.img = imgUrl;
  }
}

menuArray.push(
  new Menu(
    "testFood",
    "lorem testing tester",
    "30.99",
    "https://www.thespruceeats.com/thmb/AQ5diUdXp9a9bXJMwtSTtG0lpr8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SeafoodPaellaWithPorkandChicken-Westend61_GettyImages-b0e7019672484c8a91c250d399d1d163.jpg"
  ),
  new Menu(
    "Crispy Fried Oysters With Cornmeal Batter",
    "Oysters Rockefeller may be more widely known, but crispy fried oysters are the Southern twist everyone has come to love. Serve them as a meal or on top of a salad for equal parts salty and savory with a cornmeal breading. They go well with tartar sauce or classic rémoulade.",
    "44.99",
    "https://www.thespruceeats.com/thmb/TSY9sgPUTIRHw73LH5lmcWZAipA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/fried-oysters-with-cornmeal-batter-3058714-hero-01-72bfb78fb3f945108b40c7b612c60d93.jpg"
  ),
  new Menu(
    "Shrimp Ceviche",
    'Delight your dinner guests with this refreshing, no-cook appetizer that is a staple of seaside resorts. It is essentially a low-calorie shrimp cocktail that marinates or "cures" raw shrimp in citrus juices, with diced raw veggies, chiles, and herbs for flavoring. Buy the freshest shrimp you can find for this yummy starter.',
    "64.99",
    "https://www.thespruceeats.com/thmb/7o0pqbOlZoVfrd5QrOqdrb0w8iU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/shrimp-ceviche-recipe-5213319-hero-01-8d349ee0591048a588ffac66b3c5870c.jpg"

  ),
  new Menu(
    'Beef Wellington',
    "If you ever watched Hell's Kitchen, you may feel intimidated to make beef Wellington, a stunning dish of juicy tenderloin wrapped in mushroom duxelles, and encased in a puff pastry crust. But there is no need — this genius recipe walks you through each step of creating Gordon Ramsay's most famous restaurant dish in your kitchen without any of the drama.",
    '59.99',
    'https://www.thespruceeats.com/thmb/H1VKmdNz66CPosoP3cwLXU5RtTk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/make-a-classic-beef-wellington-easy-435726-hero-03-1210c31e884044bcb9c1d1475ca818c3.jpg'
  ),
  new Menu(
    'Steak au Poivre',
    "A classic in every French cookbook, steak au poivre is an excellent main dish for a romantic meal. It is a fancy meal that comes together in a single skillet with perfectly pan-seared, peppercorn-crusted steaks. It's coated in a rich and creamy blanket of cognac sauce. Serve it with truffle fries or chateau potatoes",
    '129.99',
    'https://www.thespruceeats.com/thmb/9_J6fGTFQz5sQNucdwvFLGtGd2w=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ClassicFrenchSteakauPoivre-TheSpruce-5c62efe3c9e77c0001662762.jpg'

  ),
  new Menu(
    'Grilled Filet Mignon with Bearnaise Sauce',
    'There are a few French sauces that you can master to take all of your dishes to the next culinary level. Learn how to make this insanely delicious classic French Bearnaise sauce for topping tender filet mignons and dipping steamed asparagus spears. You will have a go-to magic trick for every special dinner in your future.',
    '69.99',
    'https://www.thespruceeats.com/thmb/5fYyZdcgUtV_wYmp8OACRXO-x2o=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/grilled-filet-mignon-with-bearnaise-sauce-3573497-hero-01-9b0abe87c0524a799724135b99b483c8.jpg'

  )
);

export function createMenuList() {
  const contentContainer = document.querySelector("#content");
  const menuContent = document.createElement("div");

  contentContainer.innerHTML = "";
  menuContent.id = "menu-content";

  const menuListText = document.createElement("h1");
  menuListText.textContent = "Menu List ";
  menuListText.id = "menu-h1";

  const menuList = createItems();

  menuContent.appendChild(menuListText);
  menuContent.appendChild(menuList);
  contentContainer.appendChild(menuContent);
  boxContent();
}

function createItems() {
  const menuItems = document.createElement("div");
  menuItems.id = "menuItems";
  for (let i = 0; i < menuArray.length; i++) {
    const boxItem = document.createElement("div");
    boxItem.className = "box-item";
    menuItems.appendChild(boxItem);
  }
  return menuItems;
}

function boxContent() {
  const boxItems = document.querySelectorAll(".box-item");
  
  boxItems.forEach((box, index) => {
    const boxTextItems = document.createElement("div")
    const boxText = document.createElement("h4");
    const boxDescription = document.createElement("p");
    const price = document.createElement("p")
    const img = document.createElement('img')

    boxTextItems.className = 'box-text-items'

    boxText.textContent = menuArray[index]["title"];
    boxText.className = "item-header"

    boxDescription.textContent = menuArray[index]["texts"];
    boxDescription.className = "item-description"

    price.textContent = menuArray[index]["price"];
    price.className = "item-price"

    img.src = menuArray[index]['img']
    img.className = "item-img"


    boxTextItems.appendChild(boxText)
    boxTextItems.appendChild(price)
    boxTextItems.appendChild(boxDescription)
    box.appendChild(img)
    box.appendChild(boxTextItems)
    
    

  });
}
