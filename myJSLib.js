function getById(elemId){
    return document.getElementById(elemId);
}


function getByClass(clsName, context, tag){
    var result = [];
    context = context || document;
    tag = tag || '*';
    var arr = context.getElementsByTagName(tag);
    for(var i=0; i<arr.length; i++){
        var re = new RegExp("\\b"+clsName+"\\b", 'g');
        if(re.test(arr[i].className)){
            result.push(arr[i]);
        }
    }
    return result;
}

function getByTag(tagName, context){
    context = context || document;
    return context.getElementsByTagName(tagName);
}

function addClass(elem, className){
    // elem.className += " " + className;
    var re = new RegExp('\\b' + className + '\\b', 'g');
    if(!re.test(elem.className)){
        elem.className += " " + className;
    }
}

function removeClass(elem, className){
    // elem.className += " " + className;
    var re = new RegExp('\\b' + className + '\\b', 'g');
    if(re.test(elem.className)){
        elem.className = elem.className.replace(re, "");
    }
}

///////////From "Pro JavaScript Techniques" of John Resig/////////////
function append( parent, elem ) {
    // Get the array of elements
    var elems = checkElem( elem );

    // Append them all to the element
    for ( var i = 0; i < elems.length; i++ ) {
        parent.appendChild( elems[i] );
    }
}

function checkElem(a) {
    var r = [];
    // Force the argument into an array, if it isn’t already
    if ( a.constructor != Array ) a = [ a ];//a => array
    //a = [dom]

    for ( var i = 0; i < a.length; i++ ) {
        // If there’s a String
        //a[i]="<div><h1>hehehe</h1></div>"
        if ( a[i].constructor == String ) {
            // Create a temporary element to house the HTML
            var div = document.createElement("div");

            // Inject the HTML, to convert it into a DOM structure
            div.innerHTML = "<div><h1>hehehe</h1></div>";

             // Extract the DOM structure back out of the temp DIV
             for ( var j = 0; j < div.childNodes.length; j++ ){
                 r[r.length] = div.childNodes[j];
             }
        } else if ( a[i].length ) { // If it’s an array
            // Assume that it’s an array of DOM Nodes
            for ( var j = 0; j < a[i].length; j++ )
                r[r.length] = a[i][j];
        } else { // Otherwise, assume it’s a DOM Node
            r[r.length] = a[i];
        }
    }
    return r;
}

function before( parent, before, elem ) {
    // Check to see if no parent node was provided
    if ( elem == null ) {
        elem = before;
        before = parent;
        parent  = before.parentNode;
    }
    parent.insertBefore( checkElem( elem ), before );
}