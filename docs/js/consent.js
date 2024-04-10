var consent = __md_get("__consent")

function replaceTag(source, target, replaceInner=false) {
    [...document.getElementsByTagName(source)].forEach(src => {
        const el = document.createElement(target)
        for (i=0; i<src.attributes.length; i++) {
            el.setAttribute(src.attributes.item(i).nodeName, src.attributes.item(i).nodeValue)
        }
        if (replaceInner) { el.innerHTML = "Image: " + el.attributes.alt.value }
        src.parentNode.replaceChild(el, src)
    })
}

if (consent && consent.imgur) {
    /* user accepted, download images */
    replaceTag("imgur", "img")
} else {
    /* do not download images */
    replaceTag("imgur", "a", true)
}
