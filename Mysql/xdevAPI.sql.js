db.getTables()
db.Dept.select()
db.use('testdb')
\use testdb
db.Test.select()
db.Dept.select()
db.Dept.select().limit(3)
db.Dept.select().limit(3).offset(3)
db.Dept.insert('pid','dname','captain').values(1,'영업4팀',null);
db.Dept.select()
db.Dept.select().where('id < :xid').bind('xid',7)
db.Dept.select()
db.Dept.update().set('captain',100).where('id=:xid').bind('xid',16)
db.Dept.update().set('captain',100).where('id=:xid').bind('xid',12)
db.Dept.select()
db.Dept.delete().where('id=12')
db.Dept,select().orderby('id desc')
session.sql("select * from Dept");
\ㅐoption --persist history.autoSave=1
\option --persist history.autoSave=1
/q
ll ~/mysqlsh
ll ~/.mysqlsh
\q
\sql
\sql desc Chat
db.Chat.insert('remark').values('테스트 채팅');
db.Chat.select()
\sql desc ChatUser
db.ChatUser.insert('chat','user').values(1,1).values(1,2);
\sql desc User
db.ChatUser.insert('chat','user').values(1,1).values(1,2);
db.ChatUser.select()
db.ChatUser.insert('chat','user').values(1,1).values(1,2);
db.ChatUser.select()
db.message
db.message.find()
\sql select last_insert_id()
db.message.add({_id: last_insert_id()})
db.message.add({_id: mysqlx.expr("last_insert_id()"), pins:[], msgs:[   { id: mysqlx.expr("cast(uuid_short() as char)"),     sender: 1, sentdt: mysqlx.expr("CURRENT_TIMESTAMP()"),     mtype: 'T', msg: "안녕하세요!" }   ] })
db.messages.find()
db.message.find()
db.message.find().fields('_id')
db.message.find().fields('_id').limit(2).offset(1)
db.message.find('_id=1')
db.getCollections()
db.createColection('myColl')
db.createCollection('myColl')
db.myColl
myColl = db.myColl
myColl.add({name: 'Nadya'})
myColl.find()
session.sql('select uuid()')
myColl.add({name: 'Diana'})
myColl.find()
myColl.modify('name=:name').set('age',50).bind('name', 'Nadya')
myColl.find()
myColl.modify('name=:name').set('age',50).bind('name', 'Diana')
myColl.find()
myColl.modify('name=:name').unset('age').bind('name', 'Diana')
myColl.find()
myColl.modify('name=:name').patch({age:56}).bind('name', 'Diana')
myColl.find()
db.message
db.message.find()
db.message.find('_id')
db.message.find('_id=1')
db.message.modify('_id=1').arrayAppend('msgs',   { id: mysqlx.expr("cast(uuid_short() as char)"),     sender:2, sentdt: mysqlx.expr("now()"),      mtype: 'T', msg: '네 무엇을 도와드릴까요?' })
db.message.find()
db.message.modify('_id=1').set('pins',[99000431379742721])
m1 = db.message.find('_id=1')
db.message.modify('_id=1').arrayDelete('pins[0]')
m1
db.message.modify('_id=1').arrayAppend('pins', "99000431379742721")
m1
db.message.modify('_id=1').arrayAppend('pins', "990004313797421")
m1
db.message.modify('_id=1').arrayDelete('pins[1]')
db.message.modify('_id=1').arrayAppend('pins', "99000431379742720")
m1
db.message.modify('_id=1').arrayInsert('pins[1]', "99")
m1
db.message.modify('_id=1').arrayDelete('pins[1]')
m1
db.message.find('_id=1').fields('msgs')
db.message.find('_id=1').fields('msgs[1]')
db.ChatUser.select()
db.ChatUser.update().set('lastread',"99000431379742720").where('user=1 and chat=1 ')
db.ChatUser.select()
db.ChatUser.update().set('lastread',"99000431379742721").where('user=2 and chat=1 ')
db.ChatUser.select()
db.ChatUser.update().set('lastread',mysqlx.expr("f_lastmsgid(1)")).where('chat=1 and user=1')
db.ChatUser.select()
db.message.select()
db.getCollections()
db.message.select()
db.message.find()
db.message.modify('_id=1').arrayDelete('pins[0]')
db.message.find()
session.startTransaction()
db.message.modify('_id=1').arrayDelete('pins[0]')
m1
session.rollback()
m1
session.startTransaction()
session.setSavepoint('tx-rm')
db.message.modify('_id=1').arrayDelete('pins[0]')
m1
session.setSavepint('tx-append')
session.setSavepoint('tx-append')
db.message.modify('_id=1').arrayAppend('pins','99')
m1
session.rollbackTo('tx-append')
m1
session.rollback()
m1
session.startTransaction()
session.setSavepoint('Tx1')
m1
db.message.find()
db.message.remove('_id=1')
m1
db.message.find()
session.rollbackTo('Tx1')
db.message.find()
session.commit()
m1
db.message.createIndex("idx_message_msgs_id",   { fields:[     field: '$.msgs[*].id',     type: 'TEXT(20)',     required: true,     array: false ] })
db.message.createIndex("idx_message_msgs_id",   { fields:[     field: '$.msgs[*].id',     type: 'TEXT(20)',     required: true,     array: false} ] })
db.message.createIndex("idx_message_msgs_id",   { fields:[    { field: '$.msgs[*].id',     type: 'TEXT(20)',     required: true,     array: false} ] })
\sql show index from message;
\sql show index from message\G
db.message.createIndex("idx_message_msgs_id",   { fields:[    { field: '$.pins',     type: 'CHAR(55)',     required: false,     array: true} ] })
db.message.createIndex("idx_message_msgs_pins",   { fields:[    { field: '$.pins',     type: 'CHAR(55)',     required: false,     array: true} ] })
\sql show index from message\G
db.message.dropIndex('idx_message_pins')
\sql show index from message\G
db.message.dropIndex('idx_message_msgs_pins')
\sql show index from message\G
cat ~/.mysqlsh/history.js
\quit