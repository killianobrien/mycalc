var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-int-intro",
  "level": "1",
  "url": "sec-int-intro.html",
  "type": "Section",
  "number": "1.1",
  "title": "Introduction",
  "body": " Introduction  In this module we shall be initially discussing two different concepts that go under the banner of integration . Initially they will seem unrelated, but then they will be unified through the important result of , The Fundamental Theorem of Calculus .  The first concept is integration as the process of anti-differentiation , i.e. an inverse operation that undoes the effect of differentiation in a way. For example, consider the function which has derivative . We will want to say that an anti-derivative of a function is the function .  The second conecpt is integration as the process of summing up or recording the total accumulated value of a function across some interval or sub-domain of the real numbers. This will give the area beneath the curve of a function and will be known as the definite integral of the function over that interval.  These two concepts will be later unified and shown to be initimately connected through , The Fundamental Theorem of Calculus .  "
},
{
  "id": "sec-int-anti",
  "level": "1",
  "url": "sec-int-anti.html",
  "type": "Section",
  "number": "1.2",
  "title": "The anti-derivative",
  "body": " The anti-derivative   Anti-derivative   An anti-derivative of a function a function is any function that satisfies   We can use the notation to denote such a function, calling it an indefinite integral of .     The function is an anti-derivative for the function . And so is the function , in fact, so is any function , where is any real constant.     Suppose that are two anti-derivatives of a function on , then and differ by a constant, i.e. there exists such that     This relationship between different anti-derivatives of the same function is depicted in .   Two anti-derivatives of the same function.   Two anti-derivatives of the same function.    Using this concept of anti-differentiation we can gather together some key properties that it will satisfy, along with some anti-derivatives of common functions.     We will return to indefinite integration after we have the concept of the definite integral.  "
},
{
  "id": "def-antideriv",
  "level": "2",
  "url": "sec-int-anti.html#def-antideriv",
  "type": "Definition",
  "number": "1.2.1",
  "title": "Anti-derivative.",
  "body": " Anti-derivative   An anti-derivative of a function a function is any function that satisfies   We can use the notation to denote such a function, calling it an indefinite integral of .   "
},
{
  "id": "sec-int-anti-3",
  "level": "2",
  "url": "sec-int-anti.html#sec-int-anti-3",
  "type": "Example",
  "number": "1.2.2",
  "title": "",
  "body": " The function is an anti-derivative for the function . And so is the function , in fact, so is any function , where is any real constant.  "
},
{
  "id": "thm-int-antidivs",
  "level": "2",
  "url": "sec-int-anti.html#thm-int-antidivs",
  "type": "Theorem",
  "number": "1.2.3",
  "title": "",
  "body": "  Suppose that are two anti-derivatives of a function on , then and differ by a constant, i.e. there exists such that    "
},
{
  "id": "fig-antiderivs",
  "level": "2",
  "url": "sec-int-anti.html#fig-antiderivs",
  "type": "Figure",
  "number": "1.2.4",
  "title": "",
  "body": " Two anti-derivatives of the same function.   Two anti-derivatives of the same function.   "
},
{
  "id": "sec-defint",
  "level": "1",
  "url": "sec-defint.html",
  "type": "Section",
  "number": "1.3",
  "title": "The definite integral",
  "body": " The definite integral  "
},
{
  "id": "sec-FTC",
  "level": "1",
  "url": "sec-FTC.html",
  "type": "Section",
  "number": "1.4",
  "title": "The Fundamental Theorem of Calculus",
  "body": " The Fundamental Theorem of Calculus   The Fundamental Theorem of Calculus   The statement.    "
},
{
  "id": "thm-FTC",
  "level": "2",
  "url": "sec-FTC.html#thm-FTC",
  "type": "Theorem",
  "number": "1.4.1",
  "title": "The Fundamental Theorem of Calculus.",
  "body": " The Fundamental Theorem of Calculus   The statement.   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
