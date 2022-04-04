#include <iostream>
#include <algorithm>
#include <string>
#include <queue>

using namespace std;

struct INFO {
    int rx, ry, bx, by, count;
};

INFO start;
int map[10][10];


//왼쪽으로도 가보고 오른쪽으로도 가보고 위로도 가보고 아래로도 가보고
int bfs() {
    const int dy[] = { -1, 1, 0, 0 };
    const int dx[] = { 0, 0, -1, 1 };

    int visted[10][10][10][10] = { 0, };
    queue<INFO> q;
    q.push(start);
    visted[start.ry][start.rx][start.by][start.bx] = 1;
    
    int ret = -1;
    while(!q.empty()) {
        INFO cur = q.front();
        q.pop();
        if(cur.count > 10) break;
        if(map[cur.ry][cur.rx] == 'O' && map[cur.by][cur.bx] != 'O') {
            ret = cur.count;
            break;
        }    
        for(int dir=0; dir<4; dir++) {                // 4 direction
            int next_ry = cur.ry;
            int next_rx = cur.rx;
            int next_by = cur.by;
            int next_bx = cur.bx;

            while(1) {
                if( )
            }
        }
    }

    return ret;
}

int main() {
    int width, height;
    for(int w=0; w<width; w++) {
        string str;
        cin >> str;
        for(int h=0; h<height; h++) {
            if(str[h] == 'B') {
                start.bx = w, start.by = h;
            } else if(str[h] == 'R') {
                start.rx = w, start.ry = h;
            } else {
                map[w][h] = str[h];
            }
        }
    }
    start.count = 0;

    cout << bfs() << endl;

    return 0;
}