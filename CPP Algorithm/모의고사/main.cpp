#include <string>
#include <vector>

using namespace std;

const vector<int> person1 = {1,2,3,4,5};
const vector<int> person2 = {2,1,2,3,2,4,2,5};
const vector<int> person3 = {3,3,1,1,2,2,4,4,5,5};
vector<int> answer;

int compare(vector<int> ans, vector<int> per) {
    int ret = 0;
    int rep = 0;
    for(int i = 0; i< ans.size(); i++) {
        int cur_ans = ans.at(i);
        if(rep == per.size())
            rep = 0;
        if(cur_ans == per.at(rep))
            ret++;
        rep++;
    }
    return ret;
}

void sort_person(int a, int b, int c) {
    if(a>b && a>c)
        answer.push_back(1);
    else if(b>a && b>c)
        answer.push_back(2);
    else if(c>a && c>b)
        answer.push_back(3);
    else if(a == b && a>c) {
        answer.push_back(1);
        answer.push_back(2);
    }
    else if(a == c && a>b) {
        answer.push_back(1);
        answer.push_back(3);
    }
    else if(b == c && b>a) {
        answer.push_back(2);
        answer.push_back(3);
    }
    else {
        answer.push_back(1);
        answer.push_back(2);
        answer.push_back(3);
    }
}

vector<int> solution(vector<int> answers) {
    int cnt1 = compare(answers, person1);
    int cnt2 = compare(answers, person2);
    int cnt3 = compare(answers, person3);
    
    sort_person(cnt1, cnt2, cnt3);

    return answer;
}