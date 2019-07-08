/*
  My solution to https://www.youtube.com/watch?v=10WnvBk9sZc

  Code written before watching mock interviewee write his code.

  PROBLEM

    Write a function that takes two strings, s1 and s2 and returns the longest common subsequence of s1 and s2

  TEST CASES

    Initial
      "ABAZDC", "BACBAD" => "ABAD"
      "AGGTAB", "GXTXAYB" => "GTAB"
      "aaaa", "aa" => "aa"
    
    Interviewee Corner Cases
      "", "ddd" => ""
      "ABBA", "ABCABA" => "ABBA"
*/

simpleAssert(longestCommonSubstring("ABAZDC","BACBAD"), "ABAD")
simpleAssert(longestCommonSubstring("AGGTAB","GTAB"), "GTAB")
simpleAssert(longestCommonSubstring("aaaa","aa"), "aa")
simpleAssert(longestCommonSubstring("","aa"), "")
simpleAssert(longestCommonSubstring("ABBA","ABCABA"), "ABBA")


function longestCommonSubstring(_s1, _s2) {
  const s1 = _s1.split('');
  const s2 = _s2.split('');
  return s1.slice(0).reduce((acc, cur, idx, arr) => {
    const s1FromCurrentIndex = s1.slice(idx);
    if(s1FromCurrentIndex.length < acc.length) {
      arr.splice(idx);
      return acc;
    }
    const longestCommonSubstringFromCurIndex = longestCommonSubstringFromZeroIndex(s1FromCurrentIndex, s2);
    if (longestCommonSubstringFromCurIndex.length > acc.length) {
      return longestCommonSubstringFromCurIndex;
    }
    return acc;
  }, '');
  /* Psuedocode comments before writing code */
  // iterate through s1
  // if length of the rest of s1 from(inclusive) cur to end of s1 is less than the length of the current longest subsequence, break out of loop
  // figure out the longest common substring for s1 and s2 but only from the cur element to the end of s1 within s1.
  // if greater than current subsequence, then replace

  // return longest common subsequence
}

function longestCommonSubstringFromZeroIndex(s1, s2) {
  return s1.slice(0).reduce((acc, cur, idx, arr) => {
    if (acc.currentLongestSubstring.length > s2.length) {
      arr.splice(idx);
      return acc;
    }
    const nextS2CheckIndex = (acc.lastMatchIndex >= 0) ? (acc.lastMatchIndex + 1) : 0;
    if (nextS2CheckIndex === s2.length) {
      arr.splice(idx);
      return acc;
    }
    const remainingS2 = s2.slice(nextS2CheckIndex);
    const foundIndex = remainingS2.findIndex(_cur => cur === _cur);
    const matchIndex = foundIndex + (s2.length - remainingS2.length);
    if(foundIndex >= 0) {
      return Object.assign(acc, {
        currentLongestSubstring: (acc.currentLongestSubstring+s2[matchIndex]),
        lastMatchIndex: matchIndex
      })
    }
    return acc;
  }, { currentLongestSubstring: '', lastMatchIndex: -1, }).currentLongestSubstring;
  /* Pseudocode comments before writing code */
  // iterate through s1 starting at the index of the outer loop cur
      // perform should continue checks (IE if current subsequence is longer than whole length of second string)
      
      // check to see if last index of a character that found a match with current char in s1 + 1 is out of bounds

      // if yes, then break loop

      // starting at the last index of a character that found a match with current char in s1 + 1, check if current subsequence with current character appended exists in s2
      
      // if so, append current character to current sub sequence
  // return current sub sequence
}

function simpleAssert(a, b) {
  if(a !== b) {
    console.log(`FAILURE: expected ${a} to equal ${b}.`)
  } else {
    console.log(`PASSED: ${a}`);
  }
}
