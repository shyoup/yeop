#include <stdio.h>
#include <string.h>
int main() {
	char input[100];
	int cur = 0;
	int sum = 0;
	scanf("%s",input);
	for(int i=0; i<strlen(input); i++) {   // c에서 문자열 길이는 strlen으로 체크
		cur++;
		if(input[i] == 'x') {
			cur = 0;
		}
		sum += cur;
	}
	printf("%d", sum);
	return 0;
}