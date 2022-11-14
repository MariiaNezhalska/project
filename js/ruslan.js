const boolean = false;
const nullCustom = null;
const undefinedCustom = undefined;
const isAge = 0;
const isName = 'Maryna'; // '' - empty string is always FALSE !
// && - and , || - or
//isName === false - nobody wrtie like this
//isName
//or if you want to check on false condition you should write !isAge
// !isAge will be equal to isAge === false
if ((!isAge || isName) || (boolean || nullCustom || !undefinedCustom)) {
	console.log('TRUE');
} else {
	console.log('FALSE');
}
