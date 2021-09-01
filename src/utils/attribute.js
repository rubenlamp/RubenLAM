//console.log('a Pasé por utils/attribute.js');
export default function attribute(name, value, condition) {
    //console.log('b Pasé por utils/attribute.js');
    if (typeof condition === 'undefined') {
        condition = true;
    }
    return condition ? { [name]: value } : null;
}
