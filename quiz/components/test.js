import {Text, TouchableOpacity, View} from "react-native";
import {useEffect, useState} from "react";
import {useNavigation} from "@react-navigation/native";
import QuizResult from "./quizResult";



const Test = ({route}) => {
    const nav = useNavigation()
    const [score,setScore] = useState(0)
    const [whichQuestion, setWhichQuestion] = useState(0)
    const [data,setData] = useState({})
    const [isOver, setIsOver] = useState(false)
    const [timeLeft, setTimeLeft] = useState(0);
    const [durations, setDurations] = useState([])
    const [tag, setTag] = useState('')
    const [total, setTotal] = useState(0)


    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);


    useEffect(() => {
        let interval;

        if (isActive) {
            interval = setInterval(() => {
                setSeconds((prevSeconds) => {
                    if (prevSeconds === 0) {

                        // clearInterval(interval);
                        // setIsActive(false);
                        // setSeconds(data.tasks[whichQuestion+1].duration);
                        setSeconds(durations[whichQuestion]);
                        showNextQuestion()
                    } else {
                        return prevSeconds - 1;
                    }
                });
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isActive, isOver,score]);

    const startTimer = (initialSeconds) => {
        setSeconds(initialSeconds);
        setIsActive(true);
    };

    const stopTimer = () => {
        setIsActive(false);
    };

    const resetTimer = (initialSeconds) => {
        // setIsActive(false);
        setSeconds(initialSeconds);
    };



    const fetchData =  async () => {
        try {
            const respone = await fetch(`https://tgryl.pl/quiz/test/${route.params.id}`)
            const json = await respone.json()
            setData(json)
            // setDuration(json.tasks[0].duration)
            setTag(json.tags[0])
            setTotal(json.tasks.length)
            for (let i = 0; i< json.tasks.length; i++)
                setDurations(durations=>[...durations,json.tasks[0].duration])
            // setTimeLeft(json.tasks[0].duration)
            startTimer(json.tasks[0]?.duration)
        }catch (e){
            console.error()
        }
    }
    const fetchDataInit = async () => {
        await fetchData()
    }

    useEffect( () => {
        fetchDataInit()
    },[])
    const handlerPostResult = async () => {
        await fetch('https://tgryl.pl/quiz/result', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nick: "Andrzej",
                score: score,
                total: total,
                type: tag
            }),
        })
            .then((res) => res.json())
            .then((result)=>console.log(result))
            .catch(console.error)
    }

    const showNextQuestion = async () => {

        console.log(whichQuestion)
        if ((whichQuestion + 1) === durations.length) {
            setIsOver(true)
            stopTimer()
            setWhichQuestion((whichQuestion) => whichQuestion + 1)
            await handlerPostResult()
            return
        }
        startTimer(durations[whichQuestion + 1])
        setWhichQuestion((whichQuestion) => whichQuestion + 1)

    }

    const handleAnswer = (answer) => {
        answer ? setScore(score => score + 1) : null
        stopTimer()
        showNextQuestion()
    }
    const displayQuestion = (qNum) => {

        return(
            <>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 18, color: 'black'}}>Question {qNum+1} of {data.tasks?.length || 0}</Text>
                    <Text style={{fontSize: 18, color: 'black'}}>Time: {seconds} sec</Text>
                </View>
                <View style={{backgroundColor: 'grey', height: 10, borderRadius: 15, marginTop: 15, borderWidth: 2, padding: 0}}>
                    <View style={{backgroundColor: 'white', height: 6, borderRadius: 15, padding:0, margin:0, width: `${seconds*(100/durations[qNum] || 1)}%`}}></View>
                    {/*<View style={{backgroundColor: 'white', height: 6, borderRadius: 15, padding:0, margin:0, width: `${seconds*(100/data.tasks[qNum]?.duration || 1)}%`}}></View>*/}
                </View>
                <View>
                    <Text style={{color: 'black', textAlign: 'center', fontSize: 22, marginTop: 20, marginBottom: 20}}>{data.tasks[qNum]?.question}</Text>
                </View>
                <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', borderWidth: 1}}>
                    {data.tasks[qNum]?.answers.map(((answer, index) => {
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
            {/*{(whichQuestion < data.tasks?.length  || 0)  ? displayQuestion(whichQuestion) : null}*/}
            {(whichQuestion+1 <= durations.length )  ? displayQuestion(whichQuestion) : null}
            {whichQuestion+2 >= durations.length && whichQuestion !== 0 ? <QuizResult nick={"Andrzej"} type={tag} score={score} maxScore={total} /> : null}
        </View>
    )
}

export default Test
