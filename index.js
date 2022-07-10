
const cards = ["Guadalupe", "Ollie", "Aki"];
function writeCards(cards, events)
{
    let newArr = [];
    for (let i = 0; i < cards.length; i++)
    {
        newArr.push(`Thank you, ${cards[i]}, for the wonderful ${events} gift!`);
        console.log(`Thank you, ${cards[i]}, for the wonderful ${events} gift!`);
    }
    return newArr;
}
writeCards(cards, "surprise");

function countDown()
{
    let i = 10;
    while (i >= 0)
    {
        console.log(i);
        i--;
    }
}

