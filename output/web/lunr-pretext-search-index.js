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
  "body": " Monotonic and bounded sequences  Before considering the convergence of infinite sequences, we consider the possible increasing, decreasing and bounded behaviour of sequences.    An increasing sequence is one whose elements satisfy .  A decreasing sequence is one whose elements satisfy .  If the inequalities are strict inequalities then we would say the sequence is strictly increasing, or strictly decreasing, as appropriate. Or the inequalities might only hold true from some element onwards, in which case we would say the sequence is increasing\/decreasing from , as appropriate.  The term monotonic , refers to a sequence that is either increasing or decreasing. Similarly for strictly monotonic .    If one has a nice formula for a sequence then the quickest way to see of the sequence is monotonic might be to plot some elements of the sequence using a computer. There are many ways to do this. Here is a quick example of how to do this using Python and the Matplotlib library.   Here is an alternative way, and somewhat quicker, using the Sage language.   Investigating the first few elements of a sequence like this may provide evidence that a sequence is monotonic. However a more rigorous approach, that addresses all elements of the sequence, is needed if we want to formally prove that the sequence is monotonic. There are, at least, two approaches we can take to this. Suppose we are given a sequence and we wish to investigate its monotonic nature. By considering the difference or ratio of consecutive terms, and comparing this to or , we can draw conclusions about the monotonic nature of the sequence.   Consider the general difference, , between consecutive terms, and then compare this to , noting that and Of course, strictly increasing\/decreasing versions of these results hold if the inequalities are strict.    Provided the sequence elements are positive and never zero, consider the general ratio, , between consecutive terms, and then compare this to , noting that and Of course, strictly increasing\/decreasing versions of these results hold if the inequalities are strict.   Which approach to use might be based on personal preference or the particular form of the formula defining the sequence element.  An increasing, then decreasing sequence   Investigate the sequence defined by , and describe its increasing\/decreasing behaviour.    Consider the ratio of consecutive elements. . The quantity can be compared to . It is greater than for and less than for . So the sequence increases at first, but then decreases for all .     In the next section we will be developing the theory of convergence of infinite sequences, that phenomenon whereby the elements of an infinite sequence might get closer and closer to some limiting value, the further out alond the sequence once goes. Before introducing this concept, we define the bounded property of infinite sequences.  Bounded sequence   A sequence is bounded if and only if there exits a number such that for all the sequence elements satisfy . There are also weaker properties of being bounded above , i.e. , or bounded below , i.e. . The number is called the (upper\/lower) bound, as appropriate.    "
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
  "body": " Convergence  Introductory and motivational remarks.   Convergence (informal)   Let . A sequence converges to the limit if and only if as increases, the elements of the sequence get closer and closer to , or equivalently, the distance gets closer and closer to .  Other notation and language used to say that the sequence  converges to the limit is to say that tends to as tends to , or in symbolic form , or , where the latter expression is read as \"the limit, as tends to , is \" .  If a sequence is not convergent then we say that it is divergent .   Some sequences are divergent because their terms keep increasing in absolute value without any upper bound, in which case we can write or . The first of these says that the term $y_n$ increase in positive value without any upper bound, and the second says that the terms $y_n$ get large and negative without any lower bound. However although this notation and phrasing is used quite commonly we should be careful. Such sequences are still divergent, and we should certainly not treat (whatever it is really) as a number like any other.  A convergent sequence   It is not too hard to appreciate the convergence of some simple sequences, for instance . The numbers are getting smaller and smaller and moreover they are getting arbitrarily small , i.e. given any small number , eventually the fractions will get smaller than .    While the definition given in allows us to understand the idea of convergence, a more rigorous formal definition is needed to prove results about the concept of convergence.   Convergence (formal)   The sequence converges to the limit if and only if given any there exists a postive integer such that for all the inequality holds.    This definition is important, and forms the basis of much of the following material on the theory of sequences. We shall be using the definition in two main ways.   To prove that certain given sequences either do or do not converge to a given limit.    To prove theorems about the convergence of sequences.   We will only do a few examples of type 1 work, and a lot more of type 2 work.  You should spend enough time thinking about this definition, and examining the way it is used in this chapter, to really get a feel for what it is saying and how it works.  It is worth considering the compact form of the definition expressed in logical symbols, i.e. .  Recalling the formal definition   Think of ways to turn this into more colloquial English, while still retaining the mathematical precision needed. One version is given in the answer below.      For every given measure of closeness, , to the limit, , a point, , can be found so that the ALL the sequence elements after this point ( ) are within a distance of , i.e. .      The definition and the roles of the parameters in the definition can make more sense when one pictures a graphical plot of the sequence elements decorated with the definition parameters, as in .   Illustrating the roles of , and in the formal definition of sequence convergence       Think about the effect of varying the value of in . Decreasing will narrow the band around the limit, while increasing will widen the band around the limit. As the band narrows we will probably have to choose larger and larger values of to satisfy the convergence definition.  Let's return to the previous example to see the formal definition working.  A convergent sequence    .   As this is our first example working with the formal definition we shall provide a lot of discussion and explanation in this solution.  In the notation given in the formal definition, , we have and here. Since we have to demonstrate that, given any  , there exits a value , we should work with a general , not any specific value. It is customary to do this by starting our argument with the following phrase.  Let be given.  The that we have to find is such that, if , then . So let us examine this inequality in more detail.   So let us choose to be any natural number satisfying . That such a number exists is due to the Archimedean property of the natural and real numbers, i.e. that there is no largest natural or real number.  Having chosen such a value for we note that it now satisfies the property .  This shows that the formal definition of convergence is satisfied, and so we have proved that as , as claimed.     "
},
{
  "id": "def-convergence-informal",
  "level": "2",
  "url": "sec-seqs-convergence.html#def-convergence-informal",
  "type": "Definition",
  "number": "2.3.1",
  "title": "Convergence (informal).",
  "body": " Convergence (informal)   Let . A sequence converges to the limit if and only if as increases, the elements of the sequence get closer and closer to , or equivalently, the distance gets closer and closer to .  Other notation and language used to say that the sequence  converges to the limit is to say that tends to as tends to , or in symbolic form , or , where the latter expression is read as \"the limit, as tends to , is \" .  If a sequence is not convergent then we say that it is divergent .  "
},
{
  "id": "sec-seqs-convergence-5",
  "level": "2",
  "url": "sec-seqs-convergence.html#sec-seqs-convergence-5",
  "type": "Example",
  "number": "2.3.2",
  "title": "A convergent sequence.",
  "body": "A convergent sequence   It is not too hard to appreciate the convergence of some simple sequences, for instance . The numbers are getting smaller and smaller and moreover they are getting arbitrarily small , i.e. given any small number , eventually the fractions will get smaller than .   "
},
{
  "id": "def-convergence-formal",
  "level": "2",
  "url": "sec-seqs-convergence.html#def-convergence-formal",
  "type": "Definition",
  "number": "2.3.3",
  "title": "Convergence (formal).",
  "body": " Convergence (formal)   The sequence converges to the limit if and only if given any there exists a postive integer such that for all the inequality holds.   "
},
{
  "id": "sec-seqs-convergence-11",
  "level": "2",
  "url": "sec-seqs-convergence.html#sec-seqs-convergence-11",
  "type": "Checkpoint",
  "number": "2.3.4",
  "title": "Recalling the formal definition.",
  "body": "Recalling the formal definition   Think of ways to turn this into more colloquial English, while still retaining the mathematical precision needed. One version is given in the answer below.      For every given measure of closeness, , to the limit, , a point, , can be found so that the ALL the sequence elements after this point ( ) are within a distance of , i.e. .     "
},
{
  "id": "fig-epsilonN",
  "level": "2",
  "url": "sec-seqs-convergence.html#fig-epsilonN",
  "type": "Figure",
  "number": "2.3.5",
  "title": "",
  "body": " Illustrating the roles of , and in the formal definition of sequence convergence      "
},
{
  "id": "sec-seqs-convergence-16",
  "level": "2",
  "url": "sec-seqs-convergence.html#sec-seqs-convergence-16",
  "type": "Example",
  "number": "2.3.6",
  "title": "A convergent sequence.",
  "body": "A convergent sequence    .   As this is our first example working with the formal definition we shall provide a lot of discussion and explanation in this solution.  In the notation given in the formal definition, , we have and here. Since we have to demonstrate that, given any  , there exits a value , we should work with a general , not any specific value. It is customary to do this by starting our argument with the following phrase.  Let be given.  The that we have to find is such that, if , then . So let us examine this inequality in more detail.   So let us choose to be any natural number satisfying . That such a number exists is due to the Archimedean property of the natural and real numbers, i.e. that there is no largest natural or real number.  Having chosen such a value for we note that it now satisfies the property .  This shows that the formal definition of convergence is satisfied, and so we have proved that as , as claimed.    "
},
{
  "id": "sec-seqs-convergence-properties",
  "level": "1",
  "url": "sec-seqs-convergence-properties.html",
  "type": "Section",
  "number": "2.4",
  "title": "Convergence properties",
  "body": " Convergence properties  In this section we shall establish and discuss several properties of sequence convergence, i.e. common or general ways that convergent sequences behave, and how they interact with the operations of addition and multiplication that we can apply to sequences. Many of the ideas behind these properties will re-occur later in the context of the convergence of series, function values and properties of differentiation and integration.  The first result, , about the uniqueness of limits may seem obvious at first. But what if two different numbers were extremely close together on the number line - could a single sequence be getting closer and closer to both of them? The proof shows that this can not happen. It's a good first example of how the formal definition can be used to prove things about convergence itself.   Proof by contradiction  The proof is also a good demonstration of the logical principle of proof by contradiction . For the technique of proof-by-contradiction we make the assumption that the result we are trying to prove is in fact false. From this assumption we then derive a clear contradiction of something we already know to be true. The only way to resolve this then is to accept that the assumption we made is itself false, i.e that the result we are trying to prove is in fact true!    Uniqueness of limits   If a sequence converges then its limit is unique, i.e. if and as , then .    Suppose that a sequence converges to limits . We use the technique of proof by contradiction. If we assume that and are distinct, i.e. that , then we can let . Since there exists an such that for every we have . Similarly, since there exists an such that for every we have .  We wish to make use of both of these inequalities simultaneously. So we set . Now for every we can say .  This chain of relations has established that for all  But this last statement is a clear contradiction as a real number cannot be strictly less than itself.  So we conclude that the assumption that led to this conclusion must itself be false, i.e. that and are indeed the same. This proves the result. ◻    Triangle inequality  The uniqueness proof used the triangle inequality The absolute value, , of real numbers satisfies the following property: for all real numbers and we have . This can be shown by considering the four possibilities for the positivity\/negativity of x and y. Generalizations of the triangle inequality hold in many other geometric and algebraic settings (e.g. vector spaces). The name triangle inequality comes from the context of vector geometry where this property expresses the fact that a side length of a triangle is always less than (or equal to in the case of a triangle degenerated to a straight line) the sum of the lengths of the other two sides.   The next result, , says that every convergent sequence is bounded. Again this is something that seems quite plausible at first perhaps, but whose proof requires careful handling of the maximum principle.   Convergent implies bounded   Every convergent sequence is bounded.    Consider a convergent sequence . Suppose that as . We know there exists a positive integer such that for all we have , this implies that for all we have . This shows that the sequence is eventually bounded, i.e. after element . But this just leaves a finite number of terms at the beginning to consider. So let . Then we can say that for all we have , i.e. that the sequence is bounded.    "
},
{
  "id": "sec-seqs-convergence-properties-4",
  "level": "2",
  "url": "sec-seqs-convergence-properties.html#sec-seqs-convergence-properties-4",
  "type": "Note",
  "number": "2.4.1",
  "title": "Proof by contradiction.",
  "body": " Proof by contradiction  The proof is also a good demonstration of the logical principle of proof by contradiction . For the technique of proof-by-contradiction we make the assumption that the result we are trying to prove is in fact false. From this assumption we then derive a clear contradiction of something we already know to be true. The only way to resolve this then is to accept that the assumption we made is itself false, i.e that the result we are trying to prove is in fact true!  "
},
{
  "id": "thm-seq-unique-limit",
  "level": "2",
  "url": "sec-seqs-convergence-properties.html#thm-seq-unique-limit",
  "type": "Theorem",
  "number": "2.4.2",
  "title": "Uniqueness of limits.",
  "body": " Uniqueness of limits   If a sequence converges then its limit is unique, i.e. if and as , then .    Suppose that a sequence converges to limits . We use the technique of proof by contradiction. If we assume that and are distinct, i.e. that , then we can let . Since there exists an such that for every we have . Similarly, since there exists an such that for every we have .  We wish to make use of both of these inequalities simultaneously. So we set . Now for every we can say .  This chain of relations has established that for all  But this last statement is a clear contradiction as a real number cannot be strictly less than itself.  So we conclude that the assumption that led to this conclusion must itself be false, i.e. that and are indeed the same. This proves the result. ◻   "
},
{
  "id": "sec-seqs-convergence-properties-6",
  "level": "2",
  "url": "sec-seqs-convergence-properties.html#sec-seqs-convergence-properties-6",
  "type": "Note",
  "number": "2.4.3",
  "title": "Triangle inequality.",
  "body": "Triangle inequality  The uniqueness proof used the triangle inequality The absolute value, , of real numbers satisfies the following property: for all real numbers and we have . This can be shown by considering the four possibilities for the positivity\/negativity of x and y. Generalizations of the triangle inequality hold in many other geometric and algebraic settings (e.g. vector spaces). The name triangle inequality comes from the context of vector geometry where this property expresses the fact that a side length of a triangle is always less than (or equal to in the case of a triangle degenerated to a straight line) the sum of the lengths of the other two sides.  "
},
{
  "id": "thm-seq-convergent-bounded",
  "level": "2",
  "url": "sec-seqs-convergence-properties.html#thm-seq-convergent-bounded",
  "type": "Theorem",
  "number": "2.4.4",
  "title": "Convergent implies bounded.",
  "body": " Convergent implies bounded   Every convergent sequence is bounded.    Consider a convergent sequence . Suppose that as . We know there exists a positive integer such that for all we have , this implies that for all we have . This shows that the sequence is eventually bounded, i.e. after element . But this just leaves a finite number of terms at the beginning to consider. So let . Then we can say that for all we have , i.e. that the sequence is bounded.   "
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
