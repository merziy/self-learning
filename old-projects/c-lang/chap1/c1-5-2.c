#include <stdio.h>

/* Count characters in input; 1st Version */
int main() {
    long nc;

    nc = 0;
    while(getchar() != EOF)
        ++nc;
    printf("%ld\n", nc);
}

/* Count characters in input; 2nd Version */
int second() {
    double cc;

    for (cc = 0; getchar() != EOF; ++cc);
    printf("%.0f\n", cc);
}