let tugma = document.getElementById("tugma")
let rasmi = document.getElementById("rasmi")


const rasmm = ["https://static10.tgstat.ru/channels/_0/8e/8e9529121d64d0122ad158c24a184a07.jpg",  "https://avatars.mds.yandex.net/i?id=7563fe15f4a3c90da4a4dd3ad24646359198e903-5877286-images-thumbs&n=13"];
let uzgar = 0;

function rasm() {
    uzgar = (uzgar + 1) % rasmm.length;
    document.getElementById("rasmi").src = rasmm[uzgar];
}
