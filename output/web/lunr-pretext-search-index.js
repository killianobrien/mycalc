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
  "body": " The definite integral   A motivating example  Consider an object travelling with constant velocity , and ending at . Then the displacement, , (the total distance travelled) of the object will be given by  Key idea: products like this can often be conceived geometrically as areas as in . The total displacement can be thought of as the accumulated velocity over the time period, or the continuos summation of all the velocity over the time period.   The displacement .   The rectangular displacement area.    Then we can extend this concept to situations with changing velocity. The displacement will still correspond to the accumulated area, i.e. the area between the velocity curve and the axis. However regions where the velocity becomes negative, i.e. turns in the opposite direction, will have to be counted as a negative contribution to the area\/displacement. This is depicted in figure FIGURE where the positive areas are shaded yellow and the ngative areas shaded red.   The displacement .   Displacement as area with postive and negative contributions.      Definite integral and Riemann integration    Let . For a continuous function defined on a closed interval of the real numbers, the definite integral of over the interval is defined to be the total signed area lying between the graph of the function and the -axis. That is, regions where is positive will contribute positively to the toal area, and regions where is negative will contribute negatively to the total area. The following notation is used for this definite integral     We are now faced with a general problem. Given a variable function , how do we actually compute the definite integral ? For certain nice functions we might be able to use known geometric results for the areas of rectangles, triangles, circles etc, to evaluate such integrals. But that does not cover most functions. For instance, what is the definite integral of the function for instance? Thankfully we have a systematic way of defining the definite integral via a limit of a sequence of approximations to the total signed area underneath the graph. This method is known as the Riemann integral .   Key idea:  The key idea behind Riemann inegration is to construct an approximation for the definite integral consisting of a collection of rectangles that span the interval and whose heights come up to meet the graph of the function. See for a sketch of such a situation.   Rectangles approximating the definite integral.   Rectangles approximating the definite integral    In the figure we can see how the sum of the areas of the rectangles is an approximation to the area underneath the curve, i.e. to the definite integral. However it is not exact as due to the fluctuating value of the function there are places where the rectangles poke out above the function (shaded green) and places where the rectangles fail to cover all the space beneath the curve (shaded red). However if we allowed outselves to use more and thinnner rectangles, then these over and under estimations would be reduced. And perhaps if we took the limit as the number of rectangles tended to and their widths tended to then, in the limit, we may capture the value of the definite integral exactly.  This is the idea behind Riemann integration.    "
},
{
  "id": "fig-rect",
  "level": "2",
  "url": "sec-defint.html#fig-rect",
  "type": "Figure",
  "number": "1.3.1",
  "title": "",
  "body": " The displacement .   The rectangular displacement area.   "
},
{
  "id": "fig-undulating",
  "level": "2",
  "url": "sec-defint.html#fig-undulating",
  "type": "Figure",
  "number": "1.3.2",
  "title": "",
  "body": " The displacement .   Displacement as area with postive and negative contributions.   "
},
{
  "id": "def-defint-defint",
  "level": "2",
  "url": "sec-defint.html#def-defint-defint",
  "type": "Definition",
  "number": "1.3.3",
  "title": "",
  "body": "  Let . For a continuous function defined on a closed interval of the real numbers, the definite integral of over the interval is defined to be the total signed area lying between the graph of the function and the -axis. That is, regions where is positive will contribute positively to the toal area, and regions where is negative will contribute negatively to the total area. The following notation is used for this definite integral    "
},
{
  "id": "fig-riemann",
  "level": "2",
  "url": "sec-defint.html#fig-riemann",
  "type": "Figure",
  "number": "1.3.4",
  "title": "",
  "body": " Rectangles approximating the definite integral.   Rectangles approximating the definite integral   "
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
