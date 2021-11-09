class Solution {
    public int[] solution(int[] prices) {
        ArrayList<int> answer = new ArrayList<int>();
        for(int i = 0; i<prices.size(); i++) {
            int a=0;
            for(int j=i+1; j<prices.size(); j++) {
                a++;
                if(prices[i] > prices[j]) break;
            }
            answer.push(a);
        }
        answer[answer.size()] = 0;
        return answer;
    }
}