import {openDatabase} from "react-native-sqlite-storage";



export const db = openDatabase({
    name: "rn_sqlite"
})
export const createTableTest = () => new Promise((resolve,reject) => {
    db.transaction(txn => {
        txn.executeSql(
            `CREATE  TABLE  IF NOT EXISTS test (
                                json TEXT
                                   )`,
            [],
            (sql,res) => {
                resolve(res)
                console.log("table created " + res)
            },
            error => {
                reject(error)
                console.log("couldn't create table: " + error)
            }
        );
    });})

export const addTestToDB = (json) => new Promise((resolve,reject) => {
    db.transaction(txn => {
        txn.executeSql(
            'INSERT INTO test (json) VALUES (?)',
            [json],
            (tx, results) => {
                resolve(results)
                console.log(`Test added successfully ${results.insertId} i ${tx.json}`);
            },
            (error) => {
                reject(error)
                console.error('Error adding test:', error);
            }
        );
    });})



export const getTestsFromDB= () =>{ const promise = new Promise( (resolve,reject)=> {
    db.transaction((txn) => {
        txn.executeSql(
            'SELECT json FROM test LIMIT 4',
            [],
            (tx, results) => {
                resolve(results)

            },
            (error) => {
                reject(error)
                console.error('Error adding test:', error);

            }
        )
    })})
    return promise
}




// export const getTestById = (id) => new Promise((resolve,error) => {
//     db.transaction(txn => {
//         txn.executeSql(
//             'SELECT * FROM test WHERE idTest = ?',
//             [id],
//             (tx, results) => {
//                 console.log(results.rows.raw())
//                 return results.rows.raw()
//             },
//             (error) => {
//                 console.error('Error adding test:', error);
//             }
//         )
//     });})
// export const createTableTask = () => new Promise((resolve,error) => {
//     db.transaction(txn => {
//         txn.executeSql(
//             `CREATE  TABLE  IF NOT EXISTS task (
//                                                    idTask INTEGER PRIMARY KEY AUTOINCREMENT,
//                                                    idTest TEXT,
//                                                    question TEXT,
//                                                    duration INTEGER
//              )`,
//             [],
//             (sql,res) => {
//                 console.log("table created")
//             },
//             error => {
//                 console.log("couldn't create table: " + error)
//             }
//         )
//     });})
//
// export const addTaskToDB = (task) => new Promise((resolve,error) => {
//     db.transaction(txn => {
//         txn.executeSql(
//             '' +
//             'INSERT INTO task (idTest, question, duration) VALUES (?, ?, ?)',
//             [task.idTest, task.question, task.duration],
//             (tx, results) => {
//                 console.log('Test added successfully');
//             },
//             (error) => {
//                 console.error('Error adding test:', error);
//             }
//         );
//     });})
//
//
//
// export const getTaskById = (id) => new Promise((resolve,error) => {
//     db.transaction(txn => {
//         txn.executeSql(
//             'SELECT * FROM task WHERE idTest = ?',
//             [id],
//             (tx, results) => {
//                 return results.rows.raw()
//             },
//             (error) => {
//                 console.error('Error adding test:', error);
//             }
//         );
//     });})
// export const getTaskIdByQuestion = (q)=> new Promise((resolve,error) => {
//     db.transaction(txn => {
//         txn.executeSql(
//             'SELECT idTest FROM task WHERE question = ?',
//             [q],
//             (tx, results) => {
//                 return results.rows.item(0)
//             },
//             (error) => {
//                 console.error('Error adding test:', error);
//             }
//         );
//     });})
//
//
//
//
// export const createTableAnswer = () => new Promise((resolve,error) => {
//     db.transaction(txn => {
//         txn.executeSql(
//             `CREATE  TABLE  IF NOT EXISTS answer (
//                                                      idTask INTEGER,
//                                                      content TEXT,
//                                                      isCorrect INTEGER
//              )`,
//             [],
//             (sql,res) => {
//                 console.log("table created")
//             },
//             error => {
//                 console.log("couldn't create table: " + error)
//             }
//         )
//     });})
//
//
// export const addAnswerToDB = (answer) => new Promise((resolve,error) => {
//     db.transaction(txn => {
//         txn.executeSql(
//             'INSERT INTO answer (idTask, content, isCorrect) VALUES (?, ?, ?)',
//             [answer.idTask, answer.content, answer.isCorrect],
//             (tx, results) => {
//                 console.log('Test added successfully');
//             },
//             (error) => {
//                 console.error('Error adding test:', error);
//             }
//         );
//     });})
//
//
// export const getAnswerById = (id) => new Promise((resolve,error) => {
//     db.transaction(txn => {
//         txn.executeSql(
//             'SELECT * FROM answer WHERE idTask = ?',
//             [id],
//             (tx, results) => {
//                 return results.rows.raw()
//             },
//             (error) => {
//                 console.error('Error adding test:', error);
//             }
//         );
//     });})
