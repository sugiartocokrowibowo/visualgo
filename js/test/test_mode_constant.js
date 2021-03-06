/*
 * Sync this file with the PHP file Constant.php
 */

const QUESTION_TOPIC_BITMASK = "Bitmask";
const QUESTION_TOPIC_BST = "BST";
const QUESTION_TOPIC_HEAP = "Heap";
const QUESTION_TOPIC_UFDS = "UFDS";
const QUESTION_TOPIC_MST = "MST";
const QUESTION_TOPIC_SSSP = "SSSP";
const QUESTION_TOPIC_GRAPH_DS = "Graphds";
const QUESTION_TOPIC_GRAPH_TRAVERSAL = "GraphTraversal";

// General in several data-structures
const QUESTION_TYPE_DELETION = "Deletion";
const QUESTION_TYPE_INSERTION = "Insertion";
const QUESTION_TYPE_MIN_VALUE = "MinVal";
const QUESTION_TYPE_MAX_VALUE = "MaxVal";
const QUESTION_TYPE_K_SMALLEST_VALUE = "KSmallestVal";
const QUESTION_TYPE_INTERNAL = "Internal";
const QUESTION_TYPE_LEAVES = "Leaves";
const QUESTION_TYPE_ROOT = "Root";
const QUESTION_TYPE_GREATER_LESS = "greaterLess"; //heap and SSSP
const QUESTION_TYPE_TRAVERSAL = "Traversal"; //BST and GraphTraversal

// BST-Specific
const QUESTION_TYPE_AVL_ROTATION_INSERT = "avlRotationInsert";
const QUESTION_TYPE_AVL_ROTATION_DELETE = "avlRotationDelete";
const QUESTION_TYPE_AVL_HEIGHT = "avlHeight";
const QUESTION_TYPE_HEIGHT = "Height";
const QUESTION_TYPE_IS_AVL = "isAvl";
const QUESTION_TYPE_PREDECESSOR = "Predecessor";
const QUESTION_TYPE_SEARCH = "Search";
const QUESTION_TYPE_SUCCESSOR = "Successor";
const QUESTION_TYPE_SWAP = "Swap";

// Heap-Specific
const QUESTION_TYPE_EXTRACT = "extract";
const QUESTION_TYPE_HEAPIFY = "heapify";
const QUESTION_TYPE_HEAP_SORT = "heapSort";
const QUESTION_TYPE_RELATIONS = "relations";
const QUESTION_TYPE_IS_HEAP = "isHeap";

//Bitmask-Specific
const QUESTION_TYPE_OPERATION = "operation";
const QUESTION_TYPE_CONVERT = "convert";
const QUESTION_TYPE_NUMBER_ON = "numberOn";
const QUESTION_TYPE_LSONE = "LSOne";

// UFDS-Specific
const QUESTION_TYPE_FIND_SET_SEQUENCE = "findSetSeq";
const QUESTION_TYPE_FIND_SET_COMPRESSION = "findSetCompress";
const QUESTION_TYPE_IS_SAME_SET = "isSameSet";

//Graph DS-specific
const QUESTION_TYPE_DS_SIZE = "dsSize";
const QUESTION_TYPE_NEIGHBOURS = "neighbours";
const QUESTION_TYPE_NONZERO = "nonzero";

//Graph Traversal-Specific
const QUESTION_TYPE_DISCONNECT = "disconnect";

// MST-Specific
const QUESTION_TYPE_PRIM_SEQUENCE = "prim";
const QUESTION_TYPE_KRUSKAL_SEQUENCE = "kruskal";
const QUESTION_TYPE_MINIMAX_EDGE = "minimax";

// SSSP-Specific
const QUESTION_TYPE_PATH = "path";
const QUESTION_TYPE_PATH_WEIGHT = "pathWeight";

// General
const QUESTION_SUB_TYPE_NONE = "";
const QUESTION_SUB_TYPE_INSERTION = "insert";
const QUESTION_SUB_TYPE_DELETION = "delete";

// BST-Specific
const QUESTION_SUB_TYPE_INORDER_TRAVERSAL = "inorder";
const QUESTION_SUB_TYPE_POSTORDER_TRAVERSAL = "postorder";
const QUESTION_SUB_TYPE_PREORDER_TRAVERSAL = "preorder";

// Heap-Specific
const QUESTION_SUB_TYPE_MAX_HEAP = "max";
const QUESTION_SUB_TYPE_MIN_HEAP = "min";

// Bitmask-Specific
const QUESTION_SUB_TYPE_AND = "AND";
const QUESTION_SUB_TYPE_OR = "OR";
const QUESTION_SUB_TYPE_XOR = "XOR";
const QUESTION_SUB_TYPE_BINARY = "binary";
const QUESTION_SUB_TYPE_DECIMAL = "integer";

// Graph Traversal-Specific
const QUESTION_SUB_TYPE_DFS = "DFS";
const QUESTION_SUB_TYPE_BFS = "BFS";

// MST-Specific
const QUESTION_SUB_TYPE_MAXST = "max";
const QUESTION_SUB_TYPE_MINST = "min";

const ANSWER_TYPE_VERTEX = "vertex";
const ANSWER_TYPE_VERTEX_MCQ = "vertexMcq";
const ANSWER_TYPE_EDGE = "edge";
const ANSWER_TYPE_MCQ = "mcq";
const ANSWER_TYPE_FILL_BLANKS = "fillBlanks";

const ANSWER_AMT_ONE = 1;
const ANSWER_AMT_MULTIPLE = 2;

const MODE_GENERATE_QUESTIONS = 0;      //for training and control panel
const MODE_TEST_GENERATE_QUESTIONS = 1;   //for test and ans key
const MODE_CHECK_ANSWERS = 2;       //for training and control panel
const MODE_GET_ANSWERS = 3;         //for training and control panel
const MODE_GET_STUDENT_ANSWERS = 4;     //for future use
const MODE_CHECK_TEST_OPEN = 5;
const MODE_LOGIN = 6;           //for test and ans key
const MODE_TEST_SUBMIT = 7;         //for test
const MODE_TEST_GET_INFO = 8;       //for test and ans key
const MODE_TEST_GET_ANSWERS = 9;      //for ans key
const MODE_TEST_GET_STUDENT_ANSWERS = 10; //for ans key
const MODE_ADMIN = 11;            //for control panel
const MODE_ADMIN_GET_CONFIG = 12;     //for control panel
const MODE_ADMIN_EDIT_CONFIG = 13;      //for control panel
const MODE_ADMIN_RESET_ATTEMPT = 14;    //for control panel
const MODE_GET_SCOREBOARD = 15;

const UNANSWERED = "unanswered";
const NO_ANSWER = "noAnswer";
const CORRECT = "correct";

const TEST_GENERATE_QUESTIONS_TYPE_TEST = "test";
const TEST_GENERATE_QUESTIONS_TYPE_ANSWER = "answer";