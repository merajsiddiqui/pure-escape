var appRouter = function (app) {
    app.get("/", (req, res)=>{
        res.send({data :'Invalid Endpoint... refer documentation'})
    })

    app.get("/:id", function(req, res) {
        let arg = req.params.id
        if(!isNaN(arg)){
            if((arg%5) == 0 && (arg%3) == 0) {
                res.status(200).json({data: 'PE'})
            } else if((arg%5) == 0){
                res.status(200).json({data: 'E'})
            } else if((arg%3) == 0){
                res.status(200).json({data: 'P'})
            } else{
                res.status(200).json({data: arg})
            }
        } else{
            res.json({
                error: "Provided data is not an integer"
            })
        }
    });
}

module.exports = appRouter;
