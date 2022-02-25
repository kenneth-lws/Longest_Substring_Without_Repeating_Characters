var lengthOfLongestSubstring = function(s) {
    let ans = '';
    let start = 0;
    const map = new Map();
    for(let i=0;i<s.length;i++){
        if (map.has(s.charCodeAt(i)) && map.get(s.charCodeAt(i))>=start) {
            start = map.get(s.charCodeAt(i)) + 1;
            map.set(s.charCodeAt(i), i);
        }else{
            map.set(s.charCodeAt(i), i);
            if(ans.length<=s.substring(start,i+1).length){
                ans = s.substring(start,i+1);
            }
        } 
  }
  return ans.length;
};
