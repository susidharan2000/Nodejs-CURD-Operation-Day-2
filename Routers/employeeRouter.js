import express from "express";
import { createEmp, deleteEmp, editEmp, getEmployees, getEmployeesId } from "../Controllers/employeeController.js";


const router = express.Router();

//get employee details
router.get('/empDetails',getEmployees);

//get employee detail by id
router.get('/empDetails/:id',getEmployeesId );

// Create Employee
router.post('/createEmp',createEmp);

// update Employee
router.put('/EditEmp/:id',editEmp);

// Delete Emplopyee
router.delete('/deleteEmp/:id',deleteEmp);

export default router;