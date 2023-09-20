let tests = [
    {
        question: '9 * 5 =',
        answer: '45',
    },
    {
        question: '7 + 15 =',
        answer: '22',
    },
    {
        question: '5 * 3 + 14 =',
        answer: '29',
    },
    {
        question: '6 * 2 / 4 + 14 =',
        answer: '17 '
    },
    {
        question: '50 + 15 / 3 =',
        answer: '55'
    }
];

for (let i = 0; i < tests.length; i ++) {

    let test = tests[i];
    let ans = test.answer;
    let ques = test.question;
    let num = i + 1;

    userAns = prompt(' (' + num + '/' + tests.length +')\n' + ques);

    console.log('userAns:', userAns, 'ans:', ans, userAns == ans);
     
    if(userAns === ans) {
        alert('Correct answer');
    } else {
        alert('Incorrect answer');
    }

}