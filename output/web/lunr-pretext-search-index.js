var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-seqs-defs",
  "level": "1",
  "url": "sec-seqs-defs.html",
  "type": "Section",
  "number": "1.1",
  "title": "Initial definitions",
  "body": " Initial definitions   Sequence   A sequence is a list of elements, indexed by the positive integers.  In these notes we will almost exclusively be considering sequences of real numbers. But mathematicians could talk of sequences of any sort of mathematical object.  We can use a single letter, say, decorated with an index subscript, to denote the elements of a sequence, as in . This sequence could be denoted as a whole by the notation or just simply , if the indexing is understood.  Variations might be to use the non-negative integers for the indexing, so the first element of the sequence would be rather than . Or perhaps start the indexing at some other integer.    This definition will be sufficient for our purposes, but more formal versions are possible. Some authors would define a sequence of real numbers as a function , i.e. is the function from the index values to the corresponding sequence elements. So then the list\/sequence of elements would be . An advantage of this would be to integrate our definitions with the already existing concept of a mathematical function, and not have to rely on introducing a new concept of list .   Some example sequences  These examples and the other ones in this section show some basic sequences and different ways to use the notation for the sequence element and index.     The sequence of positive integers themselves, . We could denote this as , where the defining rule is simply, for  .    The Fibonacci sequence denoted , where the rule is , i.e. each element is the sum of the previous two elements. This type of definition for a sequence, where each element is defined in terms of previous elements, is called a recurrence relation.     The sequence of odd positive integers , denoted by , defined by the rule .    The sequence of prime numbers denoted by . Unfortunately there is no easy to state formula known for the prime. We can specify an algorithm to find it, and various asymptotic results exist that can approximate the value of it. It can be proved that there an infinite number of primes, so the indexing declaration is valid. See more on this in your Number Theory and Abstract Algebra module next year.       Arithmetic sequences   An arithmetic sequence is one with a constant common difference between successive elements. So we can write such a sequence as , or , where , i.e. is the initial element and the common difference.     Geometric sequences   An geometric sequence is one with a constant common ratio between successive elements. So we can write such a sequence as , or , where , i.e. is the initial element and the common ratio.    Arithmetic and geometric sequences     The sequence of odd positive integers, is arithmetic. It is given by where .    The sequence of powers of , which begins is geometric. It is given by with initial element and common ratio .    A negative example. The sequence of reciprocals of the squares, , where is neither arithmetic nor geometric.    Are there any sequences that are both arithmetic and geometric?    Compound interest awarded on investments, or charged on loans, provide examples of geometric sequences. Suppose a bank overs a savings account with an annualy compounded interest rate of per year on an initial deposit of . Then the value, , of the deposit at the beginning of the year is given by .      "
},
{
  "id": "def-seq",
  "level": "2",
  "url": "sec-seqs-defs.html#def-seq",
  "type": "Definition",
  "number": "1.1.1",
  "title": "Sequence.",
  "body": " Sequence   A sequence is a list of elements, indexed by the positive integers.  In these notes we will almost exclusively be considering sequences of real numbers. But mathematicians could talk of sequences of any sort of mathematical object.  We can use a single letter, say, decorated with an index subscript, to denote the elements of a sequence, as in . This sequence could be denoted as a whole by the notation or just simply , if the indexing is understood.  Variations might be to use the non-negative integers for the indexing, so the first element of the sequence would be rather than . Or perhaps start the indexing at some other integer.   "
},
{
  "id": "sec-seqs-defs-4",
  "level": "2",
  "url": "sec-seqs-defs.html#sec-seqs-defs-4",
  "type": "Example",
  "number": "1.1.2",
  "title": "Some example sequences.",
  "body": " Some example sequences  These examples and the other ones in this section show some basic sequences and different ways to use the notation for the sequence element and index.     The sequence of positive integers themselves, . We could denote this as , where the defining rule is simply, for  .    The Fibonacci sequence denoted , where the rule is , i.e. each element is the sum of the previous two elements. This type of definition for a sequence, where each element is defined in terms of previous elements, is called a recurrence relation.     The sequence of odd positive integers , denoted by , defined by the rule .    The sequence of prime numbers denoted by . Unfortunately there is no easy to state formula known for the prime. We can specify an algorithm to find it, and various asymptotic results exist that can approximate the value of it. It can be proved that there an infinite number of primes, so the indexing declaration is valid. See more on this in your Number Theory and Abstract Algebra module next year.     "
},
{
  "id": "def-arithmetic",
  "level": "2",
  "url": "sec-seqs-defs.html#def-arithmetic",
  "type": "Definition",
  "number": "1.1.3",
  "title": "Arithmetic sequences.",
  "body": " Arithmetic sequences   An arithmetic sequence is one with a constant common difference between successive elements. So we can write such a sequence as , or , where , i.e. is the initial element and the common difference.   "
},
{
  "id": "def-geometric",
  "level": "2",
  "url": "sec-seqs-defs.html#def-geometric",
  "type": "Definition",
  "number": "1.1.4",
  "title": "Geometric sequences.",
  "body": " Geometric sequences   An geometric sequence is one with a constant common ratio between successive elements. So we can write such a sequence as , or , where , i.e. is the initial element and the common ratio.   "
},
{
  "id": "sec-seqs-defs-7",
  "level": "2",
  "url": "sec-seqs-defs.html#sec-seqs-defs-7",
  "type": "Example",
  "number": "1.1.5",
  "title": "Arithmetic and geometric sequences.",
  "body": "Arithmetic and geometric sequences     The sequence of odd positive integers, is arithmetic. It is given by where .    The sequence of powers of , which begins is geometric. It is given by with initial element and common ratio .    A negative example. The sequence of reciprocals of the squares, , where is neither arithmetic nor geometric.    Are there any sequences that are both arithmetic and geometric?    Compound interest awarded on investments, or charged on loans, provide examples of geometric sequences. Suppose a bank overs a savings account with an annualy compounded interest rate of per year on an initial deposit of . Then the value, , of the deposit at the beginning of the year is given by .     "
},
{
  "id": "sec-seqs-mono",
  "level": "1",
  "url": "sec-seqs-mono.html",
  "type": "Section",
  "number": "1.2",
  "title": "Monotonic and bounded sequences",
  "body": " Monotonic and bounded sequences  Before considering the convergence of infinite sequences, we consider the possible increasing, decreasing and bounded behaviour of sequences.    An increasing sequence is one whose elements satisfy .  A decreasing sequence is one whose elements satisfy .  If the inequalities are strict inequalities then we would say the sequence is strictly increasing, or strictly decreasing, as appropriate. Or the inequalities might only hold true from some element onwards, in which case we would say the sequence is increasing\/decreasing from , as appropriate.  The term monotonic , refers to a sequence that is either increasing or decreasing. Similarly for strictly monotonic .    If one has a nice formula for a sequence then the quickest way to see of the sequence is monotonic might be to plot some elements of the sequence using a computer. There are many ways to do this. Here is a quick example of how to do this using Python and the Matplotlib library.   Here is an alternative way, and somewhat quicker, using the Sage language.   Investigating the first few elements of a sequence like this may provide evidence that a sequence is monotonic. However a more rigorous approach, that addresses all elements of the sequence, is needed if we want to formally prove that the sequence is monotonic. There are, at least, two approaches we can take to this. Suppose we are given a sequence and we wish to investigate its monotonic nature. By considering the difference or ratio of consecutive terms, and comparing this to or , we can draw conclusions about the monotonic nature of the sequence.   Consider the general difference, , between consecutive terms, and then compare this to , noting that and Of course, strictly increasing\/decreasing versions of these results hold if the inequalities are strict.    Provided the sequence elements are positive and never zero, consider the general ratio, , between consecutive terms, and then compare this to , noting that and Of course, strictly increasing\/decreasing versions of these results hold if the inequalities are strict.   Which approach to use might be based on personal preference or the particular form of the formula defining the sequence element.  An increasing, then decreasing sequence   Investigate the sequence defined by , and describe its increasing\/decreasing behaviour.    Consider the ratio of consecutive elements. . The quantity can be compared to . It is greater than for and less than for . So the sequence increases at first, but then decreases for all .     In the next section we will be developing the theory of convergence of infinite sequences, that phenomenon whereby the elements of an infinite sequence might get closer and closer to some limiting value, the further out alond the sequence once goes. Before introducing this concept, we define the bounded property of infinite sequences.  Bounded sequence   A sequence is bounded if and only if there exits a number such that for all the sequence elements satisfy . There are also weaker properties of being bounded above , i.e. , or bounded below , i.e. . The number is called the (upper\/lower) bound, as appropriate.    "
},
{
  "id": "def-monotonic",
  "level": "2",
  "url": "sec-seqs-mono.html#def-monotonic",
  "type": "Definition",
  "number": "1.2.1",
  "title": "",
  "body": "  An increasing sequence is one whose elements satisfy .  A decreasing sequence is one whose elements satisfy .  If the inequalities are strict inequalities then we would say the sequence is strictly increasing, or strictly decreasing, as appropriate. Or the inequalities might only hold true from some element onwards, in which case we would say the sequence is increasing\/decreasing from , as appropriate.  The term monotonic , refers to a sequence that is either increasing or decreasing. Similarly for strictly monotonic .   "
},
{
  "id": "sec-seqs-mono-9",
  "level": "2",
  "url": "sec-seqs-mono.html#sec-seqs-mono-9",
  "type": "Example",
  "number": "1.2.2",
  "title": "An increasing, then decreasing sequence.",
  "body": "An increasing, then decreasing sequence   Investigate the sequence defined by , and describe its increasing\/decreasing behaviour.    Consider the ratio of consecutive elements. . The quantity can be compared to . It is greater than for and less than for . So the sequence increases at first, but then decreases for all .    "
},
{
  "id": "def-bounded",
  "level": "2",
  "url": "sec-seqs-mono.html#def-bounded",
  "type": "Definition",
  "number": "1.2.3",
  "title": "Bounded sequence.",
  "body": "Bounded sequence   A sequence is bounded if and only if there exits a number such that for all the sequence elements satisfy . There are also weaker properties of being bounded above , i.e. , or bounded below , i.e. . The number is called the (upper\/lower) bound, as appropriate.   "
},
{
  "id": "sec-seqs-convergence",
  "level": "1",
  "url": "sec-seqs-convergence.html",
  "type": "Section",
  "number": "1.3",
  "title": "Convergence",
  "body": " Convergence  Introductory and motivational remarks.   Convergence (informal)   Let . A sequence converges to the limit if and only if as increases, the elements of the sequence get closer and closer to , or equivalently, the distance gets closer and closer to .  Other notation and language used to say that the sequence  converges to the limit is to say that tends to as tends to , or in symbolic form , or , where the latter expression is read as \"the limit, as tends to , is \" .  If a sequence is not convergent then we say that it is divergent .   Some sequences are divergent because their terms keep increasing in absolute value without any upper bound, in which case we can write or . The first of these says that the term $y_n$ increase in positive value without any upper bound, and the second says that the terms $y_n$ get large and negative without any lower bound. However although this notation and phrasing is used quite commonly we should be careful. Such sequences are still divergent, and we should certainly not treat (whatever it is really) as a number like any other.  A convergent sequence   It is not too hard to appreciate the convergence of some simple sequences, for instance . The numbers are getting smaller and smaller and moreover they are getting arbitrarily small , i.e. given any small number , eventually the fractions will get smaller than .    While the definition given in allows us to understand the idea of convergence, a more rigorous formal definition is needed to prove results about the concept of convergence.   Convergence (formal)   The sequence converges to the limit if and only if given any there exists a postive integer such that for all the inequality holds.    This definition is important, and forms the basis of much of the following material on the theory of sequences. We shall be using the definition in two main ways.   To prove that certain given sequences either do or do not converge to a given limit.    To prove theorems about the convergence of sequences.   We will only do a few examples of type 1 work, and a lot more of type 2 work.  You should spend enough time thinking about this definition, and examining the way it is used in this chapter, to really get a feel for what it is saying and how it works.  It is worth considering the compact form of the definition expressed in logical symbols, i.e. .  Recalling the formal definition   Think of ways to turn this into more colloquial English, while still retaining the mathematical precision needed. One version is given in the answer below.      For every given measure of closeness, , to the limit, , a point, , can be found so that the ALL the sequence elements after this point ( ) are within a distance of , i.e. .      The definition and the roles of the parameters in the definition can make more sense when one pictures a graphical plot of the sequence elements decorated with the definition parameters, as in .   Illustrating the roles of , and in the formal definition of sequence convergence       Think about the effect of varying the value of in . Decreasing will narrow the band around the limit, while increasing will widen the band around the limit. As the band narrows we will probably have to choose larger and larger values of to satisfy the convergence definition.  Let's return to the previous example to see the formal definition working.  A convergent sequence    .   As this is our first example working with the formal definition we shall provide a lot of discussion and explanation in this solution.  In the notation given in the formal definition, , we have and here. Since we have to demonstrate that, given any  , there exits a value , we should work with a general , not any specific value. It is customary to do this by starting our argument with the following phrase.  Let be given.  The that we have to find is such that, if , then . So let us examine this inequality in more detail.   So let us choose to be any natural number satisfying . That such a number exists is due to the Archimedean property of the natural and real numbers, i.e. that there is no largest natural or real number.  Having chosen such a value for we note that it now satisfies the property .  This shows that the formal definition of convergence is satisfied, and so we have proved that as , as claimed.     "
},
{
  "id": "def-convergence-informal",
  "level": "2",
  "url": "sec-seqs-convergence.html#def-convergence-informal",
  "type": "Definition",
  "number": "1.3.1",
  "title": "Convergence (informal).",
  "body": " Convergence (informal)   Let . A sequence converges to the limit if and only if as increases, the elements of the sequence get closer and closer to , or equivalently, the distance gets closer and closer to .  Other notation and language used to say that the sequence  converges to the limit is to say that tends to as tends to , or in symbolic form , or , where the latter expression is read as \"the limit, as tends to , is \" .  If a sequence is not convergent then we say that it is divergent .  "
},
{
  "id": "sec-seqs-convergence-5",
  "level": "2",
  "url": "sec-seqs-convergence.html#sec-seqs-convergence-5",
  "type": "Example",
  "number": "1.3.2",
  "title": "A convergent sequence.",
  "body": "A convergent sequence   It is not too hard to appreciate the convergence of some simple sequences, for instance . The numbers are getting smaller and smaller and moreover they are getting arbitrarily small , i.e. given any small number , eventually the fractions will get smaller than .   "
},
{
  "id": "def-convergence-formal",
  "level": "2",
  "url": "sec-seqs-convergence.html#def-convergence-formal",
  "type": "Definition",
  "number": "1.3.3",
  "title": "Convergence (formal).",
  "body": " Convergence (formal)   The sequence converges to the limit if and only if given any there exists a postive integer such that for all the inequality holds.   "
},
{
  "id": "sec-seqs-convergence-11",
  "level": "2",
  "url": "sec-seqs-convergence.html#sec-seqs-convergence-11",
  "type": "Checkpoint",
  "number": "1.3.4",
  "title": "Recalling the formal definition.",
  "body": "Recalling the formal definition   Think of ways to turn this into more colloquial English, while still retaining the mathematical precision needed. One version is given in the answer below.      For every given measure of closeness, , to the limit, , a point, , can be found so that the ALL the sequence elements after this point ( ) are within a distance of , i.e. .     "
},
{
  "id": "fig-epsilonN",
  "level": "2",
  "url": "sec-seqs-convergence.html#fig-epsilonN",
  "type": "Figure",
  "number": "1.3.5",
  "title": "",
  "body": " Illustrating the roles of , and in the formal definition of sequence convergence      "
},
{
  "id": "sec-seqs-convergence-16",
  "level": "2",
  "url": "sec-seqs-convergence.html#sec-seqs-convergence-16",
  "type": "Example",
  "number": "1.3.6",
  "title": "A convergent sequence.",
  "body": "A convergent sequence    .   As this is our first example working with the formal definition we shall provide a lot of discussion and explanation in this solution.  In the notation given in the formal definition, , we have and here. Since we have to demonstrate that, given any  , there exits a value , we should work with a general , not any specific value. It is customary to do this by starting our argument with the following phrase.  Let be given.  The that we have to find is such that, if , then . So let us examine this inequality in more detail.   So let us choose to be any natural number satisfying . That such a number exists is due to the Archimedean property of the natural and real numbers, i.e. that there is no largest natural or real number.  Having chosen such a value for we note that it now satisfies the property .  This shows that the formal definition of convergence is satisfied, and so we have proved that as , as claimed.    "
},
{
  "id": "sec-seqs-convergence-properties",
  "level": "1",
  "url": "sec-seqs-convergence-properties.html",
  "type": "Section",
  "number": "1.4",
  "title": "Convergence properties",
  "body": " Convergence properties  In this section we shall establish and discuss several properties of sequence convergence, i.e. common or general ways that convergent sequences behave, and how they interact with the operations of addition and multiplication that we can apply to sequences. Many of the ideas behind these properties will re-occur later in the context of the convergence of series, function values and properties of differentiation and integration.  The first result, , about the uniqueness of limits may seem obvious at first. But what if two different numbers were extremely close together on the number line - could a single sequence be getting closer and closer to both of them? The proof shows that this can not happen. It's a good first example of how the formal definition can be used to prove things about convergence itself.   Proof by contradiction  The proof is also a good demonstration of the logical principle of proof by contradiction . For the technique of proof-by-contradiction we make the assumption that the result we are trying to prove is in fact false. From this assumption we then derive a clear contradiction of something we already know to be true. The only way to resolve this then is to accept that the assumption we made is itself false, i.e that the result we are trying to prove is in fact true!    Uniqueness of limits   If a sequence converges then its limit is unique, i.e. if and as , then .    Suppose that a sequence converges to limits . We use the technique of proof by contradiction. If we assume that and are distinct, i.e. that , then we can let . Since there exists an such that for every we have . Similarly, since there exists an such that for every we have .  We wish to make use of both of these inequalities simultaneously. So we set . Now for every we can say .  This chain of relations has established that for all  But this last statement is a clear contradiction as a real number cannot be strictly less than itself.  So we conclude that the assumption that led to this conclusion must itself be false, i.e. that and are indeed the same. This proves the result. ◻    Triangle inequality  The uniqueness proof used the triangle inequality The absolute value, , of real numbers satisfies the following property: for all real numbers and we have . This can be shown by considering the four possibilities for the positivity\/negativity of x and y. Generalizations of the triangle inequality hold in many other geometric and algebraic settings (e.g. vector spaces). The name triangle inequality comes from the context of vector geometry where this property expresses the fact that a side length of a triangle is always less than (or equal to in the case of a triangle degenerated to a straight line) the sum of the lengths of the other two sides.   The next result, , says that every convergent sequence is bounded. Again this is something that seems quite plausible at first perhaps, but whose proof requires careful handling of the maximum principle.   Convergent implies bounded   Every convergent sequence is bounded.    Consider a convergent sequence . Suppose that as . We know there exists a positive integer such that for all we have , this implies that for all we have . This shows that the sequence is eventually bounded, i.e. after element . But this just leaves a finite number of terms at the beginning to consider. So let . Then we can say that for all we have , i.e. that the sequence is bounded.     Maximums (or minimums) of infinite sets  Could we not have proved this theorem in one line? By setting the bound to be the maximum absolute value of the sequence elements? Well actually it is not that simple. The maximum (or minimum) of a finite set of numbers is unproblematic - it is simply the largest (or smallest) of the numbers in the set. However care must be taken when considering the maximum (or minimum) of an infinite set, as the max or min may not exist. Consider the sequence where . This sequence has no maximum value!    Why  There is nothing special about the use of in this proof that a convergent sequence is bounded. We could have used any strictly positive value. All that was needed was to separate the sequence elements into two sets, a finite set of sequence elements at the beginning of the sequence (that we can then take the maximum absolute value of), and then the infinite tail of the sequence that is bounded within the interval of radius around the limit .   Knowing that a sequence is bounded and either increasing or decreasing is enough to guarantee that it converges.   Monotone Convergence Theorem   Every bounded monotonic sequence is convergent.    We shall not discuss the proof of this is in detail in this course. It essentially follows from the least-upper bound principle of the real numbers.    The next theorem describes how convergence interacts with the arithmetic operations of addition and multiplication that we can extend to sequences.  Algebra of limits theorem   Let and be two convergent sequences with , where and . New sequences can be formed from the elements and using addition and multiplication. The following new sequences are all convergent and have the expected limits:     Linear Combinations:  where are any pair of non-zero coefficients,     Products:       Quotients: (assuming that and for all , )       First we prove the linear combinations part.  Assume that we have convergent sequences and with and . Let . Let be given. Since both sequences are convergent we can say that there exists and such that for all we have , and that for all we have . We wish to make use of both inequalities simultaneously so we let . Then for all we have     From the above relations we can extract the required criterion for convergence, namely for all we have . This proves the linearity part of the theorem.  Next we prove the products part.  Suppose that and as before and that is given.  By convergence there exist positive integers and such that for all we have and for all we have . We wish to use both ineqaualties so we let and now for all we have From the above relations we can extract the required criterion for convergence, namely for all we have . This proves the product part of the theorem.  Next we prove the quotients part. We will simplify matters by first proving a special case that if (with ) then . Then the general quotient case can be derived from this special case and the product case, since we can re-express as .  The relevant absolute value to examine is To ensure that this absolute value is less than we will have to arrange a lower bound for the denominator and a suitable upper bound for the numerator. By convergence there exists a positive integer such that for all we have , which implies that . Also by convergence, there exists a positive integer such that for all we have . So letting then for all we have which gives us the required inequality to conclude that as claimed. Together with the remarks above this proves the quotients part of the theorem.     The proof of the algebra of limits theorem exploits the formal definition of convergence in various ways depending on the context. In each case, what guides the particular choice of value for the known convergence of or is the desire to achieve the appropriate inequality in the end of the form . Study the three cases carefully and work to an understanding of why the various values of were chosen.   The algebra of limits theorem can allow us to find the limits of sequences that are formed from sequences with known convergence properties. By referring to the theorem we can provide rigorous arguments to justify the limit of the sequence in question, based on limits of simpler sequences.   Applying the algebra of limits theorem   Consider the sequence where By applying the various parts of the algebra of limits theorem we can see how to find the limit of this convergent sequence.     .    "
},
{
  "id": "sec-seqs-convergence-properties-4",
  "level": "2",
  "url": "sec-seqs-convergence-properties.html#sec-seqs-convergence-properties-4",
  "type": "Note",
  "number": "1.4.1",
  "title": "Proof by contradiction.",
  "body": " Proof by contradiction  The proof is also a good demonstration of the logical principle of proof by contradiction . For the technique of proof-by-contradiction we make the assumption that the result we are trying to prove is in fact false. From this assumption we then derive a clear contradiction of something we already know to be true. The only way to resolve this then is to accept that the assumption we made is itself false, i.e that the result we are trying to prove is in fact true!  "
},
{
  "id": "thm-seq-unique-limit",
  "level": "2",
  "url": "sec-seqs-convergence-properties.html#thm-seq-unique-limit",
  "type": "Theorem",
  "number": "1.4.2",
  "title": "Uniqueness of limits.",
  "body": " Uniqueness of limits   If a sequence converges then its limit is unique, i.e. if and as , then .    Suppose that a sequence converges to limits . We use the technique of proof by contradiction. If we assume that and are distinct, i.e. that , then we can let . Since there exists an such that for every we have . Similarly, since there exists an such that for every we have .  We wish to make use of both of these inequalities simultaneously. So we set . Now for every we can say .  This chain of relations has established that for all  But this last statement is a clear contradiction as a real number cannot be strictly less than itself.  So we conclude that the assumption that led to this conclusion must itself be false, i.e. that and are indeed the same. This proves the result. ◻   "
},
{
  "id": "sec-seqs-convergence-properties-6",
  "level": "2",
  "url": "sec-seqs-convergence-properties.html#sec-seqs-convergence-properties-6",
  "type": "Note",
  "number": "1.4.3",
  "title": "Triangle inequality.",
  "body": "Triangle inequality  The uniqueness proof used the triangle inequality The absolute value, , of real numbers satisfies the following property: for all real numbers and we have . This can be shown by considering the four possibilities for the positivity\/negativity of x and y. Generalizations of the triangle inequality hold in many other geometric and algebraic settings (e.g. vector spaces). The name triangle inequality comes from the context of vector geometry where this property expresses the fact that a side length of a triangle is always less than (or equal to in the case of a triangle degenerated to a straight line) the sum of the lengths of the other two sides.  "
},
{
  "id": "thm-seq-convergent-bounded",
  "level": "2",
  "url": "sec-seqs-convergence-properties.html#thm-seq-convergent-bounded",
  "type": "Theorem",
  "number": "1.4.4",
  "title": "Convergent implies bounded.",
  "body": " Convergent implies bounded   Every convergent sequence is bounded.    Consider a convergent sequence . Suppose that as . We know there exists a positive integer such that for all we have , this implies that for all we have . This shows that the sequence is eventually bounded, i.e. after element . But this just leaves a finite number of terms at the beginning to consider. So let . Then we can say that for all we have , i.e. that the sequence is bounded.   "
},
{
  "id": "sec-seqs-convergence-properties-9",
  "level": "2",
  "url": "sec-seqs-convergence-properties.html#sec-seqs-convergence-properties-9",
  "type": "Note",
  "number": "1.4.5",
  "title": "Maximums (or minimums) of infinite sets.",
  "body": " Maximums (or minimums) of infinite sets  Could we not have proved this theorem in one line? By setting the bound to be the maximum absolute value of the sequence elements? Well actually it is not that simple. The maximum (or minimum) of a finite set of numbers is unproblematic - it is simply the largest (or smallest) of the numbers in the set. However care must be taken when considering the maximum (or minimum) of an infinite set, as the max or min may not exist. Consider the sequence where . This sequence has no maximum value!  "
},
{
  "id": "sec-seqs-convergence-properties-10",
  "level": "2",
  "url": "sec-seqs-convergence-properties.html#sec-seqs-convergence-properties-10",
  "type": "Note",
  "number": "1.4.6",
  "title": "Why <span class=\"process-math\">\\(\\epsilon =1?\\)<\/span>",
  "body": " Why  There is nothing special about the use of in this proof that a convergent sequence is bounded. We could have used any strictly positive value. All that was needed was to separate the sequence elements into two sets, a finite set of sequence elements at the beginning of the sequence (that we can then take the maximum absolute value of), and then the infinite tail of the sequence that is bounded within the interval of radius around the limit .  "
},
{
  "id": "thm-seq-monotone-convergence",
  "level": "2",
  "url": "sec-seqs-convergence-properties.html#thm-seq-monotone-convergence",
  "type": "Theorem",
  "number": "1.4.7",
  "title": "Monotone Convergence Theorem.",
  "body": " Monotone Convergence Theorem   Every bounded monotonic sequence is convergent.    We shall not discuss the proof of this is in detail in this course. It essentially follows from the least-upper bound principle of the real numbers.   "
},
{
  "id": "thm-seq-algebra",
  "level": "2",
  "url": "sec-seqs-convergence-properties.html#thm-seq-algebra",
  "type": "Theorem",
  "number": "1.4.8",
  "title": "Algebra of limits theorem.",
  "body": "Algebra of limits theorem   Let and be two convergent sequences with , where and . New sequences can be formed from the elements and using addition and multiplication. The following new sequences are all convergent and have the expected limits:     Linear Combinations:  where are any pair of non-zero coefficients,     Products:       Quotients: (assuming that and for all , )       First we prove the linear combinations part.  Assume that we have convergent sequences and with and . Let . Let be given. Since both sequences are convergent we can say that there exists and such that for all we have , and that for all we have . We wish to make use of both inequalities simultaneously so we let . Then for all we have     From the above relations we can extract the required criterion for convergence, namely for all we have . This proves the linearity part of the theorem.  Next we prove the products part.  Suppose that and as before and that is given.  By convergence there exist positive integers and such that for all we have and for all we have . We wish to use both ineqaualties so we let and now for all we have From the above relations we can extract the required criterion for convergence, namely for all we have . This proves the product part of the theorem.  Next we prove the quotients part. We will simplify matters by first proving a special case that if (with ) then . Then the general quotient case can be derived from this special case and the product case, since we can re-express as .  The relevant absolute value to examine is To ensure that this absolute value is less than we will have to arrange a lower bound for the denominator and a suitable upper bound for the numerator. By convergence there exists a positive integer such that for all we have , which implies that . Also by convergence, there exists a positive integer such that for all we have . So letting then for all we have which gives us the required inequality to conclude that as claimed. Together with the remarks above this proves the quotients part of the theorem.   "
},
{
  "id": "sec-seqs-convergence-properties-15",
  "level": "2",
  "url": "sec-seqs-convergence-properties.html#sec-seqs-convergence-properties-15",
  "type": "Note",
  "number": "1.4.9",
  "title": "",
  "body": " The proof of the algebra of limits theorem exploits the formal definition of convergence in various ways depending on the context. In each case, what guides the particular choice of value for the known convergence of or is the desire to achieve the appropriate inequality in the end of the form . Study the three cases carefully and work to an understanding of why the various values of were chosen.  "
},
{
  "id": "sec-seqs-convergence-properties-17",
  "level": "2",
  "url": "sec-seqs-convergence-properties.html#sec-seqs-convergence-properties-17",
  "type": "Example",
  "number": "1.4.10",
  "title": "Applying the algebra of limits theorem.",
  "body": " Applying the algebra of limits theorem   Consider the sequence where By applying the various parts of the algebra of limits theorem we can see how to find the limit of this convergent sequence.     .   "
},
{
  "id": "sec-seqs-exercises",
  "level": "1",
  "url": "sec-seqs-exercises.html",
  "type": "Section",
  "number": "1.5",
  "title": "Sequence exercises",
  "body": " Sequence exercises    Write down the first five terms of the sequence where is given by                          For each of the sequences in question 1 above write down a simplified expression for the term .    Determine whether the sequence is increasing or decreasing, where is given by     ,     ,     ,     .      Consider the sequence determined by the following rules for . Which ones are convergent? Determine the limit if one exists. Hint: l’Hospital’s rule can be used for the first two.     ,     ,     ,     ,           Use the Monotone Convergence Theorem to prove that the sequence converges where     Prove that the sequence is divergent, where Hint: Show that the sequence is unbounded.    Consider the general arithmetic sequence where . Let denote the sum of the first elements of the sequence . Obtain a formula for in terms of . Hint: Consider the quantity as the sum of with itself in the reverse order .    Consider the general geometric sequence where . Let denote the sum of the first elements of the sequence . Obtain a formula for in terms of . Hint: Consider the quantity .    Using the algebra of sequences theorem find the limit of the following convergent sequences.     where      where .    Point out carefully the places where the theorem is being used.    Consider the function where When Newton’s method for root finding is applied to the sequence is produced where is defined by the recurrence relation Newton’s method claims that should converge to , the root of . Use the algebra of sequences theorem to prove that: if has a non-zero limit then that limit equals .    Investigate the long term behavior of the following sequences, i.e. are they increasing or decreasing, do they converge or diverge, are they bounded or unbounded?                          "
},
{
  "id": "sec-series-definitions",
  "level": "1",
  "url": "sec-series-definitions.html",
  "type": "Section",
  "number": "2.1",
  "title": "Basic definitions",
  "body": " Basic definitions  A series is the name given to the concept\/object where we take a sequence of terms and add them all together term by term.  Series   A series is the sum of the terms of a sequence.    We can represent series using addition and subtraction signs as in or using the sigma notation ( is the capital Greek letter sigma) as in A series can contain a finite number of terms as in or an infinite number of terms as in, If a series contains only a finite number of terms then the series will sum to a finite value (assuming, as we are here, that the terms of the series are all finite quantities). If a series has an infinite number of terms then the series may or may not sum to a finite value. The precise definition of summing to a finite value is given by the following. First we define what is meant by the partial sums of an infinite series  Partial sums   Consider an infinite series . The -partial sum, , of the series is the finite series     "
},
{
  "id": "def-series",
  "level": "2",
  "url": "sec-series-definitions.html#def-series",
  "type": "Definition",
  "number": "2.1.1",
  "title": "Series.",
  "body": "Series   A series is the sum of the terms of a sequence.   "
},
{
  "id": "def-partial-sums",
  "level": "2",
  "url": "sec-series-definitions.html#def-partial-sums",
  "type": "Definition",
  "number": "2.1.2",
  "title": "Partial sums.",
  "body": "Partial sums   Consider an infinite series . The -partial sum, , of the series is the finite series    "
},
{
  "id": "sec-series-convergence",
  "level": "1",
  "url": "sec-series-convergence.html",
  "type": "Section",
  "number": "2.2",
  "title": "Convergence",
  "body": " Convergence  Convergence for series   The series converges to the limit (or sum) if the sequence of its partial sums, , is a convergent sequence and If this is the case then we can simply write   A series is divergent if the sequence of its partial sums is a divergent sequence.    It is not hard to think of examples of divergent series.  A divergent series   Consider the series This series is clearly divergent as the partial sums are increasing without any upper bound, and so cannot form a convergent sequence (see theorem ).    However it is not so obvious that convergent series exist (beyond the trivial example of a series where the terms are all zero after some point).  A convergent series   Consider the series The convergence of this series can be appreciated when we interpret the terms as measuring the size of step taken along a line. We see that the partial sums of the series get closer and closer to 1, but never go beyond 1. Indeed the series does converge to 1. This can be proved using the partial sum formula for a geometric series and making use of the algebra of sequences theorem.    This example shows that it is possible to have an infinite number of terms and yet for them still to sum to a finite value. This happens because the terms are getting smaller and smaller, the terms themselves are converging to zero, when viewed as sequence. However this type of behaviour does not guarantee convergence for a series, as the next example shows.   The harmonic series   Consider the series The terms of this series are indeed converging to zero, but yet the series does not converge. It increases without any upper bound, albeit very slowly. This fact can be proved with the aid of a grouping argument.    For series that contain a mixture of positive and negative terms it is helpful to be able to refer to the convergence of the related series of absolute values.   Absolute convergence   A series is absolutely convergent if the series of absolute values, , is a convergent series. If the series is convergent but the series of absolute values, , is divergent, then the original series is said to be conditionally convergent.    The importance of conditional convergence is given by the following result which we shall quote without proof.    If a series is absolutely convergent then it is convergent. Moreover, the terms of an absolutely convergent series can be rearranged in any way and the resulting series will still converge to the same sum. However if a series is conditionally convergent then rearranging its terms can yield a series which sums to a different value.    Omitted.     Tails  For an infinite series we note that the convergence or divergence of the series is not altered if some finite collection of the terms of the series are changed.  For suppose that we change to and to . If the original series is convergent, say then changing these values will mean the new series converges to .  On the other hand if the series is divergent it is because the sequence of partial sums, , fails to converge. The partial sums, , of the new series, for , will satisfy , and so these too will still fail to converge.  Both of these arguments extend to any finite collection of terms. By a tail of the series we mean any series of the form , for some positive integer , i.e. the original series less some finite collection of initial terms. If we can prove that some tail of the series is convergent, then so will the original series be convergent. Similarly, if we can show that some tail of the series is divergent, then so will the original series be divergent. These ideas occur in some of the proofs of the series convergence tests later in the chapter.    Linear combinations of series   Suppose that we have two convergent series and such that Then for any pair we have a new series which is convergent and satisfies     This can be proved using the linearity property for convergence of sequences. We do not need to descend to arguments but just use the definition for series convergence in terms of the partial sums.  Letting and denote the partial sums, i.e. and we make the following deductions.      Why was the presentation reversed here? In that we started with the claimed limit and worked our way towards ?   "
},
{
  "id": "def-series-convergence",
  "level": "2",
  "url": "sec-series-convergence.html#def-series-convergence",
  "type": "Definition",
  "number": "2.2.1",
  "title": "Convergence for series.",
  "body": "Convergence for series   The series converges to the limit (or sum) if the sequence of its partial sums, , is a convergent sequence and If this is the case then we can simply write   A series is divergent if the sequence of its partial sums is a divergent sequence.   "
},
{
  "id": "sec-series-convergence-4",
  "level": "2",
  "url": "sec-series-convergence.html#sec-series-convergence-4",
  "type": "Example",
  "number": "2.2.2",
  "title": "A divergent series.",
  "body": "A divergent series   Consider the series This series is clearly divergent as the partial sums are increasing without any upper bound, and so cannot form a convergent sequence (see theorem ).   "
},
{
  "id": "sec-series-convergence-6",
  "level": "2",
  "url": "sec-series-convergence.html#sec-series-convergence-6",
  "type": "Example",
  "number": "2.2.3",
  "title": "A convergent series.",
  "body": "A convergent series   Consider the series The convergence of this series can be appreciated when we interpret the terms as measuring the size of step taken along a line. We see that the partial sums of the series get closer and closer to 1, but never go beyond 1. Indeed the series does converge to 1. This can be proved using the partial sum formula for a geometric series and making use of the algebra of sequences theorem.   "
},
{
  "id": "sec-series-convergence-8",
  "level": "2",
  "url": "sec-series-convergence.html#sec-series-convergence-8",
  "type": "Example",
  "number": "2.2.4",
  "title": "The harmonic series.",
  "body": " The harmonic series   Consider the series The terms of this series are indeed converging to zero, but yet the series does not converge. It increases without any upper bound, albeit very slowly. This fact can be proved with the aid of a grouping argument.   "
},
{
  "id": "def-series-absolute-convergence",
  "level": "2",
  "url": "sec-series-convergence.html#def-series-absolute-convergence",
  "type": "Definition",
  "number": "2.2.5",
  "title": "Absolute convergence.",
  "body": " Absolute convergence   A series is absolutely convergent if the series of absolute values, , is a convergent series. If the series is convergent but the series of absolute values, , is divergent, then the original series is said to be conditionally convergent.   "
},
{
  "id": "thm-series-absolute-convergence",
  "level": "2",
  "url": "sec-series-convergence.html#thm-series-absolute-convergence",
  "type": "Theorem",
  "number": "2.2.6",
  "title": "",
  "body": "  If a series is absolutely convergent then it is convergent. Moreover, the terms of an absolutely convergent series can be rearranged in any way and the resulting series will still converge to the same sum. However if a series is conditionally convergent then rearranging its terms can yield a series which sums to a different value.    Omitted.   "
},
{
  "id": "thm-series-lin-combs",
  "level": "2",
  "url": "sec-series-convergence.html#thm-series-lin-combs",
  "type": "Theorem",
  "number": "2.2.7",
  "title": "Linear combinations of series.",
  "body": " Linear combinations of series   Suppose that we have two convergent series and such that Then for any pair we have a new series which is convergent and satisfies     This can be proved using the linearity property for convergence of sequences. We do not need to descend to arguments but just use the definition for series convergence in terms of the partial sums.  Letting and denote the partial sums, i.e. and we make the following deductions.    "
},
{
  "id": "sec-series-convergence-15",
  "level": "2",
  "url": "sec-series-convergence.html#sec-series-convergence-15",
  "type": "Question",
  "number": "2.2.8",
  "title": "",
  "body": " Why was the presentation reversed here? In that we started with the claimed limit and worked our way towards ?  "
},
{
  "id": "sec-series-convergence-tests",
  "level": "1",
  "url": "sec-series-convergence-tests.html",
  "type": "Section",
  "number": "2.3",
  "title": "Convergence tests",
  "body": " Convergence tests  We will introduce various tests that can be used to assess the convergence \/ divergence of a series.  General Term Test   If a sequence has a non-zero limit (or no limit at all) then the associated series will diverge. Equivalently, by forming the contra-positive we can quote this test as: If a series converges then the associated sequence of terms converges to zero. Symbolically these two statements are               Suppose that converges and let denote the partial sum as before, i.e. as . Let be given. There exists a such that for all we have . This implies that for all we have , i.e. the sequence can be shown to be eventually arbitrarily close to zero. This is equivalent to the definition for as . So this proves the second form of the theorem.    Contrapositive  We note the use of the contrapositive in the statement of the General Term Test. The contrapositive of a statement is the statement . These two statements are logically equivalent , i.e. they both have the same truth value. If one is true then so is the other. If the result one is trying to prove take the form of an implication, then sometimes the contrapositive of the result may be easier to prove directly.   But note that a series can still diverge even if the sequence of terms converges to zero. For example the harmonic series , diverges even though as . The General Term Test gives no information about the behaviour of the harmonic series. The divergence of the harmonic series can be shown by using the integral test (see later) as well as the earlier term-grouping argument.  A geometric series is, as the name suggests, the sum of the terms of a geometric sequence. The convergence of a geometric series can be determined using the following test.  Geometric Series Test   The geometric series converges trivially if . If then it converges if and only if , in which case     The convergent case is clear. So we assume that . If then divergence is clear as the series is just . So assume and let denote the partial sum, i.e. . Most of the terms in the difference will cancel leaving the closed form equation Then by the definition of convergence foran infinite series and the algebra of limits theorem we have If or then diverges, and hence so does the series. If then as , in which case the sum of the series is , as required.     The integral test        Integral Test   Consider a series and suppose that there exists a continuous function which has positive decreasing values and that for all . If the improper integral exists and is finite, then the original series converges. If the improper integral above does not have a finite value then the original series diverges.    We sketch the main idea of the proof here based on the typical situation depicted in figure . To make the argument rigourous we should rephrase it in terms of the partial sums and partial integrals and use a careful limiting argument.  There we see the graph of decreasing function shown in black. The grey rectangles all have width 1 and the rectangle has height . Interpreting the integral and series in terms of area we see that is the area between the graph and the -axis from to and that the series is the total area of all the rectangles. Due to the decreasing nature of the function , each rectangle protrudes a bit above the graph of . If we let denote the sum of the areas of all these protrusions then we have Note that is a well defined finite quantity as the sum of the areas of the protrusions constitute an increasing sequence of partial sums that is bounded above (for they would all fit inside the first rectangle without overlaps) and hence by the Monotone Convergence Theorem this series is convergent.  So if the original series and integral differ by a finite quantity then each converges if and only if the other does.     Euler-Mascheroni constant  In the case where the function is the reciprocal function , the quantity is known as the Euler-Mascheroni constant, an important quantity in analysis and number theory where it occurs in many settings. It is still not known whether the Euler-Mscheroni constant is irrational or not, though most would bet that it is.   There now follow two types of comparison test which assess the convergence of a given series by comparing its terms to the terms of a known convergent or divergent series.   Standard Comparison Test   Suppose that is a series consisting of non-negative terms, i.e. for all , , and that is a known convergent series of non-negative terms and is a known divergent series of non-negative terms. Then   if for all , , then is convergent,    if for all , , then is divergent.       We sketch the main idea of the proofs. Let denote the sum of the convergent comparator series, i.e. . Then the partial sums of the series constitute an increasing sequence converging to . Suppose that for all we have . Since each partial sum is bounded above by (as is an upper-bound for the partial sum ), these partial sums consitute an increasing sequence which is bounded above. Therefore, by the Monotone Convergence theorem , the sequence of partial sums is convergent as , and converges to a limit which also satisfies .  The partial sums, , of a divergent series of positive terms will constitute an unbounded increasing sequence. Suppose that for all we have . Then the partial sums satisfy and hence the partial sums also form an increasing unbounded sequence, hence divergent.     Good and bad behaviour  A nice way to think about\/remember this result is in terms of the good and bad behaviour shown by a series. A convergent series of positive terms converges because the terms behave well (i.e. are small enough). If then the terms are behaving better and so also converges.  Similarly a divergent series diverges because its terms behave badly (i.e. they're too large), so if then the terms are behaving worse, and so also diverges.    Limit Comparison Test   Suppose that is a series consisting of non-negative terms, i.e. for all , , and that is a known convergent series of strictly positive terms (i.e. for all , ) and is a known divergent series of strictly positive terms. Then   if and then is convergent,    if and , then is divergent.       This limit comparison test can be proved with the aid of the standard comparison test applied to a suitable tail of the series. First we prove the convergent case. By the convergence of the ratio there exists a positive integer such that for all we have , hence and hence . Therefore the standard comparison test says that the tail series converges and hence so does the original series .  The divergent case is handled in a similar manner. By the convergence of the ratio there exists a positive integer such that for all we have , hence and hence . Therefore the standard comparison test says that the tail series diverges and hence so does the original series .     More good and bad behaviour  Again this result can be boiled down to good\/bad behaviour. If then eventually  acts like a scalar multiple of . So if behaves well (or badly), so does .   The choice for the comparison series is often a geometric series or a hyper-harmonic series for some . Using the integral test we can show that the hypermonic series converges when and diverges otherwise. The alternating hyper-harmonic series converges absolutely when , converges conditionally when and diverges otherwise.   The Alternating Series Test        Alternating Series Test   Consider the alternating series where the are all positive and decreasing, i.e. for all , . If then the original alternating series is convergent. But if then the alternating series is divergent.    We give a sketch of the main idea here. Consider a typical alternating series satisfying the conditions of the theorem. The partial sums, , of such a series are shown plotted in figure   The partial sums are split into two subsequences, those of odd index, , shown in grey, and those of even index, , shown in black.  Due to the alternating nature of the series and the decreasing absolute value of the step size , i.e. the difference between each partial sum and the next, the odd subsequence of partial sums constitutes an increasing sequence which is bounded above. Similarly the even subsequence constitutes a decreasing sequence which is bounded below. By the Monotone Convergence Theorem each subsequence is convergent, i.e. and as . But since the step size , , converges to zero, the difference between and must be arbitrarily small, i.e. zero and hence and the complete sequence of partial sums is convergent to this limit, i.e. the series is convergent.     Ratio Test   Consider the series of positive terms, i.e. for all , . Suppose that the sequence of the ratios of consectutive terms is convergent and that If then the series is convergent. If then the series is divergent. For the remaining case we can not draw a conclusion about the series’ convergence.    The proof of the ratio test involves a combination of a limiting argument, the application of the standard comparison test and the use of the geometric series test. It's a nice example of building upon previous results in order to establish new results.  Suppose satisfies the conditions of the theorem and that Choose a suitable , say . Then there exists a positive integer such that for all we have , i.e. . Hence, for all we have Repeatedly applying this inequality allows us to say that for all we have Note that the series is a convergent geometric series, since . So by the standard comparison test the series is also convergent. Therefore our original series has a convergent tail, and hence is convergent as required.  On the other hand is we suppose that then we follow a similar argument that this time compares a tail of our series to a divergent geometric series , for some (remember this time ). This implies that our series has a divergent tail and hence is itself divergent, as required.  In the remaining case where then trying the above ideas will only allow us to say that has worse behaviour than a known convergent series and better behaviour than a known divergent series. But neither of these allow us to draw a conclusion about the behaviour of .     Root Test   Consider the series of non-negative terms, i.e. for all , . Suppose that If then the original series is convergent, if then the series diverges. For the remaining case we can not draw a conclusion about the series' convergence.    We can prove this by comparing to a geometric series with common ratio . Hence the re-appearance of the and criteria. The details are left as an exercise.    "
},
{
  "id": "thm-general-term-test",
  "level": "2",
  "url": "sec-series-convergence-tests.html#thm-general-term-test",
  "type": "Theorem",
  "number": "2.3.1",
  "title": "General Term Test.",
  "body": "General Term Test   If a sequence has a non-zero limit (or no limit at all) then the associated series will diverge. Equivalently, by forming the contra-positive we can quote this test as: If a series converges then the associated sequence of terms converges to zero. Symbolically these two statements are               Suppose that converges and let denote the partial sum as before, i.e. as . Let be given. There exists a such that for all we have . This implies that for all we have , i.e. the sequence can be shown to be eventually arbitrarily close to zero. This is equivalent to the definition for as . So this proves the second form of the theorem.   "
},
{
  "id": "sec-series-convergence-tests-4",
  "level": "2",
  "url": "sec-series-convergence-tests.html#sec-series-convergence-tests-4",
  "type": "Remark",
  "number": "2.3.2",
  "title": "Contrapositive.",
  "body": "Contrapositive  We note the use of the contrapositive in the statement of the General Term Test. The contrapositive of a statement is the statement . These two statements are logically equivalent , i.e. they both have the same truth value. If one is true then so is the other. If the result one is trying to prove take the form of an implication, then sometimes the contrapositive of the result may be easier to prove directly.  "
},
{
  "id": "thm-geometric-series-test",
  "level": "2",
  "url": "sec-series-convergence-tests.html#thm-geometric-series-test",
  "type": "Theorem",
  "number": "2.3.3",
  "title": "Geometric Series Test.",
  "body": "Geometric Series Test   The geometric series converges trivially if . If then it converges if and only if , in which case     The convergent case is clear. So we assume that . If then divergence is clear as the series is just . So assume and let denote the partial sum, i.e. . Most of the terms in the difference will cancel leaving the closed form equation Then by the definition of convergence foran infinite series and the algebra of limits theorem we have If or then diverges, and hence so does the series. If then as , in which case the sum of the series is , as required.   "
},
{
  "id": "fig-integral-test",
  "level": "2",
  "url": "sec-series-convergence-tests.html#fig-integral-test",
  "type": "Figure",
  "number": "2.3.4",
  "title": "",
  "body": " The integral test      "
},
{
  "id": "thm-integral-test",
  "level": "2",
  "url": "sec-series-convergence-tests.html#thm-integral-test",
  "type": "Theorem",
  "number": "2.3.5",
  "title": "Integral Test.",
  "body": " Integral Test   Consider a series and suppose that there exists a continuous function which has positive decreasing values and that for all . If the improper integral exists and is finite, then the original series converges. If the improper integral above does not have a finite value then the original series diverges.    We sketch the main idea of the proof here based on the typical situation depicted in figure . To make the argument rigourous we should rephrase it in terms of the partial sums and partial integrals and use a careful limiting argument.  There we see the graph of decreasing function shown in black. The grey rectangles all have width 1 and the rectangle has height . Interpreting the integral and series in terms of area we see that is the area between the graph and the -axis from to and that the series is the total area of all the rectangles. Due to the decreasing nature of the function , each rectangle protrudes a bit above the graph of . If we let denote the sum of the areas of all these protrusions then we have Note that is a well defined finite quantity as the sum of the areas of the protrusions constitute an increasing sequence of partial sums that is bounded above (for they would all fit inside the first rectangle without overlaps) and hence by the Monotone Convergence Theorem this series is convergent.  So if the original series and integral differ by a finite quantity then each converges if and only if the other does.   "
},
{
  "id": "sec-series-convergence-tests-10",
  "level": "2",
  "url": "sec-series-convergence-tests.html#sec-series-convergence-tests-10",
  "type": "Remark",
  "number": "2.3.6",
  "title": "Euler-Mascheroni constant.",
  "body": " Euler-Mascheroni constant  In the case where the function is the reciprocal function , the quantity is known as the Euler-Mascheroni constant, an important quantity in analysis and number theory where it occurs in many settings. It is still not known whether the Euler-Mscheroni constant is irrational or not, though most would bet that it is.  "
},
{
  "id": "thm-comparison-standard",
  "level": "2",
  "url": "sec-series-convergence-tests.html#thm-comparison-standard",
  "type": "Theorem",
  "number": "2.3.7",
  "title": "Standard Comparison Test.",
  "body": " Standard Comparison Test   Suppose that is a series consisting of non-negative terms, i.e. for all , , and that is a known convergent series of non-negative terms and is a known divergent series of non-negative terms. Then   if for all , , then is convergent,    if for all , , then is divergent.       We sketch the main idea of the proofs. Let denote the sum of the convergent comparator series, i.e. . Then the partial sums of the series constitute an increasing sequence converging to . Suppose that for all we have . Since each partial sum is bounded above by (as is an upper-bound for the partial sum ), these partial sums consitute an increasing sequence which is bounded above. Therefore, by the Monotone Convergence theorem , the sequence of partial sums is convergent as , and converges to a limit which also satisfies .  The partial sums, , of a divergent series of positive terms will constitute an unbounded increasing sequence. Suppose that for all we have . Then the partial sums satisfy and hence the partial sums also form an increasing unbounded sequence, hence divergent.   "
},
{
  "id": "sec-series-convergence-tests-13",
  "level": "2",
  "url": "sec-series-convergence-tests.html#sec-series-convergence-tests-13",
  "type": "Remark",
  "number": "2.3.8",
  "title": "Good and bad behaviour.",
  "body": " Good and bad behaviour  A nice way to think about\/remember this result is in terms of the good and bad behaviour shown by a series. A convergent series of positive terms converges because the terms behave well (i.e. are small enough). If then the terms are behaving better and so also converges.  Similarly a divergent series diverges because its terms behave badly (i.e. they're too large), so if then the terms are behaving worse, and so also diverges.  "
},
{
  "id": "thm-comparison-limit",
  "level": "2",
  "url": "sec-series-convergence-tests.html#thm-comparison-limit",
  "type": "Theorem",
  "number": "2.3.9",
  "title": "Limit Comparison Test.",
  "body": " Limit Comparison Test   Suppose that is a series consisting of non-negative terms, i.e. for all , , and that is a known convergent series of strictly positive terms (i.e. for all , ) and is a known divergent series of strictly positive terms. Then   if and then is convergent,    if and , then is divergent.       This limit comparison test can be proved with the aid of the standard comparison test applied to a suitable tail of the series. First we prove the convergent case. By the convergence of the ratio there exists a positive integer such that for all we have , hence and hence . Therefore the standard comparison test says that the tail series converges and hence so does the original series .  The divergent case is handled in a similar manner. By the convergence of the ratio there exists a positive integer such that for all we have , hence and hence . Therefore the standard comparison test says that the tail series diverges and hence so does the original series .   "
},
{
  "id": "sec-series-convergence-tests-15",
  "level": "2",
  "url": "sec-series-convergence-tests.html#sec-series-convergence-tests-15",
  "type": "Remark",
  "number": "2.3.10",
  "title": "More good and bad behaviour.",
  "body": " More good and bad behaviour  Again this result can be boiled down to good\/bad behaviour. If then eventually  acts like a scalar multiple of . So if behaves well (or badly), so does .  "
},
{
  "id": "fig-alternating-series",
  "level": "2",
  "url": "sec-series-convergence-tests.html#fig-alternating-series",
  "type": "Figure",
  "number": "2.3.11",
  "title": "",
  "body": " The Alternating Series Test      "
},
{
  "id": "thm-alternating-series",
  "level": "2",
  "url": "sec-series-convergence-tests.html#thm-alternating-series",
  "type": "Theorem",
  "number": "2.3.12",
  "title": "Alternating Series Test.",
  "body": " Alternating Series Test   Consider the alternating series where the are all positive and decreasing, i.e. for all , . If then the original alternating series is convergent. But if then the alternating series is divergent.    We give a sketch of the main idea here. Consider a typical alternating series satisfying the conditions of the theorem. The partial sums, , of such a series are shown plotted in figure   The partial sums are split into two subsequences, those of odd index, , shown in grey, and those of even index, , shown in black.  Due to the alternating nature of the series and the decreasing absolute value of the step size , i.e. the difference between each partial sum and the next, the odd subsequence of partial sums constitutes an increasing sequence which is bounded above. Similarly the even subsequence constitutes a decreasing sequence which is bounded below. By the Monotone Convergence Theorem each subsequence is convergent, i.e. and as . But since the step size , , converges to zero, the difference between and must be arbitrarily small, i.e. zero and hence and the complete sequence of partial sums is convergent to this limit, i.e. the series is convergent.   "
},
{
  "id": "thm-ratio-test",
  "level": "2",
  "url": "sec-series-convergence-tests.html#thm-ratio-test",
  "type": "Theorem",
  "number": "2.3.13",
  "title": "Ratio Test.",
  "body": " Ratio Test   Consider the series of positive terms, i.e. for all , . Suppose that the sequence of the ratios of consectutive terms is convergent and that If then the series is convergent. If then the series is divergent. For the remaining case we can not draw a conclusion about the series’ convergence.    The proof of the ratio test involves a combination of a limiting argument, the application of the standard comparison test and the use of the geometric series test. It's a nice example of building upon previous results in order to establish new results.  Suppose satisfies the conditions of the theorem and that Choose a suitable , say . Then there exists a positive integer such that for all we have , i.e. . Hence, for all we have Repeatedly applying this inequality allows us to say that for all we have Note that the series is a convergent geometric series, since . So by the standard comparison test the series is also convergent. Therefore our original series has a convergent tail, and hence is convergent as required.  On the other hand is we suppose that then we follow a similar argument that this time compares a tail of our series to a divergent geometric series , for some (remember this time ). This implies that our series has a divergent tail and hence is itself divergent, as required.  In the remaining case where then trying the above ideas will only allow us to say that has worse behaviour than a known convergent series and better behaviour than a known divergent series. But neither of these allow us to draw a conclusion about the behaviour of .   "
},
{
  "id": "thm-root-test",
  "level": "2",
  "url": "sec-series-convergence-tests.html#thm-root-test",
  "type": "Theorem",
  "number": "2.3.14",
  "title": "Root Test.",
  "body": " Root Test   Consider the series of non-negative terms, i.e. for all , . Suppose that If then the original series is convergent, if then the series diverges. For the remaining case we can not draw a conclusion about the series' convergence.    We can prove this by comparing to a geometric series with common ratio . Hence the re-appearance of the and criteria. The details are left as an exercise.   "
},
{
  "id": "sec-series-power-series",
  "level": "1",
  "url": "sec-series-power-series.html",
  "type": "Section",
  "number": "2.4",
  "title": "Power Series",
  "body": " Power Series  Using series we can define a class of functions called power series . We shall look at some basic examples here and return to this topic later when we are discussing the differential calculus.   Power Series   A sequence of terms defines a power series function by the formula     Of course this formula for may only make sense for certain values of the argument . For some values of the series may converge but for some values it may diverge. We can investigate this matter using the ratio test.  According to the ratio test the series formula for will converge when which is equivalent, after simplifying, to    Radius of Convergence   The quantity defined by is known as the radius of convergence of the series . The series converges if and diverges if .    Note that the ratio test does not tell us about the convergence of the series when . That will have to be determined by other methods.  An important source of power series comes from applying Taylor's theorem.   Taylor's Theorem   Suppose that on an interval the function can be differentiated times, for some . Then there exists a number such that where is the Lagrange remainder and is given by    Proof omitted.     Taylor's theorem provides us with a way of generating power series approximations to function values. By writing for in the above equation we get an equivalent form referred to as the Taylor polynomial expansion of about the point : It is often the case that as and then we may represent the function using its Taylor series expansion about the point :   Two important things to note are that for all we have and that if then   The special case where we expand a function about the point gives rise to what is called a Maclaurin series .   Maclaurin series   The Taylor series expansion of a function about the point is called the Maclaurin series of ,     We shall return to the topic of Taylor series after we have studied differentiation in more detail.  In table you will see Maclaurin series of some standard functions.   Some standard Maclaurin series    Maclarin series  Interval of convergence                                                 "
},
{
  "id": "def-power-series",
  "level": "2",
  "url": "sec-series-power-series.html#def-power-series",
  "type": "Definition",
  "number": "2.4.1",
  "title": "Power Series.",
  "body": " Power Series   A sequence of terms defines a power series function by the formula    "
},
{
  "id": "def-radius-convergence",
  "level": "2",
  "url": "sec-series-power-series.html#def-radius-convergence",
  "type": "Definition",
  "number": "2.4.2",
  "title": "Radius of Convergence.",
  "body": " Radius of Convergence   The quantity defined by is known as the radius of convergence of the series . The series converges if and diverges if .   "
},
{
  "id": "thm-taylors-theorem",
  "level": "2",
  "url": "sec-series-power-series.html#thm-taylors-theorem",
  "type": "Theorem",
  "number": "2.4.3",
  "title": "Taylor’s Theorem.",
  "body": " Taylor's Theorem   Suppose that on an interval the function can be differentiated times, for some . Then there exists a number such that where is the Lagrange remainder and is given by    Proof omitted.    "
},
{
  "id": "def-maclaurin-series",
  "level": "2",
  "url": "sec-series-power-series.html#def-maclaurin-series",
  "type": "Definition",
  "number": "2.4.4",
  "title": "Maclaurin series.",
  "body": " Maclaurin series   The Taylor series expansion of a function about the point is called the Maclaurin series of ,    "
},
{
  "id": "table-Mac",
  "level": "2",
  "url": "sec-series-power-series.html#table-Mac",
  "type": "Table",
  "number": "2.4.5",
  "title": "Some standard Maclaurin series",
  "body": " Some standard Maclaurin series    Maclarin series  Interval of convergence                                                "
},
{
  "id": "sec-series-exercises",
  "level": "1",
  "url": "sec-series-exercises.html",
  "type": "Section",
  "number": "2.5",
  "title": "Series exercises",
  "body": " Series exercises     Investigate the convergence of the following series,                     Using a diagram of the number line investigate the convergence of the following series,     The geometric series has partial sums given by   Use this result to investigate the convergence of the series . Hint: Let denote partial sum of this series. Consider the quantity ....     Recall from the lecture that the geometric series has partial sums given by Therefore the series is convergent only when , in which case the infinite series sums to .  For the following definitions of determine whether the series converges and if so find the sum of the series.     .           Consider the series Show that this is a convergent series by finding the partial fraction expansion of and examining the partial sum .    Consider the infinite decimal expansion By expressing this as a suitable geometric series find the rational number represented by the decimal expansion.    Determine whether the following series is convergent or divergent     Determine whether the following series are convergent or divergent                          Determine whether the following series converges or diverges:     Determine whether the following series converges or diverges:     Determine whether the following series converges or diverges:     Determine whether the following series converges or diverges:     Determine whether the following series converges or diverges:     Determine whether the following series converges or diverges:     Determine whether the following series converges or diverges:     Write down the MacLaurin series (i.e. Taylor series about ) for the exponential function, .  Hence find the decimal expansion of correct to four decimal places.    Find the maximum error in the approximation given that .    Approximate to four decimal places using an appropriate Taylor series.    "
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
