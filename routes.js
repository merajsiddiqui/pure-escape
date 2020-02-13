var appRouter = function (app) {
    app.get("/", (req, res)=>{
        res.send({data :'Invalid Endpoint... refer documentation'})
    })

    const respone = (arg) => {
        if((arg%5) == 0 && (arg%3) == 0) {
            return 'PE';
        } else if((arg%5) == 0){
            return 'E';
        } else if((arg%3) == 0){
            return 'P'
        } else{
            return arg
        }
    }

    app.get("/:id", function(req, res) {
        let arg = req.params.id
        if(!isNaN(arg)){
            res.status(200).json({data: respone(arg)})
        } else{
            res.json({
                error: "Provided data is not an integer"
            })
        }
    });
}

module.exports = appRouter;
