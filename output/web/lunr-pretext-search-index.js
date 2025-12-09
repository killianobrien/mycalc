var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
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
  "id": "sec-seqs-defs",
  "level": "1",
  "url": "sec-seqs-defs.html",
  "type": "Section",
  "number": "2.1",
  "title": "Initial definitions",
  "body": " Initial definitions   Sequence   A sequence is a list of elements, indexed by the positive integers.  In these notes we will almost exclusively be considering sequences of real numbers. But mathematicians could talk of sequences of any sort of mathematical object.  We can use a single letter, say, decorated with an index subscript, to denote the elements of a sequence, as in . This sequence could be denoted as a whole by the notation or just simply , if the indexing is understood.  Variations might be to use the non-negative integers for the indexing, so the first element of the sequence would be rather than . Or perhaps start the indexing at some other integer.    This definition will be sufficient for our purposes, but more formal versions are possible. Some authors would define a sequence of real numbers as a function , i.e. is the function from the index values to the corresponding sequence elements. So then the list\/sequence of elements would be . An advantage of this would be to integrate our definitions with the already existing concept of a mathematical function, and not have to rely on introducing a new concept of list .   Some example sequences  These examples and the other ones in this section show some basic sequences and different ways to use the notation for the sequence element and index.     The sequence of positive integers themselves, . We could denote this as , where the defining rule is simply, for  .    The Fibonacci sequence denoted , where the rule is , i.e. each element is the sum of the previous two elements. This type of definition for a sequence, where each element is defined in terms of previous elements, is called a recurrence relation.     The sequence of odd positive integers , denoted by , defined by the rule .    The sequence of prime numbers denoted by . Unfortunately there is no easy to state formula known for the prime. We can specify an algorithm to find it, and various asymptotic results exist that can approximate the value of it. It can be proved that there an infinite number of primes, so the indexing declaration is valid. See more on this in your Number Theory and Abstract Algebra module next year.       Arithmetic sequences   An arithmetic sequence is one with a constant common difference between successive elements. So we can write such a sequence as , or , where , i.e. is the initial element and the common difference.     Geometric sequences   An geometric sequence is one with a constant common ratio between successive elements. So we can write such a sequence as , or , where , i.e. is the initial element and the common ratio.    Arithmetic and geometric sequences     The sequence of odd positive integers, is arithmetic. It is given by where .    The sequence of powers of , which begins is geometric. It is given by with initial element and common ratio .    A negative example. The sequence of reciprocals of the squares, , where is neither arithmetic nor geometric.    Are there any sequences that are both arithmetic and geometric?    Compound interest awarded on investments, or charged on loans, provide examples of geometric sequences. Suppose a bank overs a savings account with an annualy compounded interest rate of per year on an initial deposit of . Then the value, , of the deposit at the beginning of the year is given by .      "
},
{
  "id": "def-seq",
  "level": "2",
  "url": "sec-seqs-defs.html#def-seq",
  "type": "Definition",
  "number": "2.1.1",
  "title": "Sequence.",
  "body": " Sequence   A sequence is a list of elements, indexed by the positive integers.  In these notes we will almost exclusively be considering sequences of real numbers. But mathematicians could talk of sequences of any sort of mathematical object.  We can use a single letter, say, decorated with an index subscript, to denote the elements of a sequence, as in . This sequence could be denoted as a whole by the notation or just simply , if the indexing is understood.  Variations might be to use the non-negative integers for the indexing, so the first element of the sequence would be rather than . Or perhaps start the indexing at some other integer.   "
},
{
  "id": "sec-seqs-defs-4",
  "level": "2",
  "url": "sec-seqs-defs.html#sec-seqs-defs-4",
  "type": "Example",
  "number": "2.1.2",
  "title": "Some example sequences.",
  "body": " Some example sequences  These examples and the other ones in this section show some basic sequences and different ways to use the notation for the sequence element and index.     The sequence of positive integers themselves, . We could denote this as , where the defining rule is simply, for  .    The Fibonacci sequence denoted , where the rule is , i.e. each element is the sum of the previous two elements. This type of definition for a sequence, where each element is defined in terms of previous elements, is called a recurrence relation.     The sequence of odd positive integers , denoted by , defined by the rule .    The sequence of prime numbers denoted by . Unfortunately there is no easy to state formula known for the prime. We can specify an algorithm to find it, and various asymptotic results exist that can approximate the value of it. It can be proved that there an infinite number of primes, so the indexing declaration is valid. See more on this in your Number Theory and Abstract Algebra module next year.     "
},
{
  "id": "def-arithmetic",
  "level": "2",
  "url": "sec-seqs-defs.html#def-arithmetic",
  "type": "Definition",
  "number": "2.1.3",
  "title": "Arithmetic sequences.",
  "body": " Arithmetic sequences   An arithmetic sequence is one with a constant common difference between successive elements. So we can write such a sequence as , or , where , i.e. is the initial element and the common difference.   "
},
{
  "id": "def-geometric",
  "level": "2",
  "url": "sec-seqs-defs.html#def-geometric",
  "type": "Definition",
  "number": "2.1.4",
  "title": "Geometric sequences.",
  "body": " Geometric sequences   An geometric sequence is one with a constant common ratio between successive elements. So we can write such a sequence as , or , where , i.e. is the initial element and the common ratio.   "
},
{
  "id": "sec-seqs-defs-7",
  "level": "2",
  "url": "sec-seqs-defs.html#sec-seqs-defs-7",
  "type": "Example",
  "number": "2.1.5",
  "title": "Arithmetic and geometric sequences.",
  "body": "Arithmetic and geometric sequences     The sequence of odd positive integers, is arithmetic. It is given by where .    The sequence of powers of , which begins is geometric. It is given by with initial element and common ratio .    A negative example. The sequence of reciprocals of the squares, , where is neither arithmetic nor geometric.    Are there any sequences that are both arithmetic and geometric?    Compound interest awarded on investments, or charged on loans, provide examples of geometric sequences. Suppose a bank overs a savings account with an annualy compounded interest rate of per year on an initial deposit of . Then the value, , of the deposit at the beginning of the year is given by .     "
},
{
  "id": "sec-seqs-mono",
  "level": "1",
  "url": "sec-seqs-mono.html",
  "type": "Section",
  "number": "2.2",
  "title": "Monotonic and bounded sequences",
  "body": " Monotonic and bounded sequences  Before considering the convergence of infinite sequences, we consider the possible increasing, decreasing and bounded behaviour of sequences.    An increasing sequence is one whose elements satisfy .  A decreasing sequence is one whose elements satisfy .  If the inequalities are strict inequalities then we would say the sequence is strictly increasing, or strictly decreasing, as appropriate. Or the inequalities might only hold true from some element onwards, in which case we would say the sequence is increasing\/decreasing from , as appropriate.  The term monotonic , refers to a sequence that is either increasing or decreasing. Similarly for strictly monotonic .    If one has a nice formula for a sequence then the quickest way to see of the sequence is monotonic might be to plot some elements of the sequence using a computer. There are many ways to do this. Here is a quick example of how to do this using Python and the Matplotlib library.   Here is an alternative way, and somewhat quicker, using the Sage language.   Investigating the first few elements of a sequence like this may provide evidence that a sequence is monotonic. However a more rigorous approach, that addresses all elements of the sequence, is needed if we want to formally prove that the sequence is monotonic. There are, at least, two approaches we can take to this. Suppose we are given a sequence and we wish to investigate its monotonic nature. By considering the difference or ratio of consecutive terms, and comparing this to or , we can draw conclusions about the monotonic nature of the sequence.   Consider the general difference, , between consecutive terms, and then compare this to , noting that and Of course, strictly increasing\/decreasing versions of these results hold if the inequalities are strict.    Provided the sequence elements are positive and never zero, consider the general ratio, , between consecutive terms, and then compare this to , noting that S = [(n^2 + 2)\/2^n for n in range(1,50)] list_plot(S) and Of course, strictly increasing\/decreasing versions of these results hold if the inequalities are strict.   Which approach to use might be based on personal preference or the particular form of the formula defining the sequence element.  An increasing, then decreasing sequence   Investigate the sequence defined by , and describe its increasing\/decreasing behaviour.    Consider the ratio of consecutive elements. . The quantity can be compared to . It is greater than for and less than for . So the sequence increases at first, but then decreases for all .     In the next section we will be developing the theory of convergence of infinite sequences, that phenomenon whereby the elements of an infinite sequence might get closer and closer to some limiting value, the further out alond the sequence once goes. Before introducing this concept, we define the bounded property of infinite sequences.  Bounded sequence   A sequence is bounded if and only if there exits a number such that for all the sequence elements satisfy . There are also weaker properties of being bounded above , i.e. , or bounded below , i.e. . The number is called the (upper\/lower) bound, as appropriate.    "
},
{
  "id": "def-monotonic",
  "level": "2",
  "url": "sec-seqs-mono.html#def-monotonic",
  "type": "Definition",
  "number": "2.2.1",
  "title": "",
  "body": "  An increasing sequence is one whose elements satisfy .  A decreasing sequence is one whose elements satisfy .  If the inequalities are strict inequalities then we would say the sequence is strictly increasing, or strictly decreasing, as appropriate. Or the inequalities might only hold true from some element onwards, in which case we would say the sequence is increasing\/decreasing from , as appropriate.  The term monotonic , refers to a sequence that is either increasing or decreasing. Similarly for strictly monotonic .   "
},
{
  "id": "sec-seqs-mono-9",
  "level": "2",
  "url": "sec-seqs-mono.html#sec-seqs-mono-9",
  "type": "Example",
  "number": "2.2.2",
  "title": "An increasing, then decreasing sequence.",
  "body": "An increasing, then decreasing sequence   Investigate the sequence defined by , and describe its increasing\/decreasing behaviour.    Consider the ratio of consecutive elements. . The quantity can be compared to . It is greater than for and less than for . So the sequence increases at first, but then decreases for all .    "
},
{
  "id": "def-bounded",
  "level": "2",
  "url": "sec-seqs-mono.html#def-bounded",
  "type": "Definition",
  "number": "2.2.3",
  "title": "Bounded sequence.",
  "body": "Bounded sequence   A sequence is bounded if and only if there exits a number such that for all the sequence elements satisfy . There are also weaker properties of being bounded above , i.e. , or bounded below , i.e. . The number is called the (upper\/lower) bound, as appropriate.   "
},
{
  "id": "sec-seqs-convergence",
  "level": "1",
  "url": "sec-seqs-convergence.html",
  "type": "Section",
  "number": "2.3",
  "title": "Convergence",
  "body": " Convergence  Text of section.  "
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
