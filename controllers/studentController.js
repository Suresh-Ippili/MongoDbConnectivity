import bodyParser from "body-parser";
import studentModel from "../model/student.js"
class studentController
{    static getAll= async (req,res)=>
    {

        console.log("getall")
        try{
               const resp = await studentModel.find();
               res.send(resp);         
        }
        catch(error)
        {
            console.log(error)
        }

    }
    static getById = async (req,res)=>
    {
console.log("getByid")
try{
      const resp = await studentModel.findById(req.params.id);
      res.send(resp);
}
catch(error)
{
    clg(error)
}
}
  
    static createStduent = async  (req, res)=>
    {
  console.log("REQ" + req.body)
        console.log("create")
try{
    // destructring
       const {name, age, fees } = req.body;
       const doc =  new studentModel(

        {
            name : name,
            age : age,
            fees : fees
        }
       )
       const resp = await doc.save();
       res.send(resp);
}
catch(error)
{
     console.log(error)
}

}

static updateStudent  = async(req, res)=>
{
    console.log(req.params.id);
    console.log(req.body)
    try {
      await studentModel.findByIdAndUpdate(req.params.id,{
        id: req.body.id,
        name: req.body.name,
        age: req.body.age,
        fees: req.body.fees,
      });
      const resp = await studentModel.save();
      res.send(resp);
    } catch (error) {
        res.status(500).send(error);
    }
  }


static deleteStudent = async (req, res)=>
{ try 
    {
    console.log("dele")
    console.log(req.params.id);
    const resp =  await studentModel.findByIdAndDelete(req.params.id);
    // const resp = await studentModel.save();
    res.send(resp);
  } catch (error) {
    res.status(500).send(error);
  }

}
}
export default studentController;