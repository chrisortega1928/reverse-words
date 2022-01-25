function reverse(str,start,end)
        {
                // Temporary variable
                // to store a character
                let temp;
                
                
                while (start <= end)
                {
                    // temp is assigned with the starting letter
                    temp = str[start];

                    // the last letter is switched with the starting letter
                    str[start]=str[end];

                    // the last letter is assigned with starting letter
                    str[end]=temp;

                    // start - 1
                    start++;

                    // end - 1
                    end--;

                    // after this iteration, the word shrinks from both sides
                }
        }

// Function to reverse words
function reverseWords(s)
        {
                // this line returns an array of each character
                // and space within the string argument
                s=s.split("");

                // this start variable will be used in the call 
                // to the reverse function
                let start = 0;

                // The end variable here acts like an iterator.
                // However, the condition to activate the if statement's body is
                // when the iterator acts as an index of the s array, thereby
                // retrieve the character value at at that index position. 
                for (let end = 0; end < s.length; end++)
                {
                        
                        // The if statement's condition gets tested for every iteration
                        // of the for-loop. If the index value retrieved from the s array is a space,
                        // we reverse the previous word. Reverse all words except the last word
                        // since there's no space after the last word.
                        if (s[end] == ' ')
                        {
                            // reverse function is called
                            reverse(s, start, end);

                            // the next start value is the integer value after the end
                            // since we want to start on the next word 
                            start = end + 1;
                        }
                }

                // Reverse the last word
                reverse(s, start, s.length - 1);

                // Join the array of characters into a string
                return s.join("");
        }

// Driver Code
var s = "this puzzle is hard";
console.log(reverseWords(s));