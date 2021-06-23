export default function attribute(name, value, condition) {
    if (typeof condition === 'undefined') {
        console.log('Pasé por utils/attribute.js');
        condition = true;
    }
    return condition ? { [name]: value } : null;
}
