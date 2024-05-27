const employees =[
    {id:1,emp_name:'susi',designation:'QA'},
    {id:2,emp_name:'Deo',designation:'FSD'},
    {id:3,emp_name:'Leo',designation:'Devops Engnieer'},
    {id:4,emp_name:'jhon',designation:'UX/Ui Designer'},
    {id:5,emp_name:'adam',designation:'Soloution Arc'}
];

//get all employee
export const getEmployees = (req,res)=>{
    res.status(200).json({Data:employees});
}

// get by id
export const getEmployeesId = (req,res)=>{
    const emp_id = req.params.id;
     const emp_Detail = employees.find((ele)=>(ele.id == emp_id));
     if(!emp_Detail){
        return res.status(200).send("employee Id not dound");
     }
    console.log(emp_id);
    res.status(200).json({Message:"Employee Details",Data:emp_Detail});
}

//create employee or POST method
export const createEmp = (req,res)=>{
    const {emp_name,designation}  = req.body;
    const newEmployee = {
        id:employees.length + 1,
        emp_name:emp_name,
        designation:designation
    }
    employees.push(newEmployee);
    res.status(200).json({Message:"Employee Created Successfully",data:newEmployee});
}

// Edit Employee detail

export const editEmp = (req,res)=>{
    const emp_id = req.params.id;
    const {emp_name,designation}  = req.body;
    const index = employees.findIndex((ele)=>ele.id == emp_id );
    if(index === -1){
        res.status(404).send("Employee detail not found");
    }
    employees[index].emp_name = emp_name;
    employees[index].designation = designation;
    res.status(200).json({Message:"Employee Updated Successfully",data:employees[index]});
}

//Delete Employee

export const deleteEmp = (req,res)=>{
    const emp_id = req.params.id;
    const index = employees.findIndex((ele)=>ele.id == emp_id );
    if(index === -1){
        res.status(404).send("Employee detail not found");
    }
    employees.splice(index,1);
    res.status(200).json({Message:"Employee deleted Successfully"});
}