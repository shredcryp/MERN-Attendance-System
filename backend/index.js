const mongoose=require('mongoose');
const express=require('express');
const app=express();
const amodel=require('./models/admin_schema')
const tmodel=require('./models/teacher_schema')
const smodel=require('./models/student_schema')

const bodyparser=require('body-parser')

//connect url from atlas
const dburl="mongodb+srv://bhavyen:Ubo0jBrQ9NldKcST@cluster0.v9uns5o.mongodb.net/Attendance_System?retryWrites=true&w=majority";

//connection params necessary
const connectionParams={
    useNewURLParser: true,
    useUnifiedTopology:true
}

//connection to atlas
mongoose.connect(dburl,connectionParams).then(()=>{
    console.info('connected to atlas')  
}).catch((err)=>{
    console.log(err);
})

app.use(bodyparser.json())



//Admin
//sign up post request
var a;
var s;
var p;
app.post('/admin_data',(req,res)=>{
    const{admin_name_signup, school_name_signup,admin_password_signup}=req.body;
    a=admin_name_signup
    s=school_name_signup
    p=admin_password_signup

    console.log(a,s,p)
    res.redirect('/insert')
})
//Inserting sign up data to mongodb
app.get('/insert',(req,res)=>{
    var Amodel=new amodel();
    Amodel.admin=a;
    Amodel.sname=s;
    Amodel.password=p;

    Amodel.save().then((data)=>{
        res.send('success')
    })
    .catch((err)=>{
        res.send(err)
    })
})

// login post request
app.post('/admin_login',(req,res)=>{
    const{admin_name_login, admin_password_login}=req.body;
    a=admin_name_login;
    p=admin_password_login;
    console.log(admin_name_login, admin_password_login)
    res.redirect('/admin_login_validation')
})


//login validation
app.get('/admin_login_validation',(req,res)=>{
    amodel.find().then((data)=>{
        const len=data.length;
        let i=0;
        while(i<len){
            if(data[i]["admin"]==a && data[i]["password"]==p){
                return res.status(200).json(true)
            }
            else if(i==len-1){
                return res.status(200).json(false)
            }
            else{
                ++i
            }
        }
    }).catch((err)=>{
        res.send('')
    })
})


//Teacher Code
//Sign up
var tname;
var tid;
var tsubject;
var tpassword;
//Post req for signup
app.post('/teacher_signup',(req,res)=>{
    const{teacher_name_signup,teacher_id_signup,teacher_subject_signup,teacher_password_signup}=req.body;
    tname=teacher_name_signup
    tid=teacher_id_signup
    tsubject=teacher_subject_signup
    tpassword=teacher_password_signup
    //console.log(teacher_name_signup,teacher_id_signup,teacher_subject_signup,teacher_password_signup)
    res.redirect('/insert_teacher')
})
//Inserting sign up data to mongodb
app.get('/insert_teacher',(req,res)=>{
    var Tmodel=new tmodel();
    Tmodel.Tname= tname; 
    Tmodel.Tid=tid;
    Tmodel.Tsubject=tsubject; 
    Tmodel.Tpassword=tpassword; 
    // console.log('get for teacher')

    Tmodel.save().then((data)=>{
        res.send('success')
    })
    .catch((err)=>{
        console.log(err)
    })
})
//Login for Teacher
//login post req
app.post('/teacher_login',(req,res)=>{
    const {teacheremail, teacherpassword}=req.body;
    tname=teacheremail;
    tpassword=teacherpassword;
    // console.log(teacheremail, teacherpassword);
    
    res.redirect('/teacher_login_validation');
    
    
})
let tlogin;
//login validation 
app.get('/teacher_login_validation',(req,res)=>{
    
    tmodel.find().then((data)=>{
        const len=data.length;
        let i=0;
        
        while(i<len){
            
            if(data[i]["Tname"]==tname && data[i]["Tpassword"]==tpassword){
                tlogin=data[i];
                return res.redirect('/sending')
                // return res.status(200).json([true,data[i]])
                
            }
            else if(i==len-1){
                return res.status(200).json(false)
            }
            else{
                ++i
            }
        }
    }).catch((err)=>{
        res.send('')
    })
})
app.get('/sending',(req,res)=>{
    smodel.find().then((data)=>{
        res.json([true,tlogin,data])
    }).catch((err)=>{
        console.log(err)
    })
})


//Student
//signup for student
var sname;
var sid;
var sbloodtype;
var sstandard;
var sparentname;
var spassword;
app.post('/student_signup',(req,res)=>{
    const {student_name_signup, student_id_signup, student_bloodtype_signup, student_standard_signup,student_parentname_signup,student_password_signup}=req.body;
    
    sname=student_name_signup;
    sid=student_id_signup;
    sbloodtype=student_bloodtype_signup;
    sstandard=student_standard_signup;
    sparentname=student_parentname_signup;
    spassword=student_password_signup;

    // console.log(student_name_signup, student_id_signup, student_bloodtype_signup, student_standard_signup,student_parentname_signup,student_password_signup);
    res.redirect('/insert_student')    
})

app.get('/insert_student',(req,res)=>{
    var Smodel=new smodel();

    Smodel.Sname=sname;
    Smodel.Sid=sid;
    Smodel.Sbloodtype=sbloodtype;
    Smodel.Sstandard=sstandard;
    Smodel.Sparentname=sparentname;
    Smodel.Spassword=spassword;

    Smodel.save().then((data)=>{
        res.send('success')
    })
    .catch((err)=>{
        console.log(err)
    })
})
//login for student
app.post('/student_login',(req,res)=>{
    const {studentemail, studentpassword}=req.body;
    sname=studentemail;
    spassword=studentpassword;
    // console.log(studentemail, studentpassword);
    res.redirect('/student_login_validation');
    
    
})
let slogin;
app.get('/student_login_validation',(req,res)=>{
    smodel.find().then((data)=>{
        const len=data.length;
        let i=0;
        while(i<len){
            if(data[i]["Sname"]==sname && data[i]["Spassword"]==spassword){
                slogin=data[i];
                return res.redirect('/sending_student')
            }
            else if(i==len-1){
                return res.status(200).json(false)
            }
            else{
                ++i
            }
        }
    }).catch((err)=>{
        res.send('')
    })
})  
app.get('/sending_student',(req,res)=>{
    res.send([true,slogin]);
})
app.get('/demo',(req,res)=>{
    smodel.find().then((data)=>{
        res.send(data);
    }).catch((err)=>{
        res.send('')
    })
})
let check_entries;
app.post('/teacher_login_studentatten',(req,res)=>{
    const{checkedEntries}=req.body;
    // console.log(checkedEntries)
    check_entries=checkedEntries;
    res.redirect('/studentatten_sending')
})
app.get('/studentatten_sending', (req, res) => {
    console.log(check_entries);
    smodel.find().then((data) => {
        const len = data.length;
        let i = 0;
        while (i < len) {
            if(data[i]["Scount"]==undefined){
                smodel.updateOne({ _id: data[i]._id }, { $set: { Scount: 1 } })
                    .then(() => {
                        console.log(`Scount updated for document with _id: ${data[i]._id}`);
                        // Continue processing or return response to client
                    })
                    .catch(err => {
                        console.log(err);
                        // Handle error appropriately
                    });
                let total_2=data[i-1]["Stotal"]+1
                smodel.updateOne({ _id: data[i]._id }, { $set: { Stotal: total_2 } })
                    .then(() => {
                        console.log(`Stotal updated for document with _id: ${data[i]._id}`);
                        // Continue processing or return response to client
                    })
                    .catch(err => {
                        console.log(err);
                        // Handle error appropriately
                    });

            }
            if (check_entries[i]) {
                let count=data[i]["Scount"]+1;
                
                // Update the Scount field for the ith iteration of data
                smodel.updateOne({ _id: data[i]._id }, { $set: { Scount: count } })
                    .then(() => {
                        console.log(`Scount updated for document with _id: ${data[i]._id}`);
                        // Continue processing or return response to client
                    })
                    .catch(err => {
                        console.log(err);
                        // Handle error appropriately
                    });
                 // Exit the loop after updating the data
            }
                let total = data[i]["Stotal"]+1;
                // Update the Scount field for the ith iteration of data
                smodel.updateOne({ _id: data[i]._id }, { $set: { Stotal: total } })
                    .then(() => {
                        console.log(`Stotal updated for document with _id: ${data[i]._id}`);
                        // Continue processing or return response to client
                    })
                    .catch(err => {
                        console.log(err);
                        // Handle error appropriately
                    });
                 // Exit the loop after updating the data
            
            i++;
        }
    }).catch((err) => {
        console.log(err);
    });
});

app.listen(5000,()=>{
    console.log('Listening on 5000');  
})
