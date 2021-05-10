var all_button = document.getElementById("all-button");
all_button.addEventListener("click", function () {
  fetch("https://api.magicthegathering.io/v1/cards/")
    .then(function (answer) {
      return answer.json();
    })
    .then(function (data) {
      var card_names = document.getElementById("names");
      card_names.innerHTML = "";
      for (let i = 0; i < 10; i++) {
        var card_check_div = document.createElement("div");
        var card_name = document.createElement("p");
        card_name.innerHTML += data.cards[i].name;
        card_check_div.appendChild(card_name);

        card_name.addEventListener("click", function () {
          card_check(data.cards[i].id);
        });
        var test = document.createElement("div");
        test.appendChild(card_check_div);
        card_names.appendChild(test);
        test.classList.add("test");
      }
      var previous_button = document.getElementById("previous-button");
      var next_button = document.getElementById("next-button");
      previous_button.classList.remove("disabled");
      next_button.classList.remove("disabled");
      all_button.classList.add("disabled");
      card_names.classList.add("visible");
      card_names.classList.remove("invisible");
    });
});

function card_check(id) {
  var card_info = document.getElementById("info");
  card_info.className = "visible";
  fetch("https://api.magicthegathering.io/v1/cards/" + id)
    .then(function (answer) {
      return answer.json();
    })
    .then(function (data) {
      card_info.innerHTML = "";

      var card_name_header = document.createElement("h3");
      card_name_header.innerHTML = "Name";
      var card_info_name = document.createElement("p");
      card_info_name.innerHTML = data.card.name;
      var card_name_div = document.createElement("div");
      card_name_div.appendChild(card_name_header);
      card_name_div.appendChild(card_info_name);

      var card_setName_header = document.createElement("h3");
      card_setName_header.innerHTML = "Set Name";
      var card_info_setName = document.createElement("p");
      card_info_setName.innerHTML = data.card.setName;
      var card_setName_div = document.createElement("div");
      card_setName_div.appendChild(card_setName_header);
      card_setName_div.appendChild(card_info_setName);

      var card_artist_header = document.createElement("h3");
      card_artist_header.innerHTML = "Artist";
      var card_info_artist = document.createElement("p");
      card_info_artist.innerHTML = data.card.artist;
      var card_artist_div = document.createElement("div");
      card_artist_div.appendChild(card_artist_header);
      card_artist_div.appendChild(card_info_artist);

      var card_type_header = document.createElement("h3");
      card_type_header.innerHTML = "Type";
      var card_info_type = document.createElement("p");
      card_info_type.innerHTML = data.card.type;
      var card_type_div = document.createElement("div");
      card_type_div.appendChild(card_type_header);
      card_type_div.appendChild(card_info_type);

      var card_rarity_header = document.createElement("h3");
      card_rarity_header.innerHTML = "Rarity";
      var card_info_rarity = document.createElement("p");
      card_info_rarity.innerHTML = data.card.rarity;
      var card_rarity_div = document.createElement("div");
      card_rarity_div.appendChild(card_rarity_header);
      card_rarity_div.appendChild(card_info_rarity);

      var card_colors_header = document.createElement("h3");
      card_colors_header.innerHTML = "Colors";
      var card_info_colors = document.createElement("p");
      card_info_colors.innerHTML = data.card.colors;
      var card_colors_div = document.createElement("div");
      card_colors_div.appendChild(card_colors_header);
      card_colors_div.appendChild(card_info_colors);

      var card_manaCost_header = document.createElement("h3");
      card_manaCost_header.innerHTML = "Mana Cost";
      var card_info_manaCost = document.createElement("p");
      card_info_manaCost.innerHTML = data.card.manaCost;
      var card_manaCost_div = document.createElement("div");
      card_manaCost_div.appendChild(card_manaCost_header);
      card_manaCost_div.appendChild(card_info_manaCost);

      var card_text_header = document.createElement("h3");
      card_text_header.innerHTML = "Description";
      var card_info_text = document.createElement("p");
      card_info_text.innerHTML = data.card.text;
      var card_text_div = document.createElement("div");
      card_text_div.appendChild(card_text_header);
      card_text_div.appendChild(card_info_text);

      var card_info_container = document.createElement("div");
      card_info_container.appendChild(card_name_div);
      card_info_container.appendChild(card_setName_div);
      card_info_container.appendChild(card_artist_div);
      card_info_container.appendChild(card_type_div);
      card_info_container.appendChild(card_rarity_div);
      card_info_container.appendChild(card_colors_div);
      card_info_container.appendChild(card_manaCost_div);
      card_info_container.appendChild(card_text_div);

      card_info.appendChild(card_info_container);

      card_info_container.classList.add("seperate");

      var card_info_image = document.createElement("img");
      card_info_image.setAttribute("src", data.card.imageUrl);
      var card_image_div = document.createElement("div");
      card_image_div.appendChild(card_info_image);
      card_info.appendChild(card_image_div);
    });
}

var animateButton = function (e) {
  e.preventDefault;
  //reset animation
  e.target.classList.remove("animate");

  e.target.classList.add("animate");
  setTimeout(function () {
    e.target.classList.remove("animate");
  }, 700);
};

var bubblyButtons = document.getElementsByClassName("buttons");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener("click", animateButton, false);
}
