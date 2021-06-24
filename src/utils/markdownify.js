import marked from 'marked';
import htmlToReact from './htmlToReact';
console.log('a Pasé por utils/markdown.js');

export default function markdownify(markdown) {
    console.log('b Pasé por utils/markdown.js');
    if (!markdown) {
        return null;
    }
    return htmlToReact(marked(markdown));
}
