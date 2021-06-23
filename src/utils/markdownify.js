import marked from 'marked';
import htmlToReact from './htmlToReact';

export default function markdownify(markdown) {
    console.log('Pasé por utils/markdown.js');
    if (!markdown) {
        return null;
    }
    return htmlToReact(marked(markdown));
}
