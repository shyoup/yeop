#include <iostream>
#include <string>
#include <vector>

using namespace std;

string solution(string number, int k) {
    vector<string> arr;
    for(int i=0; i<number.size(); i++) {
        string temp = number.substr(i,1);
        while(k>0 && arr.size() > 0 && arr.back() < temp) {
            arr.pop_back();
            --k;
        }
        arr.push_back(temp);
    }
    string answer = "";
    for(int j=0; j<arr.size(); j++) {
        answer += arr[j];
    }
    if(k > 0) return answer.substr(0,k+1);
    return answer;
}