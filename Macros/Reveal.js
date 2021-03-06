// Will reveal any number of tokens on the map, as defined by the macro
// Example: @ChatMessage[/Reveal "Pit Trap"]

for(let arg of args)
{
    try{
        let token = canvas.tokens.placeables.find(token => token.name === arg).update({"hidden": false});
        console.log(arg," worked");
    }catch(error){ console.log(error) }
}
