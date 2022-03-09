// Typedef tree node
typedef struct tnode *Treeptr;

typedef struct tnode {  /* the tree node */
    char *word;         /* points to the text  */
    int count;          /* number of occurences */
    Treeptr left;       /* left child */
    Treeptr right;      /* right child */
} Treenode;