# Treasure Hunt

Do your best to come up with answers (at least guesses) to these questions, but
don't take too long on each. I just want to get you thinking about these things.

1. What values do the bars in the graph start out at? (See reducers/index.js.)
0
2. Where does the graph get its data?
line 13
3. What happens when the buttons are clicked?
a vote is cast (state is changed)
4. What functions are in actions/index.js?
export function vote(flavor)
5. Why so many files named index.js?
the root and each component need an index of their very own
6. List as many things as you can that you see in this app that you haven't seen
   in our other examples so far.
we haven't seen this index setup
'react-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
return Object.assign
let percentHeight = (this.props.value / this.props.max * 100).toFixed(2) + "%";
        if (this.props.value === 0) {
            percentHeight = "auto";