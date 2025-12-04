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
  "id": "ch-intro",
  "level": "1",
  "url": "ch-intro.html",
  "type": "Chapter",
  "number": "1",
  "title": "Introduction",
  "body": " Introduction   Text before the first section. With some inline mathematics . That looks nice.  And some displayed mathematics: .     "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "2.1",
  "title": "Initial definitions",
  "body": " Initial definitions   Sequence   A sequence is a list of elements, indexed by the positive integers.  In these notes we will almost exclusively be considering sequences of real numbers. But mathematicians could talk of sequences of any sort of mathematical object.  We can use a single letter, say, decorated with an index subscript, to denote the elements of a sequence, as in . This sequence could be denoted as a whole by the notation or just simply , if the indexing is understood.  Variations might be to use the non-negative integers for the indexing, so the first element of the sequence would be rather than . Or perhaps start the indexing at some other integer.    This definition will be sufficient for our purposes, but more formal versions are possible. Some authors would define a sequence of real numbers as a function , i.e. is the function from the index values to the corresponding sequence elements. So then the list\/sequence of elements would be . An advantage of this would be to integrate our definitions with the already existing concept of a mathematical function, and not have to rely on introducing a new concept of list .   Some example sequences  These examples and the other ones in this section show some basic sequences and different ways to use the notation for the sequence element and index.     The sequence of positive integers themselves, . We could denote this as , where the defining rule is simply, for  .    The Fibonacci sequence denoted , where the rule is , i.e. each element is the sum of the previous two elements. This type of definition for a sequence, where each element is defined in terms of previous elements, is called a recurrence relation.     The sequence of odd positive integers , denoted by , defined by the rule .    The sequence of prime numbers denoted by . Unfortunately there is no easy to state formula known for the prime. We can specify an algorithm to find it, and various asymptotic results exist that can approximate the value of it. It can be proved that there an infinite number of primes, so the indexing declaration is valid. See more on this in your Number Theory and Abstract Algebra module next year.      "
},
{
  "id": "def-seq",
  "level": "2",
  "url": "sec-section-name.html#def-seq",
  "type": "Definition",
  "number": "2.1.1",
  "title": "Sequence.",
  "body": " Sequence   A sequence is a list of elements, indexed by the positive integers.  In these notes we will almost exclusively be considering sequences of real numbers. But mathematicians could talk of sequences of any sort of mathematical object.  We can use a single letter, say, decorated with an index subscript, to denote the elements of a sequence, as in . This sequence could be denoted as a whole by the notation or just simply , if the indexing is understood.  Variations might be to use the non-negative integers for the indexing, so the first element of the sequence would be rather than . Or perhaps start the indexing at some other integer.   "
},
{
  "id": "sec-section-name-4",
  "level": "2",
  "url": "sec-section-name.html#sec-section-name-4",
  "type": "Example",
  "number": "2.1.2",
  "title": "Some example sequences.",
  "body": " Some example sequences  These examples and the other ones in this section show some basic sequences and different ways to use the notation for the sequence element and index.     The sequence of positive integers themselves, . We could denote this as , where the defining rule is simply, for  .    The Fibonacci sequence denoted , where the rule is , i.e. each element is the sum of the previous two elements. This type of definition for a sequence, where each element is defined in terms of previous elements, is called a recurrence relation.     The sequence of odd positive integers , denoted by , defined by the rule .    The sequence of prime numbers denoted by . Unfortunately there is no easy to state formula known for the prime. We can specify an algorithm to find it, and various asymptotic results exist that can approximate the value of it. It can be proved that there an infinite number of primes, so the indexing declaration is valid. See more on this in your Number Theory and Abstract Algebra module next year.     "
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
