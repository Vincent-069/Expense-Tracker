const ExpenseSchema = require('../models/ExpenseModel');


exports.addExpense = async(req,res) =>{
    const {title,amount,category,type,date,description} = req.body;

    const expense = ExpenseSchema({
        title,
        amount,
        category,
        type,
        date,
        description
    })

    try {
        // validations
        if(!title || !category || !description || !date){
            return res.status(400).json({message: 'All fields are required'})
        }
        if(amount<=0 || !amount === 'number'){
            return res.status(400).json({message: 'Amount must be a positive number'})
        }
        await expense.save()
        res.status(200).json({message:'expense Added'}) 
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }

    console.log(expense)
}

exports.getExpense = async(req,res) => {
    try {
        const expense = await ExpenseSchema.find().sort({createdAt:-1});
        res.status(200).json(expense);
    } catch (error) {
        res.status(500).json({message: 'Server Error'});
    }
}

exports.deleteExpense = async(req,res) => {
    // we can delete the data if we can get the id 
    const {id} = req.params;
    console.log(req.params);
    ExpenseSchema.findByIdAndDelete(id)
        .then((expense) => {
            res.status(200).json({message: 'Expense deleted'});
        })
        .catch((err)=>{
            res.status(500).json({message: 'Server Error'});
        })
}