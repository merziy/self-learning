int main(int n, char s[]) {
    int i, sign;

    if ((sign = n) < 0) /* assigning n to sign */
        n = -n;         /* make positive if negative */
    i = 0;
    do {                // generate digits in reverse 
        s[i++] = n % 10 + '0';  // get next digit
    } while (( n / 10) > 0 ); // delete it
    if (sign < 0 )
        s[i++] = '-';
    s[i] = '\0';
    reverse(s);
}