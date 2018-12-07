
function unhide(sectionID, aID) {
var item = document.getElementById(sectionID);
if (item) {
item.className=(item.className=='hidden')?'unhidden':'hidden';
}
var image = document.getElementById(aID);
if (image) {
image.className=(image.className=='unhidden')?'hidden':'unhidden';
}
}
