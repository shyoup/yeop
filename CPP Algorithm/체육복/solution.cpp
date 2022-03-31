#include <vector>

using namespace std;

int solution(int n, vector<int> lost, vector<int> reserve) {
    vector<int> cloths(n, 1);
    for(int i=0; i<lost.size(); i++) {
       int index = lost[i] - 1;
       cloths[index] -= 1;
    }

    for(int j=0; j<reserve.size(); j++) {
       int index = reserve[j] - 1;
       cloths[index] += 1;
    }

    int nocloth = 0;
    for(int k=0; k<cloths.size(); k++) {
        if(cloths[k] == 0) {
            if(k-1 > -1 && cloths[k-1] > 1) {
                if(cloths[k-1] > 1) cloths[k-1] -= 1;
            } else if(k+1 < cloths.size() && cloths[k+1] > 1) {
                cloths[k+1] -= 1;
            } else {
                ++nocloth;
            }
        }
    }
    return n-nocloth;
}