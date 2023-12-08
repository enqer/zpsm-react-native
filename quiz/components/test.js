import {Text, TouchableOpacity, View} from "react-native";
import {useEffect, useState} from "react";
import {useNavigation} from "@react-navigation/native";
import QuizResult from "./quizResult";


let timer = () => {};
const Test = ({route}) => {
    const nav = useNavigation()
    const [score,setScore] = useState(0)
    const [whichQuestion, setWhichQuestion] = useState(0)
    const tasks = [
        {
        "question": "Który wódz po śmierci Gajusza Mariusza, prowadził wojnę domową z Sullą ?",
        "answers": [
            {
                "content": "LUCJUSZ CYNNA",
                "isCorrect": true
            },
            {
                "content": "JULIUSZ CEZAR",
                "isCorrect": false
            },
            {
                "content": "LUCJUSZ MURENA",
                "isCorrect": false
            },
            {
                "content": "MAREK KRASSUS",
                "isCorrect": false
            }
        ],
        "duration": 30
    },
        {
        "question": "2 + 2 x 2 =",
        "answers": [
            {
                "content": "10",
                "isCorrect": false
            },
            {
                "content": "8",
                "isCorrect": false
            },
            {
                "content": "6",
                "isCorrect": true
            },
            {
                "content": "4",
                "isCorrect": false
            }
        ],
        "duration": 30
    },
        {
        "question": "Który z tych krajów ma największą powierzchnię?",
        "answers": [
            {
                "content": "Madagaskar",
                "isCorrect": false
            },
            {
                "content": "Indonezja",
                "isCorrect": true
            },
            {
                "content": "Kolumbia",
                "isCorrect": false
            },
            {
                "content": "Egipt",
                "isCorrect": false
            }
        ],
        "duration": 30
    }
    ]
    const [test,setTest] = useState([])
    const [testLen,setTestLen] = useState(0)
    const [question, setQuestion] = useState('')
    const [isOver, setIsOver] = useState(false)

    const [timeLeft, setTimeLeft] = useState(30);


   // @ts-ignore
    useEffect(() => {
        console.log("efetk1 " +route.params.id)
        fetch(`https://tgryl.pl/quiz/test/${route.params.id}`)
            .then(response => response.json())
            .then(data => {
                {
                    setTest(data)
                    // setTimeLeft(data.tasks[0].duration)
                    setTestLen(data.tasks.length)
                    setQuestion(data.tasks[0].question)
                    console.log("taski  " + data.id)
                }
            })
            .catch(error => {
                console.error(error);
            });
    },[])

        const startTimer = () => {
            timer = setTimeout(() => {
                if(timeLeft <= 0){
                    clearTimeout(timer);
                    showNextQuestion()
                    start(test.tasks[whichQuestion].duration)
                    return false;
                }
                setTimeLeft(timeLeft-1);
            }, 1000)
        }

        useEffect(() => {
            console.log("efetk2 " +route.params.id)
            startTimer();

            return () => clearTimeout(timer);
        },);

        const start = (time) => {
            setTimeLeft(time)
            clearTimeout(timer);
            startTimer();
        }
    const showNextQuestion = () => {
            if (whichQuestion+1 === test.tasks.length)
                setIsOver(true)
            setWhichQuestion((whichQuestion) => whichQuestion + 1)

    }

    const handleAnswer = (answer) => {
        answer ? setScore(score => score + 1) : null
        showNextQuestion()
        start(test.tasks[whichQuestion].duration)
    }
    const displayQuestion = (qNum) => {
        return(
            <>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 18, color: 'black'}}>Question {qNum+1} of {testLen}</Text>
                    <Text style={{fontSize: 18, color: 'black'}}>Time: {timeLeft} sec</Text>
                </View>
                <View style={{backgroundColor: 'grey', height: 10, borderRadius: 15, marginTop: 15, borderWidth: 2, padding: 0}}>
                    <View style={{backgroundColor: 'white', height: 6, borderRadius: 15, padding:0, margin:0, width: `${timeLeft*(100/test.tasks[qNum].duration)}%`}}></View>
                </View>
                <View>
                    <Text style={{color: 'black', textAlign: 'center', fontSize: 22, marginTop: 20, marginBottom: 20}}>{test.tasks[qNum].question}</Text>
                </View>
                <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', borderWidth: 1}}>
                    {/*{test[qNum].answers.map(((answer, index) => {*/}
                    {/*    return (*/}
                    {/*                        <TouchableOpacity onPress={() => handleAnswer(answer.isCorrect)} key={index} style={{width: '30%', padding: 10, borderWidth: 1, borderRadius: 5, margin: 20}} >*/}
                    {/*                            <Text style={{color: 'black', textAlign: 'center'}}>{answer.content}</Text>*/}
                    {/*                        </TouchableOpacity>)*/}
                    {/*    }))*/}
                    {/*}*/}
                    {test.tasks[qNum].answers.map(((answer, index) => {
                        return (
                                            <TouchableOpacity onPress={() => handleAnswer(answer.isCorrect)} key={index} style={{width: '30%', padding: 10, borderWidth: 1, borderRadius: 5, margin: 20}} >
                                                <Text style={{color: 'black', fontWeight: 'bold', textAlign: 'center'}}>{answer.content}</Text>
                                            </TouchableOpacity>)
                        }))
                    }

                </View>
            </>
        )
    }

    return(
        <View style={{width: '90%',flexDirection: 'column', alignSelf: 'center', marginTop: 25}}>
            {/*{displayQuestion(whichQuestion)}*/}
            {(whichQuestion < testLen) ? displayQuestion(whichQuestion) : null}
            {isOver ? <QuizResult score={score} maxScore={testLen} /> : null}
        </View>
    )
}

export default Test
