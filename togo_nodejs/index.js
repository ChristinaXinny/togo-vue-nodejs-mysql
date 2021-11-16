const mysql = require('mysql');


// 创建链接对象
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'qwe123123',
    port: '3306',
    database: 'bnuz_web'
});

// 开始链接
conn.connect();

var selectSql = function (insert_sql) {
    //执行sql
    const sql = 'INSERT INTO `bnuz_web`.`user` (`user_id`, `user_name`, `user_phone`, `user_password`, `user_age`, `user_address`, `user_city`) VALUES (10005, "rr", 18827484936, "rrr", 34, "上海哈哈哈哈", "河北");';
    conn.query(sql, (error, result) => {
        if (error) {
            console.log('error', error);
            return;
        }
        console.log('result', result);
    })

}

//执行sql
const sql = 'INSERT INTO `bnuz_web`.`user` (`user_id`, `user_name`, `user_phone`, `user_password`, `user_age`, `user_address`, `user_city`) VALUES (10005, "rr", 18827484936, "rrr", 34, "上海哈哈哈哈", "河北");';
conn.query(sql, (error, result) => {
    if (error) {
        console.log('error', error);
        return;
    }
    console.log('result', result);
})

//  关闭
conn.end();