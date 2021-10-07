#include <string>
#include <vector>
#include <algorithm>

using namespace std;

vector<int> sortVector(vector<int> origin, int start, int end) {
    vector<int> ret;
    for(int i = start - 1; i<end; i++) {
        ret.push_back(origin.at(i));
    }
    sort(ret.begin(), ret.end());
    return ret;
}

vector<int> solution(vector<int> array, vector<vector<int>> commands) {
    vector<int> answer;
    
    for(int i =0 ; i<commands.size(); i++) {
        auto commandVec = commands.at(i);
        auto cur = sortVector(array, commandVec.at(0), commandVec.at(1));
        answer.push_back(cur.at(commandVec.at(2) - 1));
    }
      
    return answer;
}