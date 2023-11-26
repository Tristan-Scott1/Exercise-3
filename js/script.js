function changeItem(itemId) {
    // Get the item and character image elements
    var item = document.getElementById(itemId);
    var characterImage = document.getElementById("characterImage");

    // Set the character image src to the selected item's src
    characterImage.src = item.src;
}